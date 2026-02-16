"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-center items-center lg:mb-20 md:mb-16 mb-10">
          <div className="relative">
            <div className="absolute -top-8 right-[-35px] md:right-[-50px] w-14 md:w-20 pointer-events-none">
              <Image
                src="/about-us/leaf.png"
                alt="leaf"
                width={80}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>

            <h2 className="font-quattrocento font-semibold text-[34px] md:text-[42px] lg:text-[50px] text-black tracking-wide">
              ABOUT US
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 md:gap-12 gap-10 items-start">
          {/* LEFT */}
          <div>
            {/* Philosophy */}
            <h3 className="font-poppins font-semibold italic text-[25px] lg:text-[40px] leading-tight text-black lg:mb-40 mb-[-20px]">
              The philosophy behind homes
            </h3>

            {/* Stats – Desktop */}
            <div className="hidden lg:grid grid-cols-3 bg-[#F4F5F7] px-6 py-8 text-center gap-0 relative">
              {stats.map((item, i) => (
                <div key={i} className="relative px-4">
                  {/* Vertical divider - not on first item */}
                  {i !== 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-300"></div>
                  )}
                  <h4 className="font-poppins font-extralight text-[40px] lg:text-[44px] leading-tight">
                    {item.value}
                  </h4>
                  <p className="font-poppins text-[15px] lg:text-[16px] text-[#9A9A9A] mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="font-poppins font-light text-[15px] lg:text-[16px] leading-relaxed text-[#3F3F3F]">
            <p>
              Mangalya Group sets new benchmarks in residential real estate
              across Delhi NCR, delivering quality homes built for comfort and
              lasting value.
            </p>
            <br />
            <p>
              With a strong focus on design excellence, construction quality,
              transparency, and timely delivery, the Group has built a
              consistent track record of trust and reliability. Its flagship
              projects, Mangalya Ophira and Mangalya Novena Greens, reflect the
              brand’s commitment to thoughtfully designed layouts, premium
              amenities, secure environments, and excellent connectivity,
              creating a balanced lifestyle for residents. Mangalya Group
              delivers homes that offer both present-day comfort and long-term
              value—making them a smart choice for homeowners and investors
              alike.
            </p>
            <br />
            <p>
              Driven by a customer-centric approach and uncompromising
              standards, Mangalya Group continues to strengthen its position as
              a preferred residential developer in the region.
            </p>
          </div>

          {/* Stats – Mobile with vertical lines */}
          <div className="lg:hidden grid grid-cols-3 bg-[#F4F5F7] px-4 py-6 text-center gap-0 relative shadow-[8px_8px_25px_rgba(0,0,0,0.2)]">
            {stats.map((item, i) => (
              <div key={i} className="relative px-2">
                {/* Vertical divider - not on first item */}
                {i !== 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gray-300"></div>
                )}
                <h4 className="font-poppins font-extralight text-[32px] leading-tight">
                  {item.value}
                </h4>
                <p className="font-poppins text-[12px] text-[#9A9A9A] mt-0.5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "95%", label: "Happy Homeowners" },
  { value: "20+", label: "Years of Excellence" },
  { value: "100%", label: "Commitment to Quality" },
];
