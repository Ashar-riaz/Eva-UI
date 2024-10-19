import React from 'react'
import Image from 'next/image'

interface ServiceProps {
    readonly title: string;
    readonly description: string;
    readonly imageUrl: string;
    readonly buttonText?: string;
    readonly onButtonClick?: () => void;
    readonly topFeatureImage: string;
    readonly topFeatureText: string;
    readonly middleFeatureImage: string;
    readonly middleFeatureText: string;
    readonly bottomFeatureImage: string;
    readonly bottomFeatureText: string;
}

export default function Service({ title, description, imageUrl, buttonText, onButtonClick, topFeatureImage, topFeatureText, middleFeatureImage, middleFeatureText, bottomFeatureImage, bottomFeatureText }: ServiceProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[542.84px] self-stretch rounded-lg bg-white shadow-[0px_12px_32px_0px_rgba(25,41,66,0.07)]">
      <div className="mb-6">
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <h2 className="text-center text-[21.3px] font-light leading-[27.73px] capitalize text-[#302F5B] mb-4" style={{
        fontFamily: 'var(--font-family-Font-3, Poppins)',
        fontWeight: 'var(--font-weight-300, 300)',
        lineHeight: 'var(--line-height-27_73, 27.73px)',
      }}>{title}</h2>
      <p className="text-center px-4" style={{
        color: 'var(--color-grey-39, #5F6168)',
        fontFamily: 'var(--font-family-Font-3, Poppins)',
        fontSize: 'var(--font-size-16, 16px)',
        fontStyle: 'normal',
        fontWeight: 'var(--font-weight-300, 300)',
        lineHeight: 'var(--line-height-26_56, 26.56px)',
      }}>
        {description}
      </p>
      <p className="px-4 mt-2" style={{
        color: 'var(--color-blue-27, #302F5B)',
        fontFamily: 'var(--font-family-Font-3, Poppins)',
        fontSize: 'var(--font-size-18, 18px)',
        fontStyle: 'normal',
        fontWeight: 'var(--font-weight-300, 300)',
        lineHeight: 'var(--line-height-31, 31px)',
        textTransform: 'capitalize',
      }}>
        Top features
      </p>
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center mb-2">
          <div className="mr-4">
            <Image
              src={topFeatureImage}
              alt="Top Feature"
              width={18}
              height={18}
            />
          </div>
          <p className="text-left" style={{
            color: 'var(--color-grey-39, #5F6168)',
            fontFamily: 'var(--font-family-Font-3, Poppins)',
            fontSize: 'var(--font-size-14, 16px)',
            fontStyle: 'normal',
            fontWeight: 'var(--font-weight-300, 300)',
            lineHeight: 'var(--line-height-22, 22px)',
            marginBottom: '-4px',
          }}>
            {topFeatureText}
          </p>
        </div>
        <div className="flex flex-row items-center mb-2">
          <div className="mr-4">
            <Image
              src={middleFeatureImage}
              alt="Middle Feature"
              width={18}
              height={18}
            />
          </div>
          <p className="text-left" style={{
            color: 'var(--color-grey-39, #5F6168)',
            fontFamily: 'var(--font-family-Font-3, Poppins)',
            fontSize: 'var(--font-size-14, 16px)',
            fontStyle: 'normal',
            fontWeight: 'var(--font-weight-300, 300)',
            lineHeight: 'var(--line-height-22, 22px)',
            marginBottom: '-4px',
          }}>
            {middleFeatureText}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-4">
            <Image
              src={bottomFeatureImage}
              alt="Bottom Feature"
              width={18}
              height={18}
            />
          </div>
          <p className="text-left" style={{
            color: 'var(--color-grey-39, #5F6168)',
            fontFamily: 'var(--font-family-Font-3, Poppins)',
            fontSize: 'var(--font-size-14, 16px)',
            fontStyle: 'normal',
            fontWeight: 'var(--font-weight-300, 300)',
            lineHeight: 'var(--line-height-22, 22px)',
            marginBottom: '-4px',
          }}>
            {bottomFeatureText}
          </p>
        </div>
      </div>
      <button 
        className="mt-4 px-4 py-2"
        style={{
          borderRadius: '8px',
          background: '#FFF',
          boxShadow: '0px 12px 32px 0px rgba(25, 41, 66, 0.07)'
        }}
      >
        Read more
      </button>
      {buttonText && onButtonClick && (
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onButtonClick}
          style={{
            borderRadius: '8px',
            background: '#FFF',
            boxShadow: '0px 12px 32px 0px rgba(25, 41, 66, 0.07)'
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  )
}
