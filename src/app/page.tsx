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
import about from "../assets/about.png";
import check from "../assets/check.svg";
import mobile from "../assets/mobile.svg";
import google from "../assets/google.svg";
import chat from "../assets/chatbot.svg";
import success from "../assets/success.png";
import machine from "../assets/machine.svg";
import company1 from "../assets/company/cdnlogo.com_airbnb-1.png.png";
import company2 from "../assets/company/cdnlogo.com_black-crows-1.png.png";
import company3 from "../assets/company/cdnlogo.com_blumhouse-productions-1.png.png";
import company4 from "../assets/company/cdnlogo.com_dribbble-1.png.png";
import company5 from "../assets/company/cdnlogo.com_greastudio-1.png.png";
import company6 from "../assets/company/cdnlogo.com_red-hat-1-1.png.png";
import Service from "@/component/service/Service";

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
        <div className="flex flex-col md:flex-row">
          <div
            className="flex-1 min-h-[273px] p-[30px] items-start self-stretch bg-white shadow-[0px_12px_32px_0px_rgba(25,41,66,0.07)]"
            style={{ minHeight: "273px" }}
          >
            <div className="flex h-full">
              <div className="flex flex-col mr-4">
                <span className="mb-2 px-4 py-2 cursor-pointer text-blue-500 font-bold">
                  Our Values
                </span>
                <span className="mb-2 px-4 py-2 cursor-pointer text-gray-700">
                  Our Vision
                </span>
                <span className="px-4 py-2 cursor-pointer text-gray-700">
                  Our Mission
                </span>
              </div>
              <div className="flex-grow">
                <div id="content-a" className="h-full">
                  <p>
                    This is the default content for A. It shows when the page
                    loads or when A is clicked.
                  </p>
                </div>
                <div id="content-b" className="h-full hidden">
                  <p>This is the content for B. It shows when B is clicked.</p>
                </div>
                <div id="content-c" className="h-full hidden">
                  <p>This is the content for C. It shows when C is clicked.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image-container mt-4 md:mt-0 md:ml-4">
            <Image src={about} alt="About Us" className="about-image" />
          </div>
        </div>
      </div>
      <div className="service mt-[80px]">
        <div className="process-divider">
          <div className="process-divider__line"></div>
          <span className="process-divider__text">
            Why Choose Distill Audio
          </span>
          <div className="process-divider__line"></div>
        </div>
        <span className="engage-title">Services We Provide</span>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-center mt-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Service
              title="Mobile Marketing"
              description="Convert your audio files into accurate, editable text with our advanced transcription service."
              imageUrl={mobile}
              topFeatureImage={check}
              topFeatureText="Seamless mobile integration for on-the-go marketing"
              middleFeatureImage={check}
              middleFeatureText="Seamless mobile integration for on-the-go marketing"
              bottomFeatureImage={check}
              bottomFeatureText="Seamless mobile integration for on-the-go marketing"
              buttonText="Read More"
            />
            <Service
              title="Chatbot Integration"
              description="Get concise summaries of your audio content, highlighting key points and main ideas."
              imageUrl={chat}
              topFeatureImage={check}
              topFeatureText="Seamless mobile integration for on-the-go marketing"
              middleFeatureImage={check}
              middleFeatureText="Voice-enabled chat-bots"
              bottomFeatureImage={check}
              bottomFeatureText="Seamless mobile integration for on-the-go marketing"
              buttonText="Read More"
            />
            <Service
              title="Machine Learning"
              description="Automatically identify and extract important keywords and phrases from your audio content."
              imageUrl={machine}
              topFeatureImage={check}
              topFeatureText="Seamless mobile integration for on-the-go marketing"
              middleFeatureImage={check}
              middleFeatureText="Seamless mobile integration for on-the-go marketing"
              bottomFeatureImage={check}
              bottomFeatureText="Seamless mobile integration for on-the-go marketing"
              buttonText="Read More"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-1/2 mb-8 md:mb-0" style={{ marginLeft: "10%" }}>
            <Image src={success} alt="Success" />
          </div>
          <div className="md:w-1/2" style={{    marginTop: "-316px", marginRight:" 300px"}}>
            <div className="process-divider mb-4 ">
              <div className="process-divider__line"></div>
              <span className="process-divider__text">Our Success</span>
              <div className="process-divider__line"></div>
            </div>
            <span className="engage-title" style={{ textAlign: "left" }}>
              Unleashing Potential Keys to <br /> Success
            </span>
            <span className="engage-description" style={{ textAlign: "left" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form humor.
            </span>
            <div className="w-[85%] h-px bg-gray-200 my-6"></div>
            <div className="flex items-center gap-4">
              <Image src={google} alt="Google" width={80} height={80} />
              <span className="google-text">Get Insights Only In Google</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
