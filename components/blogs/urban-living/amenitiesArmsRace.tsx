"use client";
import Image from "next/image";

export default function AmenitiesArmsRace() {
  const amenities = [
    {
      title: "Indoor sports facilities",
      img: "/blogs/urban-living/img1.png",
    },
    {
      title: "Jogging and cycling tracks",
      img: "/blogs/urban-living/img2.png",
    },
    {
      title: "Gardens",
      img: "/blogs/urban-living/img3.png",
    },
    {
      title: "Club houses",
      img: "/blogs/urban-living/img4.png",
    },
  ];

  return (
    <section className="bg-[#2b2b2b] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          The Amenities Arms Race
        </h2>

        {/* Script subtitle */}
        <p className="font-handwritten text-2xl mt-2 opacity-90">
          (And Why You’re Winning)
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-6 text-sm md:text-base text-gray-300 leading-relaxed">
          This is how Greater Noida is leading the way: the days of a small gym
          and a kids’ slide being touted as “world-class amenities” are over.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
          {amenities.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-4 text-sm text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
