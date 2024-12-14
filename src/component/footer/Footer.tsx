import React from "react";
import logo from "@/assets/logo.png.png";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";
import mobile from "@/assets/number.svg";
import mail from "@/assets/mail.svg";
import address from "@/assets/address.svg";
export default function Footer() {
  return (
    <div className="main-footer flex flex-row">
      <div
        className="flex flex-col items-center justify-center ml-50"
        style={{ marginTop: "150px", marginLeft: "90px" }}
      >
        <Image src={logo} alt="Logo" style={{ marginRight: " 228px" }} />
        <span className="text-white font-Poppins text-base font-light leading-10 capitalize mt-4">
          Talkie programmed to generate human-like <br />
          responses and provide information on a wide <br />
          range of topics.
        </span>
      </div>
      <div
        className="flex flex-col"
        style={{ marginLeft: "140px", marginTop: "80px" }}
      >
        <span
          className="text-white font-Poppins font-normal font-300 leading-27_3 capitalize"
          style={{ fontSize: "21px" }}
        >
          Quick Link
        </span>
        <div className="" style={{ marginTop: "30px" }}>
          <span className="footer-arrow">{"> "}</span>
          <Link href="/" className="footer-text" style={{ marginLeft: "15px" }}>
            Home
          </Link>
        </div>
        <div className="" style={{ marginTop: "10px" }}>
          <span className="footer-arrow">{"> "}</span>
          <Link href="/" className="footer-text" style={{ marginLeft: "15px" }}>
            About us
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col"
        style={{ marginLeft: "140px", marginTop: "80px" }}
      >
        <span
          className="text-white font-Poppins font-normal font-300 leading-27_3 capitalize"
          style={{ fontSize: "21px" }}
        >
          Integration
        </span>
        <div className="" style={{ marginTop: "30px" }}>
          <span className="footer-arrow">{"> "}</span>
          <Link href="/" className="footer-text" style={{ marginLeft: "15px" }}>
            Contact us
          </Link>
        </div>
        <div className="" style={{ marginTop: "10px" }}>
          <span className="footer-arrow">{"> "}</span>
          <Link href="/" className="footer-text" style={{ marginLeft: "15px" }}>
            Pricing Plan
          </Link>
        </div>
      </div>

      <div
        className="flex flex-col"
        style={{ marginLeft: "140px", marginTop: "80px" }}
      >
        <span
          className="text-white font-Poppins font-normal font-300 leading-27_3 capitalize"
          style={{ fontSize: "21px" }}
        >
          Contact Us
        </span>
        <div className="flex" style={{ marginTop: "30px" }}>
          <Image src={mobile} alt="Mobile Icon" /> 
          <span className="contact-text">Call Us: +123 456 2356</span>
        </div>
        <div className="flex" style={{ marginTop: "10px" }}>
        <Image src={mail} alt="mail"/>
          <span className="contact-text">talkiehelp@gmail.com</span>
        </div>
        <div className="flex" style={{ marginTop: "10px" }}>
        <Image src={address} alt="address"/>
          <span className="contact-text">1234 North Avenue Luke Lane, South Bend, IN 360001</span>
        </div>
      </div>
    </div>
  );
}
