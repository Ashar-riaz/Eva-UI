import React from "react";
import Navbar from "@/component/Navbar/Nav";
import Image from "next/image";
import logo from "@/assets/logo.png.png";
import "./forgot.css";
export default function page() {
  return (
    <>
      <Navbar showBrand={false} showLoginButton={true} />
      <div className="bg-white" style={{ marginTop: "200px" }}>
        <div className="bg-[#F2F4FF] flex w-[553.77px] p-[66.66px_49.8px_49.8px_49.8px] flex-col justify-center items-center gap-[82.87px] mx-auto mt-4">
          <div className="">
            <Image src={logo} alt="Logo" />
          </div>
          <span className="instruction-text">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </span>
          <div className="Input" style={{ marginTop: "-60px" }}>
            <span className="Inputforgot-text">Email address</span>
            <input
              type="email"
              className="Input-text" /* Applied the CSS class */
            />
          </div>

          <div className="mt-[-20px]">
            <button className="Login-button">
              <span className="btn-text">Reset Password</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
