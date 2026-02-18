"use client";

import Image from "next/image";

export function AmenitiesSection() {
  return (
    <section className="bg-[#ededed] py-10 md:py-[60px] px-[20px]">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <h2 className="font-quattrocento text-center font-semibold leading-[1.28] text-[20px] md:text-[36px] lg:text-[40px] text-black tracking-wide">
          AMENITIES
        </h2>

        <p className="font-poppins font-light text-[13px] md:text-[16px] text-[#3F3F3F] leading-[1.28] max-w-[550px] mb-8 mx-auto text-center mt-3 md:mt-4">
          Mangalya Novena Green Noida Extension Features
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {[
            "AmenitiesSection1.png",
            "AmenitiesSection2.png",
            "AmenitiesSection3.png",
            "AmenitiesSection4.png",
            "AmenitiesSection5.png",
            "AmenitiesSection6.png",
          ].map((img, i) => (
            <div key={i} className="relative w-full h-[220px] overflow-hidden">
              <Image
                src={`/our-projects/mangalya-novena-green/${img}`}
                alt="Amenity"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
