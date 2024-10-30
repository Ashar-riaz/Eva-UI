import React from "react";
import Image from "next/image";
import "./price1.css"
import arrow_price from '@/assets/arrow2.svg'

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
    <div className="price-card1">
      <span className="price-title1">{title}</span>
      <div className="price-header1">
        <span className="price-heading1">{heading}</span>
        <span className="price-duration1">/Per Month</span>
      </div>
      <div className="price-details1"style={{marginTop:"30px"}}>
        <Image src={imageSrc} alt={title} width={20} height={16} />
        <span className="price-text1">{text}</span>
      </div>
      <div className="price-details1">
        <Image src={imageSrc1} alt={title} width={20} height={16} />
        <span className="price-text1">{text1}</span>
      </div>
      <div className="price-details1">
        <Image src={imageSrc2} alt={title} width={20} height={16} />
        <span className="price-text1">{text2}</span>
      </div>
      <div className="price-details1">
        <Image src={imageSrc3} alt={title} width={20} height={16} />
        <span className="price-text1">{text3}</span>
      </div>
      <button 
        style={{
          borderRadius: "var(--radius-4, 4px)",
          background: "#3639A4",
          boxShadow: "0px 12px 32px 0px rgba(25, 41, 66, 0.07)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
          margin:"20px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "0px 0px var(--radius-4, 4px) var(--radius-4, 4px)",
            borderTop: "var(--stroke-weight-0_5, 0.5px) solid #EAECEE",
            padding: "34px 125.27px",
            height: "93.5px",
            width: "100%",
            color:"#FFFFFF"
          }}
        >
          <span>Get Started</span>
          <Image src={arrow_price} alt="arrow" width={10} height={10} />
        </div>
      </button>
    </div>
  );
}
