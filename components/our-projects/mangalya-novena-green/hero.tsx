"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative w-full">

        {/* Aspect-ratio wrapper */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/our-projects/mangalya-novena-green/hero.png"
            alt="Mangalya Project"
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
