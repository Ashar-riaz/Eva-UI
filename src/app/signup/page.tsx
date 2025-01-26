"use client";
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Navbar from "@/component/Navbar/Nav";
import Image from 'next/image';
import logo from '@/assets/logo.png.png';
import Link from 'next/link';
import "@/app/login/login.css"

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleFocus = (field: string) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, confirm_password: confirmPassword }),
      });
      if (response.ok) {
        console.log("Signup successful!");
        window.location.href = "/login";
      } else {
        console.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <>
      <Navbar showBrand={false} showLoginButton={false} />
      <div className="bg-white">
        <form onSubmit={handleSubmit} className="bg-[#F2F4FF] flex w-[553.77px] p-[66.66px_49.8px_49.8px_49.8px] flex-col justify-center items-center gap-[82.87px] mx-auto mt-4">
          <div className="">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="Input">
            <span className="Input-text">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className={`input-field ${isFocused.name ? 'border-red-500' : ''}`}
            />
          </div>
          <div className="mt-[-54px]">
            <span className="Input-text">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className={`input-field ${isFocused.name ? 'border-red-500' : ''}`}
            />
          </div>
          <div className="mt-[-54px] relative">
            <span className="Input-text">Password *</span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              className={`input-field ${isFocused.name ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[40px] text-gray-500"
            >
              {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
          <div className="mt-[-54px] relative">
            <span className="Input-text">Confirm Password *</span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={() => handleBlur('confirmPassword')}
              className={`input-field ${isFocused.name ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[40px] text-gray-500"
            >
              {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
          <div className="mt-[-50px]">
            <button type="submit" className="Login-button"><span className='btn-text'>Sign up</span></button>
          </div>
          <div className="mt-[-30px] flex flex-row">
            <span className="Input-text">Already have an account?</span>
            <div className="ml-[-35px]">
              <Link href="/login" className="signup-text">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
