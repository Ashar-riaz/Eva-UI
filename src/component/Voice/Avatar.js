import React, { useState, useRef } from "react";

const Avatar = () => {
  const [recording, setRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Maintain chat history
  const [isProcessing, setIsProcessing] = useState(false); // Loading indicator
  const [avatarResponse, setAvatarResponse] = useState(null); // To store video response
  const [videoReady, setVideoReady] = useState(false); // Video readiness state
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
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });
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

      setAvatarResponse(data.avatar_response); // Store avatar video URL
      setVideoReady(false); // Reset readiness state
      if (data.audio_file) {
        playAudio(data.audio_file);
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
    try {
      const audioBlob = new Blob(
        [Uint8Array.from(atob(audioBase64.replace(/\s/g, "")), (c) => c.charCodeAt(0))],
        {
          type: "audio/mpeg",
        }
      );

      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error("Error in playAudio:", error);
      alert("Invalid audio file received.");
    }
  };

  const handleVideoLoaded = () => {
    setVideoReady(true); // Mark video as ready to play
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#1E1E1E", // Matching darker background
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <video
            src={avatarResponse}
            autoPlay
            onLoadedData={handleVideoLoaded}
            style={{
              width: "300px",
              height: "auto",
              marginTop: "20px",
              display: videoReady ? "block" : "none",
            }}
            controls={false} // No controls
          />
      <h1 style={{ color: "#FFD700", marginTop: "50px" }}>Real-Time Voice Processor</h1>
      {!recording && (
        <button
          onClick={startRecording}
          style={{
            color: "white",
            backgroundColor: "#444",
            border: "1px solid #FFD700",
            padding: "10px 20px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          Start Recording
        </button>
      )}
      {recording && (
        <button
          onClick={stopRecording}
          style={{
            color: "white",
            backgroundColor: "#444",
            border: "1px solid #FFD700",
            padding: "10px 20px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          Stop Recording
        </button>
      )}
      {isProcessing && <p style={{ color: "#FFD700" }}>Processing...</p>}
      <div style={{ width: "100%", marginTop: "50px" }}>
        <h2 style={{ color: "#FFD700", textAlign: "center" }}>Chat History</h2>
        <ul style={{ color: "#FFF", listStyleType: "none", padding: 0 }}>
          {chatHistory.map((chat, index) => (
            <li key={index} style={{ marginBottom: "10px", textAlign: "center" }}>
              <strong style={{ color: "#FFD700" }}>{chat.user}:</strong> {chat.message}
            </li>
          ))}
        </ul>
      </div>
      {avatarResponse && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
     
          
        </div>
      )}
    </div>
  );
};

export default Avatar;
