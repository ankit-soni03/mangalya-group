"use client";
import Image from "next/image";

export default function CityComingIntoOwn() {
  return (
    <section className="relative w-full h-[320px] md:h-[380px] lg:h-[440px]">
      {/* Background Image */}
      <Image
        src="/blogs/urban-living/img5.png"
        alt="Greater Noida City"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="ml-auto max-w-xl text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3">
            The City That's Coming Into Its Own
          </h2>

          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            The story of Greater Noida isn’t the story of the next Gurgaon or
            Noida. It’s the story of something different: room to breathe, room
            to grow, and a lifestyle that doesn’t make you choose between the
            good life and the good stuff.
            <br /><br />
            Is it perfect? No. Is it for everyone? No. But if you’re sick of
            Delhi, can’t swing Gurgaon, and find Noida a little too crowded, then
            Greater Noida finds that sweet spot that’s definitely worth a shot.
            <br /><br />
            The future of urban living isn’t necessarily about the biggest, most
            crowded, and most costly cities. It’s about cities that give you back
            something most cities have long forgotten.
          </p>
        </div>
      </div>
    </section>
  );
}
