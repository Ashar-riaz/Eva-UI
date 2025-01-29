"use client"; 
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/component/Navbar/Nav";
import Image from "next/image";
import logo from "@/assets/logo.png.png";
import "./login.css";
import Link from "next/link";

export default function Page() {
  // State for managing email, password, and API response
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // Hook for navigation

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();

      // Save token or user data if required
      localStorage.setItem("token", data.token); // Example: saving token in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      // Redirect to the dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar showBrand={false} showLoginButton={false} />
      <div className="bg-white">
        <form
          onSubmit={handleLogin}
          className="bg-[#F2F4FF] flex w-[553.77px] p-[66.66px_49.8px_49.8px_49.8px] flex-col justify-center items-center gap-[82.87px] mx-auto mt-4"
        >
          {/* Logo Section */}
          <div>
            <Image src={logo} alt="Logo" />
          </div>

          {/* Email Field */}
          <div className="Input">
            <span className="Input-text">Email address</span>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mt-[-54px]">
            <span className="Input-text">Password *</span>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right ml-[320px] mt-[-54px]">
            <Link href="/forgot-password" className="Forgot">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="mt-[-20px]">
            <button
              type="submit"
              className="Login-button"
              disabled={loading}
            >
              <span className="btn-text">{loading ? "Logging in..." : "Login"}</span>
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          {/* Signup Section */}
          <div className="mt-[-30px] flex flex-row">
            <span className="Input-text">Don&apos;t have an account yet?</span>
            <div className="ml-[-35px]">
              <Link href="/signup" className="signup-text">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
