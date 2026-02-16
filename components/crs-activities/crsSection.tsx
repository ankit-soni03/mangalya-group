"use client";

import Image from "next/image";

export default function CSRSection() {
  return (
    <section className="w-full bg-white pt-20 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Main Heading */}
        <h2 className="font-handwritten text-center text-4xl md:text-5xl lg:text-[60px] text-gray-800 mb-6 text-shadow-lg font-bold">
          Corporate Social Responsibility
        </h2>

        {/* Top Description Box */}
        <div className="bg-[#e6f4ee] max-w-4xl mx-auto px-8 py-6 text-center">
          <p className="font-poppins text-[15px] lg:text-[18px] md:text-base text-gray-700 leading-relaxed">
            At Mangalya Group, we don’t just build homes and commercial spaces —
            we build opportunities, hope, and sustainable futures for the
            communities we serve. Our CSR philosophy is rooted in compassion,
            accountability, and long-term value creation. We believe that real
            development is holistic — elevating lives socially, economically,
            and environmentally — and our initiatives are aligned with this
            belief.
          </p>
        </div>

        {/* Bottom Content - Mobile: Image first, then Mission Box */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 md:gap-16 items-center">
          {/* Image Section - Order 1 on mobile, Order 2 on desktop */}
          <div className="relative w-full flex justify-center order-1 md:order-2">
            {/* Decorative Leaf Behind Image */}
            <div className="absolute -right-6 -top-15 md:-right-30 -top-8 md:-top-45 w-20 md:w-44 lg:w-56 opacity-100 pointer-events-none">
              <Image
                src="/crs-activity/leaf.png"
                alt="Decoration"
                width={300}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main Image - Smaller on mobile */}
            <div className="relative z-10 w-[280px] sm:w-[350px] md:w-full">
              <Image
                src="/crs-activity/crsImg.png"
                alt="CSR Activity"
                width={600}
                height={450}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Mission Box - Order 2 on mobile, Order 1 on desktop */}
          <div className="bg-[#e6f4ee] p-8 md:p-10 max-w-md mx-auto md:mx-0 order-2 md:order-1">
            <h3 className="font-handwritten text-3xl md:text-4xl lg:text-[51px] text-gray-800 mb-4 text-shadow-lg font-bold">
              Our CSR Mission
            </h3>

            <p className="font-poppins text-[15px] lg:text-[18px] md:text-base text-gray-700 leading-relaxed">
              To foster inclusive growth and value-based leadership through
              impactful programs in Education, Healthcare, Environment,
              Community Development, and Social Welfare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}