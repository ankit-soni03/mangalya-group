"use client";

import Image from "next/image";

const INFO_CARDS = [
  {
    title: "Apartments",
    details: ["3 BHK", "Duplex Apartment"],
    imgSrc: "/icons/icon1.png",
  },
  {
    title: "Spacious Homes",
    details: ["Designed", "Living"],
    imgSrc: "/icons/icon2.png",
  },
  {
    title: "Location",
    details: ["Noida"],
    imgSrc: "/icons/icon3.png",
  },
  {
    title: "Price",
    details: ["On Request"],
    imgSrc: "/price-icon-new.png",
  },
];

export default function InfoCardsSection() {
  return (
    <section className="w-full bg-white pb-12 font-['Poppins']">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 md:px-0">
          {INFO_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 border border-gray-900 bg-white min-h-[100px] hover:shadow-md transition"
            >
              
              {/* Left Content */}
              <div>
                <h4 className="text-[15px] font-medium text-black mb-1 leading-tight">
                  {card.title}
                </h4>

                {card.details.map((line, i) => (
                  <p
                    key={i}
                    className="text-[11px] md:text-[13px] text-gray-700 leading-tight"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Right Icon */}
              <div className="relative w-16 h-16 ml-4">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  fill
                  className="object-contain"
                  sizes="64px"
                  priority
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}