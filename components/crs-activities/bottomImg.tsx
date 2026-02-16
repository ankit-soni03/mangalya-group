"use client";

import Image from "next/image";

export function BottomImg() {
  return (
    <section className="w-full h-auto">
      <div className="relative w-full">
        <Image
          src="/crs-activity/bottomImg1.png"
          alt="Contact-Us"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
