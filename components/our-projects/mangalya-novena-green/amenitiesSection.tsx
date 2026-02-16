"use client";

import Image from "next/image";

export function AmenitiesSection() {
  return (
    <section className="bg-[#ededed] py-[60px] px-[20px]">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[32px] font-semibold tracking-wide mb-2">
          AMENITIES
        </h2>

        <p className="text-center text-[16px] text-[#333] mb-[40px]">
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
