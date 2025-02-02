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
}

export default function Price({ title, heading, imageSrc, text ,imageSrc1,text1,imageSrc2,text2}: PriceProps) {
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
      
      <button className="button-price1">
        <div className="button-price-text1"
        >
          <span>Get Started</span>
          <Image src={arrow_price} alt="arrow" width={10} height={10} />
        </div>
      </button>
    </div>
  );
}
