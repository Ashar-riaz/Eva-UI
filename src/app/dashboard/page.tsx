"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/component/Navbar/Nav";

export default function Dashboard() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [responseText, setResponseText] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError("Your browser does not support audio recording.");
    }
  }, []);

  const startRecording = async () => {
    setError(null);
    setResponseText(null);
    setAudioUrl(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        setAudioChunks((prev) => [...prev, e.data]);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
      };

      setMediaRecorder(recorder);
      setAudioChunks([]); // Clear previous recordings
      recorder.start();
      setIsRecording(true);
    } catch (err) {
      setError("Failed to access your microphone.");
      console.error(err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (audioChunks.length === 0) {
      setError("No audio recorded.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
      const formData = new FormData();
      formData.append("audio_file", audioBlob);

      const response = await fetch("http://0.0.0.0:8000/process_voice", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process the audio.");
      }

      const data = await response.json();

      // Display responses
      setResponseText(data.text);

      const base64Audio = data.base64_audio;
      const decodedAudio = `data:audio/wav;base64,${base64Audio}`;
      setAudioUrl(decodedAudio);
    } catch (err) {
      setError("An error occurred while processing the audio.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar showBrand={true} showLoginButton={false} />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Record Controls */}
        <div className="mb-4">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-6 py-2 text-white rounded ${
              isRecording ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmit}
            disabled={loading || audioChunks.length === 0}
            className={`px-6 py-2 text-white rounded ${
              loading || audioChunks.length === 0
                ? "bg-gray-400"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </div>

        {/* Display Error */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Display Text Response */}
        {responseText && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Text Response:</h2>
            <p className="text-gray-700">{responseText}</p>
          </div>
        )}

        {/* Display Audio Response */}
        {audioUrl && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Audio Response:</h2>
            <audio controls src={audioUrl} className="mt-2"></audio>
          </div>
        )}
      </div>
    </>
  );
}
