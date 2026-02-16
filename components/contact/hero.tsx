"use client";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full">
      {/* Desktop + Tablet Image */}
      <div className="hidden sm:block relative w-full">
        <Image
          src="/contact/contact-hero.png"
          alt="Contact-Us"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden relative w-full h-[170px]">
        <Image
          src="/contact/contact-hero-test3.png"
          alt="Contact-Us"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
