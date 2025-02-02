// src/app/page.tsx
import React from "react";

import Navbar from "../component/Navbar/Nav";
import About from "@/component/Value/Value";
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
import google from "../assets/google.svg";
import google1 from "../assets/google1.svg";
import google2 from "../assets/google2.svg";
import cross from "../assets/cross.svg";
import tick from "../assets/tick.svg";
import drive from "../assets/drive.svg";
import drive1 from "../assets/drive1.svg";
import drive2 from "../assets/drive2.svg";
import chat from "../assets/chatbot.svg";
import success from "../assets/success.png";
import Service from "@/component/service/Service";
import Price from "@/component/price/Price";
import Price1 from "@/component/price/Price1";
import Contact from "@/component/contact-section/ContactHome";
import Footer from "@/component/footer/Footer";

const HomePage: React.FC = () => {
  
  return (
    <>
      {/* Include Navbar */}
      <Navbar showBrand={true} showLoginButton={true} />
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row">
          <div className="hero-text md:w-1/2">
            <div className="second-brain-container">
              <span className="second-brain-title">Digital</span>
              <span className="second-brain-title">Human</span>
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
            <button className="btn custom-btn d-flex align-items-center mt-4" >
              
              GET STARTED
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
        <div className="flex flex-col md:flex-row relative mt-[4%] justify-center gap-10" style={{marginLeft:"253px"}}>
          <div className="step1 mb-8 md:mb-0 md:mr-4 md:mt-[-30px]">
            <div className="step-image-container">
              <div className="step-image-circle">
                <div className="step-image">
                  <Image src={step1} alt="Step 1" className="img" />
                </div>
                <div className="step-number step1">01</div>
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
                <div className="step-number step2">02</div>
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
                <div className="step-number step3">03</div>
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
                <div className="step-number step4">04</div>
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
            style={{     height: "307px",
              width: "570px",
              marginTop: "90px" }}
          >
            <div className="flex h-full">
              
              <About/>
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
          <div className="grid-cols-1 md:grid-cols-3 gap-12 flex">
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
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-1/2 mb-8 md:mb-0" style={{ marginLeft: "10%" }}>
            <Image src={success} alt="Success" />
          </div>
          <div
            className="md:w-1/2"
            style={{ marginTop: "-150px", marginRight: " 300px" }}
          >
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
            <div className="flex flex-row">
              <div className="flex items-center gap-4 mb-4">
                <Image src={google} alt="Google" width={80} height={80} />
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="google-text ml-8">
                  Get Insights Only In Google
                </span>
                <div className="flex flex-row items-center ml-8">
                  <Image src={google1} alt="Google 1" width={20} height={16} />
                  <span
                    className=" ml-4"
                    style={{
                      color: "var(--color-grey-39, #5F6168)",
                      fontFamily: "var(--font-family-Font-3, Poppins)",
                      fontSize: "var(--font-size-16, 16px)",
                      fontStyle: "normal",
                      fontWeight: "var(--font-weight-300, 300)",
                      lineHeight: "var(--line-height-28, 28px)",
                    }}
                  >
                    Personalized interactions
                  </span>
                </div>
              </div>
              <div
                className="flex flex-row items-center "
                style={{ marginBottom: "-35px" }}
              >
                <Image src={google2} alt="Google 1" width={20} height={16} />
                <span
                  className=" ml-4"
                  style={{
                    color: "var(--color-grey-39, #5F6168)",
                    fontFamily: "var(--font-family-Font-3, Poppins)",
                    fontSize: "var(--font-size-16, 16px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-300, 300)",
                    lineHeight: "var(--line-height-28, 28px)",
                  }}
                >
                  Scalable support
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <div className="flex items-center gap-4 mb-4">
                <Image src={drive} alt="Google" width={80} height={80} />
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="google-text ml-8">
                  Get Insights Only In Google
                </span>
                <div className="flex flex-row items-center ml-8">
                  <Image src={drive1} alt="Google 1" width={20} height={16} />
                  <span
                    className=" ml-4"
                    style={{
                      color: "var(--color-grey-39, #5F6168)",
                      fontFamily: "var(--font-family-Font-3, Poppins)",
                      fontSize: "var(--font-size-16, 16px)",
                      fontStyle: "normal",
                      fontWeight: "var(--font-weight-300, 300)",
                      lineHeight: "var(--line-height-28, 28px)",
                    }}
                  >
                    Automated service
                  </span>
                </div>
              </div>
              <div
                className="flex flex-row items-center "
                style={{ marginBottom: "-35px" }}
              >
                <Image src={drive2} alt="Google 1" width={20} height={16} />
                <span
                  className=" ml-4"
                  style={{
                    color: "var(--color-grey-39, #5F6168)",
                    fontFamily: "var(--font-family-Font-3, Poppins)",
                    fontSize: "var(--font-size-16, 16px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-300, 300)",
                    lineHeight: "var(--line-height-28, 28px)",
                  }}
                >
                  Instant responses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#F7F7F7] mt-11"
        style={{
          width: "100%",
          height: "796.58px",
          position: "absolute",
        }}
      >
        <div className="process-divider" style={{ marginTop: "5%" }}>
          <div className="process-divider__line"></div>
          <span className="process-divider__text">Pricing</span>
          <div className="process-divider__line"></div>
        </div>
        <span className="engage-title">Choose Pricing Plan</span>
        <div className="flex flex-col md:flex-row gap-6 mt-11 items-center justify-center">
          <Price
            title="Free Trial"
            heading="Free"
            imageSrc={tick}
            text="30 minutes of usage."
            imageSrc1={tick}
            text1="limited features."
            imageSrc2={cross}
            text2="API access."
          />

          <Price
            title="Basic Plan"
            heading="$5/month"
            imageSrc={tick}
            text="120 minutes/month."
            imageSrc1={tick}
            text1="Essential features."
            imageSrc2={cross}
            text2="API access."
            
          />
          <Price1
            title="Prenium Plan"
            heading="$15/month"
            imageSrc={tick}
            text="500 minutes/month, priority access."
            imageSrc1={tick}
            text1="Priority access."
            imageSrc2={cross}
            text2="API access."
            
          />
          <Price
            title="Business Plan"
            heading="$50/month"
            imageSrc={tick}
            text="2,000+ minutes"
            imageSrc1={tick}
            text1="API access."
            imageSrc2={tick}
            text2="Support."
            
          />
        </div>
        <div className="mt-[110px]">
        <Contact/>
        </div>
        <div className="Footer" style={{ backgroundColor: "var(--color-azure-9, #0e141e)" }}>
          <hr style={{ borderColor: "#5F6168" }} />
        </div>
        <Footer/>
        
      </div>
    </>
  );
};

export default HomePage;
