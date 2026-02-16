"use client";
import Image from "next/image";

export default function StatutoryDisclosure() {
  return (
    <section className="relative w-full h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/disclaimer/img3.png" // replace with your image
        alt="Statutory Disclosure"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-xl text-white">
          {/* Title */}
          <h2 className="font-handwritten text-3xl md:text-4xl mb-4">
            Statutory Disclosure
          </h2>

          {/* Text */}
          <p className="font-poppins text-xs md:text-sm leading-relaxed text-gray-100">
            The website contains information about the projects and developments
            undertaken by the Company, including banners and posters. The
            content is subject to modification in accordance with the
            stipulations and recommendations under the Real Estate (Regulation
            and Development) Act, 2016 (RERA) and related rules, and it may not
            be fully updated at present. Users are therefore advised to directly
            verify all project details and aspects of any proposed booking or
            acquisition of units/premises with the Company’s authorized sales
            team before making any purchasing decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
