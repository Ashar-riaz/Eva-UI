import React, { useState, useRef } from "react";

const RealTimeVoiceProcessor = () => {
  const [recording, setRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Maintain chat history
  const [isProcessing, setIsProcessing] = useState(false); // Loading indicator
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
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
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      await processVoice(audioBlob);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
  };

  const processVoice = async (audioBlob) => {
    setIsProcessing(true);
  
    const formData = new FormData();
    formData.append("audio_file", audioBlob);
  
    const start = performance.now(); // Log start time
  
    try {
      const response = await fetch("http://localhost:8000/process_voice", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to process voice");
      }
  
      const data = await response.json();
  
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { user: "User", message: data.User },
        { user: "AI", message: data.llm_response },
      ]);
  
      playAudio(data.audio_file);
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
    const audioBlob = new Blob([Uint8Array.from(atob(audioBase64), (c) => c.charCodeAt(0))], {
      type: "audio/mpeg",
    });

    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Real-Time Voice Processor</h1>
      {!recording && <button onClick={startRecording}>Start Recording</button>}
      {recording && <button onClick={stopRecording}>Stop Recording</button>}
      {isProcessing && <p>Processing...</p>}
      <div>
        <h2>Chat History</h2>
        <ul>
          {chatHistory.map((chat, index) => (
            <li key={index}>
              <strong>{chat.user}:</strong> {chat.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealTimeVoiceProcessor;
