import Nav from "@/component/Navbar/Nav";
import React from "react";
import Image from "next/image";
import contact1 from "@/assets/contact/contact1.png";
import "./contact.css";
import mobile from "@/assets/contact/number1.svg";
import mail from "@/assets/contact/mail1.svg";
import address from "@/assets/contact/add1.svg";
import ques from "@/assets/contact/question.svg";
import message from "@/assets/contact/message.svg";
import sale from "@/assets/contact/sale.svg";
import Footer from "@/component/footer/Footer";
import ContactInput from "@/component/Contact_Input/ContactInput";
export default function page() {
  return (
    <>
      <Nav showBrand={true} showLoginButton={true} />
      <div className="flex flex-row justify-center items-center mb-12">
        <div className="flex flex-row items-center">
          <Image
            src={contact1}
            alt="Contact Image"
            style={{ margin: "75px " }}
          />
        </div>
        <div className="flex flex-col" style={{ margin: "117px" }}>
          <div className="contact-divider">
            <div className="contact-divider__line"></div>
            <span className="contact-divider__text">Contact Us</span>
            <div className="contact-divider__line"></div>
          </div>
          <span className="contact-title">
            we are always ready to
            <br />
            help you
          </span>
          <span className="contact-description">
            We Love Creating Amazing Things! Contact Us via Email for Text-
            <br />
            Related Inquiries.
          </span>
          <div className="flex" style={{ marginTop: "30px" }}>
            <Image src={mobile} alt="Mobile Icon" />
            <span className="contact_text">Call Us: +123 456 2356</span>
          </div>
          <div className="flex" style={{ marginTop: "10px" }}>
            <Image src={mail} alt="mail" />
            <span className="contact_text">talkiehelp@gmail.com</span>
          </div>
          <div className="flex" style={{ marginTop: "10px" }}>
            <Image src={address} alt="address" />
            <span className="contact_text">
              1234 North Avenue Luke Lane, South Bend, IN 360001
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[1903px] p-[130px_251.5px] flex-col justify-center items-start gap-[-0.01px] bg-[#F2F4FF]">
        <div className="flex flex-col" style={{ margin: "117px" }}>
          <div className="talk-divider">
            <div className="contact-divider__line"></div>
            <span className="contact-divider__text">Talk Us Direct</span>
            <div className="contact-divider__line"></div>
          </div>
          <span className="contact-title" style={{ textAlign: "center" }}>
            Let Talkie Take on the Challenge! Contact
            <br />
            Us and We Help You.
          </span>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Image src={ques} alt="src" />
              <span className="text">For general Enquiries:</span>
              <div className="flex">
                <span className="details flex flex-row">Email us at</span>
                <span className="mail flex flex-row">
                  inqurywork@talkie.com
                </span>
              </div>
              <span> & we will get back to you ASAP</span>
            </div>
          </div>
          <div className="flex flex-row " style={{marginLeft:"210px"}}>
            <div className="flex flex-col" >
              <Image src={message} alt="message" />
              <span className="text">For general Enquiries:</span>
              <div className="flex">
                <span className="details flex flex-row">Email us at</span>
                <span className="mail flex flex-row">
                  inqurywork@talkie.com
                </span>
              </div>
              <span> & we will get back to you ASAP</span>
            </div>
          </div>
          <div className="flex flex-row " style={{marginLeft:"210px"}}>
            <div className="flex flex-col">
              <Image src={sale} alt="sale" />
              <span className="text">For general Enquiries:</span>
              <div className="flex">
                <span className="details flex flex-row">Email us at</span>
                <span className="mail flex flex-row">
                  inqurywork@talkie.com
                </span>
              </div>
              <span> & we will get back to you ASAP</span>
            </div>
          </div>
        </div>
      </div>
      
      <ContactInput/>
      <Footer />
    </>
  );
}
