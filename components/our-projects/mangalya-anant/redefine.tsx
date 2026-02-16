"use client";

import Image from "next/image";
import { useState } from "react";
import EnquirePopup from "@/components/EnquirePopup";

export function RedefineSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-white px-[20px] py-[70px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="w-[70px] h-[4px] bg-green-600 rounded mb-5" />

          <h2 className="text-[32px] leading-[1.25] font-semibold text-[#111] mb-5">
            Redefining the True Value <br />
            of Modern Living at <br />
            OPHIRA
          </h2>

          <p className="text-[14.5px] text-[#666] leading-[1.7] max-w-[520px] mb-8">
            Mangalya OPHIRA, Greater Noida (West) offers a world-class lifestyle
            surrounded by lush greenery and calm. Featuring modern amenities
            like a health & yoga centre, parks, and a shopping plaza, it’s
            designed for comfort, convenience, and everyday luxury. Choose from
            impeccably planned 2 & 3 BHK apartments that are spacious, airy, and
            flooded with natural light—crafted for elevated living and complete
            peace of mind.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white px-7 py-3 text-sm w-fit hover:bg-gray-800 transition"
          >
            Download Brochure
          </button>
          <EnquirePopup open={open} setOpen={setOpen} />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* TOP CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-4 border shadow-sm">
              <h4 className="text-[14px] font-semibold mb-1">
                Smart Infrastructure
              </h4>
              <p className="text-[12.5px] text-[#777] leading-[1.5]">
                Trusted quality and nature-inspired living come together for
                lasting value.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-4 border shadow-sm flex gap-3">
              <div className="w-9 h-9 bg-black text-white rounded-lg flex items-center justify-center">
                ✓
              </div>
              <div>
                <h4 className="text-[14px] font-semibold">99% Trusted</h4>
                <p className="text-[12.5px] text-[#777]">
                  Built on trust. Backed by experience.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM IMAGE CARD */}
          <div className="bg-white">
            <Image
              src="/our-projects/mangalya-anant/anant.png"
              alt="Location map"
              width={520}
              height={300}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
