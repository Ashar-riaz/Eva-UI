"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/component/Navbar/Nav";
import Image from "next/image";
import logo from "@/assets/logo.png.png";
import "./forgot.css";

function ForgotPasswordPage() {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const tokenFromURL = searchParams.get("token");
    if (tokenFromURL) {
      setToken(tokenFromURL);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setSuccessMessage('Password reset link sent to your email');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to send reset link');
        setSuccessMessage('');
      }
    } catch {
      setErrorMessage('An error occurred');
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar showBrand={false} showLoginButton={true} />
      <div className="bg-white mt-20">
        <div className="bg-[#F2F4FF] flex w-[553.77px] p-[66.66px_49.8px_49.8px_49.8px] flex-col justify-center items-center gap-[50px] mx-auto mt-4 rounded-lg shadow-lg">
          <div>
            <Image src={logo} alt="Logo" />
          </div>

          {!token ? (
            <>
              <span className="instruction-text">
                Lost your password? Enter your email to receive a reset link.
              </span>
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                <div className="Input mb-4">
                  <span className="Inputforgot-text">Email address</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="Input-text"
                  />
                </div>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                <button type="submit" className="Login-button" disabled={isLoading}>
                  <span className="btn-text">{isLoading ? "Sending..." : "Reset Password"}</span>
                </button>
              </form>
            </>
          ) : (
            <>
              <span className="instruction-text">
                Enter your new password to reset your account.
              </span>
              <form className="w-full flex flex-col items-center">
                <div className="Input mb-4">
                  <span className="Inputforgot-text">New Password</span>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="Input-text"
                  />
                </div>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                <button type="submit" className="Login-button" disabled={isLoading}>
                  <span className="btn-text">{isLoading ? "Resetting..." : "Change Password"}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// 🛠️ Wrap component in Suspense
export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ForgotPasswordPage />
    </Suspense>
  );
}
