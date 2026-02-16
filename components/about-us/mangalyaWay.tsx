"use client";
import Image from "next/image";

export default function MangalyaWay() {
  return (
    <section className="lg:py-24 md:py-20 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-poppins font-bold lg:text-[50px] leading-[1.28] text-black mb-10 lg:mb-20 md:mb-12 text-[29px]">
          The Mangalya Way
        </h2>

        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-center">
          {/* Left Card */}
          <div className="bg-[#F4F5F7] w-[360px] h-[420px] p-10 flex flex-col justify-center">
            <h3 className="font-poppins font-normal text-[50px] mb-6">
              Mission
            </h3>
            <p className="font-poppins font-light text-[15px] leading-[1.6] text-[#3F3F3F] opacity-90">
              At Mangalya Group, our mission is to deliver thoughtfully designed
              homes that balance premium living with real value. Every space is
              engineered for comfort, longevity, and everyday excellence—because
              a home should feel rewarding today and remain valuable tomorrow.
            </p>
          </div>

          {/* Middle Image */}
          <div
            className="relative w-[380px] h-[520px] overflow-hidden 
              shadow-[8px_8px_25px_rgba(0,0,0,0.7)]"
          >
            <Image
              src="/about-us/MangalyaVision.png"
              alt="Mangalya Vision"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority
            />
          </div>

          {/* Right Card */}
          <div className="bg-[#F4F5F7] w-[360px] h-[420px] p-10 flex flex-col justify-center">
            <h3 className="font-poppins font-normal text-[50px] mb-6">
              Vision
            </h3>
            <p className="font-poppins font-light text-[15px] leading-[1.6] text-[#3F3F3F] opacity-90">
              We envision shaping the future of Delhi NCR’s residential
              landscape through sustainable design, smart infrastructure, and
              people-first planning. By integrating eco-conscious practices with
              modern architecture, we aim to create communities that elevate
              lifestyles while contributing to a greener India.
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          {/* Mission */}
          <div className="bg-gray-200 p-8 mx-4">
            <h3 className="font-poppins font-normal text-[32px] mb-4">
              Mission
            </h3>
            <p className="font-poppins font-light lg:text-[16px] text-[15px] leading-[1.7] text-[#3F3F3F] opacity-90">
              At Mangalya Group, our mission is to deliver thoughtfully designed
              homes that balance premium living with real value. Every space is
              engineered for comfort, longevity, and everyday excellence—because
              a home should feel rewarding today and remain valuable tomorrow.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[420px] shadow-2xl overflow-hidden shadow-[8px_8px_25px_rgba(0,0,0,0.7)]">
            <Image
              src="/about-us/MangalyaVision.png"
              alt="Mangalya Vision"
              fill
              className="object-cover"
            />
          </div>

          {/* Vision */}
          <div className="bg-gray-200 p-8 mx-4">
            <h3 className="font-poppins font-normal text-[32px] mb-4">
              Vision
            </h3>
            <p className="font-poppins font-light lg:text-[16px] text-[15px] leading-[1.7] text-[#3F3F3F] opacity-90">
              We envision shaping the future of Delhi NCR’s residential
              landscape through sustainable design, smart infrastructure, and
              people-first planning. By integrating eco-conscious practices with
              modern architecture, we aim to create communities that elevate
              lifestyles while contributing to a greener India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
