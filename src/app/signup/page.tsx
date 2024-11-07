"use client"
import React from 'react'
import Navbar from "@/component/Navbar/Nav";
import Image from 'next/image';
import logo  from '@/assets/logo.png.png'
import Link from 'next/link';

export default function Page() {
  // Add state to manage form inputs
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
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
      } else {
        console.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <>
        <Navbar showBrand={false} showLoginButton={false}/>
      <div className="bg-white">
        <form onSubmit={handleSubmit} className="bg-[#F2F4FF] flex w-[553.77px] p-[66.66px_49.8px_49.8px_49.8px] flex-col justify-center items-center gap-[82.87px] mx-auto mt-4">
            <div className="">
            <Image src={logo} alt="Logo" />
            </div>
            <div className="Input">
                <span className="Input-text">Name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-[454.17px] h-[52.28px] flex-shrink-0 rounded border border-[#EAECEE] bg-white mt-2"  />
            </div>
            <div className="mt-[-54px]">
                <span className="Input-text">Email address</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-[454.17px] h-[52.28px] flex-shrink-0 rounded border border-[#EAECEE] bg-white mt-2"  />
            </div>
            <div className="mt-[-54px]">
                <span className="Input-text">Password *</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[454.17px] h-[52.28px] flex-shrink-0 rounded border border-[#EAECEE] bg-white mt-2"  />
            </div>
            <div className="mt-[-54px]">
                <span className="Input-text">Confirm Password *</span>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-[454.17px] h-[52.28px] flex-shrink-0 rounded border border-[#EAECEE] bg-white mt-2"  />
            </div>
            
            <div className="mt-[-50px]">
                <button type="submit" className="Login-button"><span className='btn-text'>Sign up</span></button>
            </div>
            <div className="mt-[-30px] flex flex-row">
                <span className="Input-text">Already have an account?</span>
                <div className="ml-[-35px]">
                <Link href="/login" className="signup-text">Login</Link></div>
            </div>
        </form>
      </div>
    </>
  )
}
