import React from "react";
import google from "@/assets/google.svg";
import google1 from "@/assets/google1.svg";
import success from "@/assets/success.png";
import about_us from "@/assets/about_us/about_us.png";
import drive from "@/assets/drive.svg";
import drive1 from "@/assets/drive1.svg";
import drive2 from "@/assets/drive2.svg";
import google2 from "@/assets/google2.svg";
import "./about_us.css";
import Image from "next/image";
import Nav from "@/component/Navbar/Nav";
import Footer from "@/component/footer/Footer";

export default function page() {
  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row items-center mt-16">
        <div className="md:w-1/2" style={{ marginTop: "-150px" }}>
          <div className="ml-[200px]">
            <div className="process-divider mb-1 ">
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
        <div className="md:w-1/2 mb-8 md:mb-0" style={{ marginLeft: "10%" }}>
          <Image src={success} alt="Success" />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col ml-[200px] mt-[80px]">
          <div className="process-divider mb-1 ">
            <div className="process-divider__line"></div>
            <span className="process-divider__text">What We Do</span>
            <div className="process-divider__line"></div>
          </div>
          <span className="engage-title" style={{ textAlign: "left" }}>
            Talkie: The Future of Voice <br /> Communication
          </span>
          <div className="">
            <Image src={about_us} alt="about_us" />
          </div>
        </div>
        <div className="flex flex-col mt-[120px] ml-[80px]">
          <h1>ahsgdkag</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
