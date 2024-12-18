import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { FaMicrophone, FaPauseCircle } from "react-icons/fa"; // Icons for Speak and Hold

const RealTimeVoiceProcessor = () => {
  const [recording, setRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Maintain chat history
  const [isProcessing, setIsProcessing] = useState(false); // Loading indicator
  const [isListening, setIsListening] = useState(false); // Speech recognition state
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check if SpeechRecognition API is supported
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US"; // Set language
      recognition.continuous = false; // Single utterance mode
      recognition.interimResults = false; // Only final results
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { user: "User", message: transcript },
        ]);
        handleBotResponse(transcript); // Trigger bot response
      };

      recognition.onend = () => {
        setIsListening(false);
        if (recording) recognition.start(); // Restart if still recording
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };
    } else {
      alert("Your browser does not support Speech Recognition.");
    }
  }, [recording]);

  const startListening = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support audio recording.");
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });
      await processVoice(audioBlob); // Send the audioBlob to the backend
    };

    mediaRecorderRef.current.start();
    recognitionRef.current?.start(); // Start speech recognition
    setRecording(true);
  };

  const stopListening = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop(); // Stop speech recognition
    }
    setRecording(false);
  };

  const processVoice = async (audioBlob) => {
    setIsProcessing(true);

    console.log("Preparing to call API with audioBlob:", audioBlob);

    const formData = new FormData();
    formData.append("audio_file", audioBlob, "recording.webm"); // Ensure correct field name

    const start = performance.now(); // Log start time

    try {
      console.log("Sending API request...");
      const response = await fetch("http://localhost:8000/process_voice", {
        method: "POST",
        body: formData,
      });

      console.log("API response received:", response);

      if (!response.ok) {
        throw new Error("Failed to process voice");
      }

      const data = await response.json();
      console.log("API response data:", data);

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { user: "AI", message: data.llm_response },
      ]);

      if (data.audio_file) {
        playAudio(data.audio_file); // Play the AI's response
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the voice.");
    } finally {
      setIsProcessing(false);
      const end = performance.now(); // Log end time
      console.log(`Response time: ${end - start}ms`);
    }
  };

  const playAudio = (audioBase64) => {
    const audioBlob = new Blob(
      [Uint8Array.from(atob(audioBase64), (c) => c.charCodeAt(0))],
      {
        type: "audio/mpeg",
      }
    );

    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Real-Time Voice Processor</h1>
      <motion.div
        animate={{ scale: recording ? 1.2 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ marginBottom: "20px" }}
      >
        <p>{isListening ? "Listening..." : "Press Speak to Start"}</p>
      </motion.div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <motion.button
          onClick={startListening}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <FaMicrophone size={30} />
        </motion.button>
        <motion.button
          onClick={stopListening}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <FaPauseCircle size={30} />
        </motion.button>
      </div>

      {isProcessing && <p>Processing...</p>}

      <div style={{ marginTop: "20px" }}>
        <h2>Chat History</h2>
        <ul>
          {chatHistory.map((chat, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                textAlign: "left",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: chat.user === "User" ? "#f1f1f1" : "#d1e7fd",
              }}
            >
              <strong>{chat.user}:</strong> {chat.message}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealTimeVoiceProcessor;
