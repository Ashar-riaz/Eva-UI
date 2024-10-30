import React from 'react';
import Image from 'next/image';
import arrow from "@/assets/arrow.svg";
import "./navbar.css";
export default function LoginButton() {
    return (
        <a href="/login" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <span>Login</span>
            <Image src={arrow} alt="Arrow icon" width={10} height={10} className="ml-2" />
        </a>
    );
}
