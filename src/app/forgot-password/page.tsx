"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/component/Navbar/Nav";
import Image from "next/image";
import logo from "@/assets/logo.png.png";
import "./forgot.css";

export default function Page() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Extract token from URL on component mount
  useEffect(() => {
    const tokenFromURL = searchParams.get("token");
    if (tokenFromURL) {
      setToken(tokenFromURL);
    }
  }, [searchParams]);

  // Function to request password reset link
  const handleRequestResetLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/request-password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message); // "Password reset link sent to your email"
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to reset password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, new_password: newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login"; // Redirect after success
        }, 2000);
      } else {
        setErrorMessage(data.error || "Password reset failed. Try again.");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar showBrand={false} showLoginButton={true} />
      <div className="bg-white mt-20">
        <div className="bg-[#F2F4FF] flex w-[553.77px] p-[66.66px_49.8px_49.8px_49.8px] flex-col justify-center items-center gap-[50px] mx-auto mt-4">
          <div>
            <Image src={logo} alt="Logo" />
          </div>

          {/* If token is present, show Reset Password form, otherwise show Request Reset Link form */}
          {!token ? (
            <>
              <span className="instruction-text">
                Lost your password? Enter your email to receive a reset link.
              </span>
              <form onSubmit={handleRequestResetLink} className="w-full flex flex-col items-center">
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
              <form onSubmit={handleResetPassword} className="w-full flex flex-col items-center">
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
