import React from "react";
import Navbar from "@/component/Navbar/Nav";
import Image from "next/image";
import logo from "@/assets/logo.png.png";
import "./login.css";
import Link from "next/link";

export default function page() {
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

          {/* Password Field */}
          <div className="mt-[-54px]">
            <span className="Input-text">Password *</span>
            <input
              type="password" /* Changed to password type */
              className="input-field" /* Applied updated styles */
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
            <button className="Login-button">
              <span className="btn-text">Login</span>
            </button>
          </div>

          {/* Signup Section */}
          <div className="mt-[-30px] flex flex-row">
            <span className="Input-text">Don&apos;t have an account yet?</span>
            <div className="ml-[-35px]">
              <Link href="/signup" className="signup-text">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
