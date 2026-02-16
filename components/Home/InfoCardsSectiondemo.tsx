"use client";

import React from "react";
import Image from "next/image";

const INFO_CARDS = [
  {
    title: "Apartments",
    details: ["3 BHK", "Duplex Apartment"],
    imgSrc: "/icons/icon1.png",
    isSvg: false,
  },
  {
    title: "Spacious Homes",
    details: ["Designed", "Living"],
    imgSrc: "/icons/icon2.png",
    isSvg: false,
  },
  {
    title: "Location",
    details: ["Noida"],
    imgSrc: "/icons/icon3.png",
    isSvg: false,
  },
  {
    title: "Price",
    details: ["On Request"],
    isSvg: true,
    // Custom SVG to match the price tag icon in the UI
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-black">
        <path
          d="M32 12 L48 28 L36 44 L20 28 L20 12 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="white"
        />
        <circle cx="26" cy="18" r="2" fill="currentColor" />
        <path
          d="M42 20 L58 36 L46 52 L30 36 L30 20 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="white"
        />
        <circle cx="36" cy="26" r="2" fill="currentColor" />
        <text
          x="24"
          y="32"
          fontSize="8"
          fill="currentColor"
          className="font-bold"
        >
          ₹
        </text>
        <text
          x="34"
          y="40"
          fontSize="8"
          fill="currentColor"
          className="font-bold"
        >
          ₹
        </text>
      </svg>
    ),
  },
];

export default function InfoCardsSection() {
  return (
    <section className="w-full bg-white pb-12 font-['Poppins']">
      <div className="max-w-[1440px] mx-auto px-10 md:px-16 lg:px-24">
        {/* Grid layout matching the UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INFO_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 border border-gray-400 bg-white min-h-[110px]"
            >
              {/* Left: Text Content */}
              <div className="flex flex-col">
                <h4 className="text-[19px] font-medium text-black mb-1 leading-tight font-sans">
                  {card.title}
                </h4>
                <div className="flex flex-col">
                  {card.details.map((line, i) => (
                    <p
                      key={i}
                      className="text-[13px] text-gray-700 font-normal leading-tight"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right: Icon/SVG */}
              <div className="flex-shrink-0 ml-4">
                {card.isSvg ? (
                  <div className="w-16 h-16 flex items-center justify-center">
                    {card.svg}
                  </div>
                ) : (
                  <div className="relative w-14 h-14">
                    <Image
                      src={card.imgSrc || ""}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
