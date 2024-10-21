import React from "react";
import Image from "next/image";
import "./price.css"
import arrow_price from '@/assets/arrow-price.svg'

interface PriceProps {
  readonly title: string;
  readonly heading: string;
  readonly imageSrc: string;
  readonly text: string;
  readonly imageSrc1: string;
  readonly text1: string;
  readonly imageSrc2: string;
  readonly text2: string;
  readonly imageSrc3: string;
  readonly text3: string;
}

export default function Price({ title, heading, imageSrc, text ,imageSrc1,text1,imageSrc2,text2,imageSrc3,text3}: PriceProps) {
  return (
    <div className="price-card">
      <span className="price-title">{title}</span>
      <div className="price-header">
        <span className="price-heading">{heading}</span>
        <span className="price-duration">/Per Month</span>
      </div>
      <div className="price-details"style={{marginTop:"30px"}}>
        <Image src={imageSrc} alt={title} width={20} height={16} />
        <span className="price-text">{text}</span>
      </div>
      <div className="price-details ">
        <Image src={imageSrc1} alt={title} width={20} height={16} />
        <span className="price-text">{text1}</span>
      </div>
      <div className="price-details">
        <Image src={imageSrc2} alt={title} width={20} height={16} />
        <span className="price-text">{text2}</span>
      </div>
      <div className="price-details">
        <Image src={imageSrc3} alt={title} width={20} height={16} />
        <span className="price-text">{text3}</span>
      </div>
      <button 
        style={{
          borderRadius: "var(--radius-4, 4px)",
          background: "#FFF",
          boxShadow: "0px 12px 32px 0px rgba(25, 41, 66, 0.07)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          margin:"20px"
        }}
      >
        <span
          style={{
            borderRadius: "0px 0px var(--radius-4, 4px) var(--radius-4, 4px)",
            borderTop: "var(--stroke-weight-0_5, 0.5px) solid #EAECEE",
            display: "flex",
            // height: "93.5px",
            // padding: "34px 155.27px",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >
          Get Started
        </span>
        <Image src={arrow_price} alt="arrow" width={20} height={16} />
      </button>
    </div>
  );
}
