// src/app/page.tsx
import React from "react";
import Navbar from "../component/Navbar/Nav";
import "./landing.css";
import Image from "next/image";
import arrow from "../assets/arrow.svg";
import chatting from "../assets/chatting-2.gif";
import image from "../assets/image.png";
import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";
import company1 from "../assets/company/cdnlogo.com_airbnb-1.png.png";
import company2 from "../assets/company/cdnlogo.com_black-crows-1.png.png";
import company3 from "../assets/company/cdnlogo.com_blumhouse-productions-1.png.png";
import company4 from "../assets/company/cdnlogo.com_dribbble-1.png.png";
import company5 from "../assets/company/cdnlogo.com_greastudio-1.png.png";
import company6 from "../assets/company/cdnlogo.com_red-hat-1-1.png.png";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Include Navbar */}
      <Navbar />
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row">
          <div className="hero-text md:w-1/2">
            <div className="second-brain-container">
              <span className="second-brain-title">Your Second</span>
              <span className="second-brain-title">Brain</span>
            </div>
            <p className="hero-description">
              Unlock the power of your mind with a digital repository for your
              <br />
              knowledge, experiences, and insights. Effortlessly store,
              organize,
              <br />
              and access information that matters, enhancing both your personal
              <br />
              and professional life.
            </p>
            <button className="btn custom-btn d-flex align-items-center mt-4">
              <span>GET STARTED</span>
              <Image
                src={arrow}
                alt="Arrow icon"
                width={16}
                height={16}
                className="ms-2"
              />
            </button>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 image">
            <Image
              src={chatting}
              alt="Chatting GIF"
              width={577}
              height={588}
              // className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <Image
          src={image}
          alt="image"
          style={{ width: "100% !important" }}
        ></Image>
      </div>
      <div className="flex flex-col items-center mt-[2%] box">
        <span className="hero-text2">Empowering Product Teams to Excel</span>
        <div className="flex flex-wrap justify-center gap-[120px] mt-1 mb-5">
          <Image src={company1} alt="image" />
          <Image src={company2} alt="image" />
          <Image src={company3} alt="image" />
          <Image src={company4} alt="image" />
          <Image src={company5} alt="image" />
          <Image src={company6} alt="image" />
        </div>
      </div>
      <div className="mt-[5%] mb-[5%]">
        <div className="process-divider">
          <div className="process-divider__line"></div>
          <span className="process-divider__text">Process</span>
          <div className="process-divider__line"></div>
        </div>
        <span className="engage-title">Engage in Conversations</span>
        <span className="engage-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered
          <br />
          alteration in some form.
        </span>
        <div className="flex flex-col md:flex-row relative mt-[4%] justify-center gap-10">
          <div className="step1 mb-8 md:mb-0 md:mr-4 md:mt-[-30px]">
            <div className="step-image-container">
              <div className="step-image-circle">
                <div className="step-image">
                  <Image src={step1} alt="Step 1" className="img" />
                </div>
                <div className="step-number">01</div>
              </div>
            </div>
            <p className="step-description">Input Processing</p>
            <p className="step-subdescription">
              The chatbot receives user&apos;s message
              <br />
              or query and uses NLP.
            </p>
          </div>
          <div className="step2 mb-8 md:mb-0 md:mr-4 md:mt-[30px]">
            <div className="step-image-container">
              <div className="step-image-circle">
                <div className="step-image">
                  <Image src={step2} alt="Step 2" className="img" />
                </div>
                <div className="step-number">02</div>
              </div>
            </div>
            <p className="step-description">Holistic perception</p>
            <p className="step-subdescription">
              The chatbot receives user&apos;s message
              <br />
              or query and uses NLP.
            </p>
          </div>
          <div className="step3 mb-8 md:mb-0 md:mr-4 md:mt-[-30px]">
            <div className="step-image-container">
              <div className="step-image-circle">
                <div className="step-image">
                  <Image src={step3} alt="Step 3" className="img" />
                </div>
                <div className="step-number">03</div>
              </div>
            </div>
            <p className="step-description">Generate Response</p>
            <p className="step-subdescription">
              The chatbot receives user&apos;s message
              <br />
              or query and uses NLP.
            </p>
          </div>
          <div className="step4 mb-8 md:mb-0 md:mr-4 md:mt-[30px]">
            <div className="step-image-container">
              <div className="step-image-circle">
                <div className="step-image">
                  <Image src={step2} alt="Step 4" className="img" />
                </div>
                <div className="step-number">04</div>
              </div>
            </div>
            <p className="step-description">Output Delivery</p>
            <p className="step-subdescription">
              The chatbot receives user&apos;s message
              <br />
              or query and uses NLP.
            </p>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="process-divider">
          <div className="process-divider__line"></div>
          <span className="process-divider__text">About us</span>
          <div className="process-divider__line"></div>
        </div>
        <span className="engage-title">
          Get to Know Our Chatbot <br /> Assistant - talkie
        </span>
        <span className="engage-description">
          There are many variations of passages of Lorem Ipsum available, but
          the <br />
          majority have suffered alteration in some form humor.
        </span>
      </div>
    </>
  );
};

export default HomePage;
