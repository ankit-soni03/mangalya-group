"use client";
import Image from "next/image";

export default function CityComingIntoOwn() {
  return (
    <section className="relative w-full h-[650px] md:h-[400px]">
      {/* Desktop Image */}
      <Image
        src="/blogs/urban-living/img5.png"
        alt="Greater Noida City"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* Mobile Image */}
      <Image
        src="/blogs/urban-living/img5-mobile.png"
        alt="Greater Noida City Mobile"
        fill
        priority
        className="block md:hidden object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-start md:items-center pt-[50px] md:pt-0">
        <div className="ml-0 md:ml-auto max-w-xl text-white">
          <h2 className="font-poppins text-[25px] md:text-[32px] font-medium leading-snug mb-4 text-right md:text-left">
            The City That's Coming Into Its Own
          </h2>

          <p className="font-poppins font-light text-[12px] md:text-[15px] text-gray-200 leading-relaxed text-right md:text-left">
            The story of Greater Noida isn’t the story of the next Gurgaon or
            Noida. It’s the story of something different: room to breathe, room
            to grow, and a lifestyle that doesn’t make you choose between the
            good life and the good stuff.
            <br />
            <br />
            Is it perfect? No. Is it for everyone? No. But if you’re sick of
            Delhi, can’t swing Gurgaon, and find Noida a little too crowded,
            then Greater Noida finds that sweet spot that’s definitely worth a
            shot. The future of urban living isn’t necessarily about the
            biggest, most crowded, and most costly cities. It’s about cities
            that give you back something most cities have long forgotten.
          </p>
        </div>
      </div>
    </section>
  );
}
