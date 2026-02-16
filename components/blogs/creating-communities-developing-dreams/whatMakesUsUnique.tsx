"use client";

import { ShieldCheck, BadgeCheck, Headphones, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WhatMakesUsUnique() {
  return (
    <section className="bg-[#D9D9D9] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-[30px] font-poppins font-medium mb-4 leading-snug">
              What Makes Us <br /> Unique
            </h2>

            <p className="font-poppins font-light text-sm text-[#5A5A5A] leading-relaxed mb-6 max-w-md">
              Our homes become more than just real estate because of this fusion
              of expertise and enthusiasm; they become places where memories are
              created.
            </p>

            <Link
              href="/contact"
              className="bg-black text-white px-6 py-2.5 text-sm hover:bg-gray-800 transition"
            >
              Enquire Now
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Trust</h4>
                <p className="text-xs text-gray-600">
                  Transparency and trust in each transaction
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white">
                <BadgeCheck size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Assurance</h4>
                <p className="text-xs text-gray-600">
                  Dependable delivery schedules
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white">
                <Headphones size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Service</h4>
                <p className="text-xs text-gray-600">
                  Customer-focused assistance and service
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center text-white">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Comfort</h4>
                <p className="text-xs text-gray-600">
                  Lifestyle-focused design and thoughtful amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
