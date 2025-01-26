"use client";
import React, { useState } from "react";
import Navbar from "@/component/Navbar/Nav";
import Image from "next/image";
import logo from "@/assets/logo.png.png";
import "./admin_login.css";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar showBrand={false} showLoginButton={false} />
      <div className="bg-white">
        <div className="bg-[#F2F4FF] flex w-[553.77px] p-[66.66px_49.8px_49.8px_49.8px] flex-col justify-center items-center gap-[82.87px] mx-auto mt-4">
          {/* Logo Section */}
          <div>
            <Image src={logo} alt="Logo" />
          </div>

          {/* Email Field */}
          <div className="Input">
            <span className="Input-text">Email address</span>
            <input
              type="email"
              className="input-field" /* Applied updated styles */
            />
          </div>

          {/* Password Field with Show Password */}
          <div className="mt-[-54px] relative">
            <span className="Input-text">Password *</span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[40px] text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right ml-[320px] mt-[-54px]">
            <Link href="/forgot-password" className="Forgot">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="mt-[-20px]">
            <button className="Login-button">
              <span className="btn-text">Login</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
