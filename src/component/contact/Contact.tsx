import React from "react";
import "./contact.css";
import Image from "next/image";
import Snake from "@/assets/Snake.png";
import chat from "@/assets/chat.png";
import click from "@/assets/click.svg";
export default function footer() {
  return (
    <div className="Footer flex flex-row md:w-[135%] justify-between">
      <div style={{ margin: "35px" }}>
        <span className="footer-text">
          Always available to assist you
          <br />
          with <span className="footer-text2"> any issue</span>
        </span>
        <Image src={chat} alt="chat" style={{ marginTop: "15px" }} />
      </div>
      <div className="">
        <Image
          src={Snake}
          alt="Decorative snake image"
          style={{ marginRight: "133px", marginTop: "17%" }}
        />
      </div>
      <div className="m-auto">
        <div className="email-text">
          <span>Newsletter Signup</span>
        </div>
        <div className="flex flex-row">
          <input
            type="email"
            className="Input-text"
            placeholder="Enter your email"
          />
          <button className="">
            <Image src={click} alt="Subscribe" className="Login-button" />
          </button>
        </div>
        <div className="heading">
          <span>For Any Question/Query Email: talkiehelp@gmail.com</span>
        </div>
      </div>
      
    </div>
  );
}
