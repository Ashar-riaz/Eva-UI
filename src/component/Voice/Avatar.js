import React, { useState, useRef, useCallback } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import gif from "@/assets/Dashboard/preview.gif";

const Avatar = () => {
  const [recording, setRecording] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [avatarResponse, setAvatarResponse] = useState(null);
  const [showGif, setShowGif] = useState(true);
  const [userMessage, setUserMessage] = useState("");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const controllerRef = useRef(null);

  const startRecording = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      alert("Your browser does not support audio recording.");
      return;
    }

    try {
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
        await processVoice(audioBlob, "");
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  }, []);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  }, []);

  const processVoice = useCallback(async (audioBlob = null, textInput = "") => {
    setIsProcessing(true);

    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    const formData = new FormData();
    if (audioBlob) {
      formData.append("audio_file", audioBlob);
    }
    if (textInput) {
      formData.append("text", textInput);
    }

    try {
      const response = await fetch("http://localhost:8080/process_voice/", {
        method: "POST",
        body: formData,
        signal: controllerRef.current.signal,
      });

      if (!response.ok) throw new Error("Failed to process request");

      const data = await response.json();

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { user: "User", message: textInput || data.User },
        { user: "AI", message: data.llm_response },
      ]);

      setAvatarResponse(data.avatar_response);
      setShowGif(false);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error:", error);
        alert("An error occurred while processing the request.");
      }
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      processVoice(null, userMessage);
      setUserMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div>
        {isProcessing && <p className="text-color bg-black text-center">Processing...</p>}
      </div>
      <div className="min-h-screen flex items-center justify-center p-5 bg-black">
        <div className="flex flex-row space-x-5 w-full max-w-6xl">
          {/* Avatar Display Section */}
          <div
            className="flex-1 flex-col items-center justify-center"
            style={{ border: "0.1px solid gray", height: "700px", marginLeft: "40px", width: "500px" }}
          >
            <h2 className="text-white text-xl mb-3 text-center" style={{ borderBottom: "0.1px solid gray" }}>
              Avatar
            </h2>
            {showGif ? (
              <Image
                src={gif}
                alt="Processing Animation"
                className="w-72 h-auto"
                style={{ marginLeft: "36px", marginTop: "55px" }}
              />
            ) : (
              avatarResponse && (
                <video
                  src={avatarResponse}
                  autoPlay
                  onEnded={() => setShowGif(true)}
                  className="w-72 h-auto"
                  style={{ marginLeft: "36px", marginTop: "55px" }}
                />
              )
            )}
          </div>

          {/* Chat History Section */}
          <div
            className="flex-1 flex flex-col ml-[40px]"
            style={{ border: "0.1px solid gray", height: "700px", marginLeft: "20px" }}
          >
            <h2 className="text-white text-xl mb-3 text-center" style={{ borderBottom: "0.1px solid gray" }}>
              Chat History
            </h2>
            <div className="flex-1 overflow-y-auto bg-gray-800 p-3 rounded-lg shadow-md" style={{ marginLeft: "20px" }}>
              <ul className="text-white list-none p-0 m-0">
                {chatHistory.map((chat, index) => (
                  <li key={index} className={`mb-2 ${chat.user === "AI" ? "text-color" : "text-white"}`}>
                    {chat.user}: <strong>{chat.message}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-row items-center space-x-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full p-2 bg-black text-white placeholder-white border-10 border-pink-500"
                style={{ borderTop: "0.1px solid gray", margin: "20px" }}
              />
              <button onClick={handleSendMessage} className="text-white p-2 rounded-lg">
                Send
              </button>
            </div>
          </div>

          {/* Voice Recorder Section */}
          <div className="flex-1 rounded-lg flex flex-col items-center justify-center">
            <div className="bg-gray-800 p-3 rounded-lg">
              {!recording ? (
                <DotLottieReact
                  src="https://lottie.host/a4560677-40a5-4916-bef8-3ca5b9e9baf3/J3JfF9VqWI.lottie"
                  onClick={startRecording}
                 
                  style={{ width: "300px", height: "300px" }}
                />
              ) : (
                <DotLottieReact
                  src="https://lottie.host/a4560677-40a5-4916-bef8-3ca5b9e9baf3/J3JfF9VqWI.lottie"
                  playMode="bounce"
                  loop
                  autoplay
                  style={{ width: "300px", height: "300px" }}
                  onClick={stopRecording}
                  
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
