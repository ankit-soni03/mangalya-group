"use client";

import Image from "next/image";

export default function FloorPlanSection() {
  return (
    <section className="bg-white py-[70px] px-[20px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] font-semibold mb-2 flex items-center justify-center gap-2">
            Floor Plan <span className="text-green-600">🍃</span>
          </h2>
          <p className="text-[15px] text-[#666] max-w-[520px] mx-auto">
            Thoughtfully planned layouts that balance comfort, movement, and
            modern living.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[35px]">
          {/* Card 1 */}
          <div className="relative">
            <Image
              src="/our-projects/mangalya-anant/two1.png"
              alt="2 BHK with Study"
              width={360}
              height={360}
              className="w-full h-auto"
            />
          </div>

          {/* Card 2 */}
          <div className="relative">
            <Image
              src="/our-projects/mangalya-anant/one1.png"
              alt="2 BHK"
              width={360}
              height={360}
              className="w-full h-auto"
            />
          </div>

          {/* Card 3 */}
          <div className="relative">
            <Image
              src="/our-projects/mangalya-anant/three1.png"
              alt="3 BHK"
              width={360}
              height={360}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
