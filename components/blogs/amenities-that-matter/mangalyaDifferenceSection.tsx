"use client";
import Link from "next/link";

export default function MangalyaDifferenceSection() {
  return (
    <section className="pb-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[14] md:left-[258px] top-0 bottom-0 w-px bg-gray-300" />

          <div className="md:space-y-16 space-y-8">
            {/* Block 1 */}
            <div className="relative grid md:grid-cols-[260px_1fr] md:gap-10 gap-4">
              {/* Dot */}
              <span className="absolute left-2 md:left-[252px] top-3 w-3 h-3 bg-green-600 rounded-full" />

              {/* Heading */}
              <h3 className="pl-8 md:pl-0 text-[20px] md:text-[28px] font-medium font-poppins text-gray-900">
                The Mangalya Group <br /> Difference
              </h3>

              {/* Content */}
              <div className="pl-8 md:pl-0 font-poppins text-sm md:text-[15px] text-gray-600 leading-relaxed">
                <p className="mb-4">
                  At Mangalya Group, we believe a home today is more than a
                  place to live—it's where life unfolds, dreams take shape, and
                  memories are made. Our homes are thoughtfully designed to
                  deliver modern amenities without compromising quality, nature,
                  or social connectivity.
                </p>

                <p className="mb-4">
                  We understand that the ideal home must be both future-ready
                  and relevant to everyday needs. That's why our projects
                  integrate smart home technology, wellness-focused spaces,
                  flexible layouts, and vibrant community living—reflecting how
                  people live in 2026.
                </p>

                <p>
                  Whether you're buying your first home, upgrading for a growing
                  family, or downsizing without sacrificing lifestyle, Mangalya
                  homes are built to enhance daily living, protect long-term
                  value, and align with your aspirations.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="relative grid md:grid-cols-[260px_1fr] md:gap-10 gap-4">
              {/* Dot */}
              <span className="absolute left-2 md:left-[252px] top-3 w-3 h-3 bg-green-600 rounded-full" />

              {/* Heading */}
              <h3 className="pl-8 md:pl-0 text-[20px] md:text-[28px] font-medium font-poppins">
                Time is precious
              </h3>

              {/* Content */}
              <div className="pl-8 md:pl-0 font-poppins text-sm md:text-[15px] text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Modern lifestyles need convenience. Thus, homebuyers want
                  residential properties that offer time-saving facilities like
                  mini-markets, pharmacy availability, accompanying laundry and
                  dry cleaning services, and managed delivery packages directly
                  on the premises.
                </p>

                <p>
                  Sufficient parking facilities, including spaces for charging
                  electric cars, have also become essential considerations for
                  buyers, as parking itself is sometimes considered an everyday
                  problem in cities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-5xl mx-auto mt-16 mb-8">
          <p className="font-handwritten text-[25px] md:text-[45px] leading-relaxed font-medium">
            “Ready to explore properties that offer the amenities you truly
            value? Connect with Mangalya Group today, and discover homes
            designed for modern living.”
          </p>
        </div>

        {/* Button */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-black font-light text-white px-12 py-4 text-sm hover:bg-gray-800 transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}
