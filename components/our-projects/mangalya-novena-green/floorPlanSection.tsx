"use client";

import Image from "next/image";

export default function FloorPlanSection() {
  const images = [
    "/our-projects/mangalya-novena-green/floor1.png",
    "/our-projects/mangalya-novena-green/floor2.png",
    "/our-projects/mangalya-novena-green/floor3.png",
    "/our-projects/mangalya-novena-green/floor4.png",
    "/our-projects/mangalya-novena-green/floor5.png",
    "/our-projects/mangalya-novena-green/floor6.png",
  ];

  return (
    <section className="bg-white py-[70px] px-[20px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] font-semibold mb-2">
            Floor Plan <span className="text-green-600">🍃</span>
          </h2>
          <p className="text-[15px] text-[#666] max-w-[520px] mx-auto">
            Thoughtfully planned layouts that balance comfort, movement, and
            modern living.
          </p>
        </div>

        {/* Row 1 – 3 images */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {images.slice(0, 3).map((img, i) => (
            <FloorCard key={i} img={img} />
          ))}
        </div>

        {/* Row 2 – 2 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[820px] mx-auto">
          {images.slice(3, 5).map((img, i) => (
            <FloorCard key={i} img={img} />
          ))}
        </div>

        {/* Row 3 – 1 image */}
        <div className="max-w-[400px] mx-auto">
          <FloorCard img={images[5]} />
        </div>
      </div>
    </section>
  );
}

function FloorCard({ img }) {
  return (
    <div className="relative w-full h-[300px] bg-white overflow-hidden">
      <Image src={img} alt="Floor Plan" fill className="object-contain p-3" />
    </div>
  );
}
