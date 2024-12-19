import React, { useState, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import gif from "@/assets/Dashboard/preview.gif"
const Avatar = () => {
  const [recording, setRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Maintain chat history
  const [isProcessing, setIsProcessing] = useState(false); // Loading indicator
  const [avatarResponse, setAvatarResponse] = useState(null); // To store video response
  const [showGif, setShowGif] = useState(true); // Control GIF visibility
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
      setShowGif(false); // Hide GIF and show video
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the voice.");
    } finally {
      setIsProcessing(false);
    }
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        {showGif ? (
          <Image
            src={gif}
            alt="Processing Animation"
            style={{
              width: "300px",
              height: "auto",
              marginTop: "20px",
            }}
          />
        ) : (
          avatarResponse && (
            <video
              src={avatarResponse}
              autoPlay
              onEnded={() => setShowGif(true)} // Show GIF again after video ends
              style={{
                width: "300px",
                height: "auto",
                marginTop: "20px",
              }}
            />
          )
        )}
      </div>

      {isProcessing && <p style={{ color: "#FFD700" }}>Processing...</p>}

      <div style={{ width: "100%", marginTop: "50px", textAlign: "center" }}>
        <h2 style={{ color: "#FFD700" }}>Chat History</h2>
        <div
          style={{
            width: "446px", // Set width
            maxHeight: "300px", // Fixed height for the chat history
            overflowY: "auto", // Enable vertical scrolling
            backgroundColor: "#2E2E2E", // Background for better contrast
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional styling for aesthetics
            margin: "0 auto", // Center horizontally
            minHeight: "200px",
          }}
        >
          <ul style={{ color: "#FFF", listStyleType: "none", padding: 0, margin: 0 }}>
            {chatHistory.map((chat, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <strong style={{ color: "#FFD700" }}>{chat.user}:</strong> {chat.message}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px", // Distance from the bottom
          left: "50%", // Center horizontally
          transform: "translateX(-50%)", // Adjust for center alignment
          zIndex: 1000, // Ensure it appears above other elements
        }}
      >
        {!recording && (
          <DotLottieReact
            src="https://lottie.host/2a5275e0-25e5-4c2f-bbba-13fe7b914513/j1xhpCV6T4.lottie"
            onClick={startRecording}
            style={{ width: "100px", height: "100px" }}
          />
        )}
        {recording && (
          <DotLottieReact
            src="https://lottie.host/2a5275e0-25e5-4c2f-bbba-13fe7b914513/j1xhpCV6T4.lottie"
            loop
            autoplay
            style={{ width: "100px", height: "100px" }}
            onClick={stopRecording}
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;