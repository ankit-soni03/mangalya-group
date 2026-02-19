"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function FloorPlanSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "/our-projects/mangalya-novena-green/floor1.png",
    "/our-projects/mangalya-novena-green/floor2.png",
    "/our-projects/mangalya-novena-green/floor3.png",
    "/our-projects/mangalya-novena-green/floor4.png",
    "/our-projects/mangalya-novena-green/floor5.png",
    "/our-projects/mangalya-novena-green/floor6.png",
  ];

  // Prevent background scroll
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImg]);

  return (
    <>
      <section className="bg-white px-[16px] md:px-[20px] pb-[40px] md:pt-5">
        <div className="max-w-[1200px] mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center text-center lg:mb-5 pt-2 lg:pt-8">
            <div className="relative inline-flex items-center">
              <h2 className="font-quattrocento font-semibold leading-[1.28] text-[20px] md:text-[36px] lg:text-[40px] text-black tracking-wide">
                Floor Plan
              </h2>

              <div className="absolute -top-6 right-[-32px] md:right-[-45px] w-12 md:w-16 pointer-events-none">
                <Image
                  src="/about-us/leaf.png"
                  alt="leaf"
                  width={64}
                  height={64}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <p className="font-poppins font-light text-[13px] md:text-[16px] text-[#3F3F3F] leading-[1.28] max-w-[550px] my-3 md:my-4">
              Thoughtfully planned layouts that balance comfort, movement, and
              modern living.
            </p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
            {images.slice(0, 3).map((img, i) => (
              <FloorCard key={i} img={img} onClick={() => setSelectedImg(img)} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[820px] mx-auto gap-2 md:gap-4 mt-2 md:mt-4">
            {images.slice(3, 5).map((img, i) => (
              <FloorCard key={i} img={img} onClick={() => setSelectedImg(img)} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-center mt-2 md:mt-4">
            <div className="w-full sm:w-1/2 lg:w-1/3 max-w-[400px]">
              <FloorCard img={images[5]} onClick={() => setSelectedImg(images[5])} />
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-[20px]">

          {/* Close Button */}
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>

          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Full View"
              width={1600}
              height={1600}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

function FloorCard({
  img,
  onClick,
}: {
  img: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-[250px] sm:h-[300px] bg-white overflow-hidden cursor-pointer"
    >
      <Image
        src={img}
        alt="Floor Plan"
        fill
        className="object-contain p-2 sm:p-3 hover:scale-105 transition duration-300"
      />
    </div>
  );
}
