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
    <section className="bg-[#292929] pt-8 pb-16 md:pb-20 md:pt-12">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        
        {/* Heading */}
        <h2 className="font-poppins text-[25px] md:text-[30px] font-medium">
          The Amenities Arms Race
        </h2>

        {/* Script subtitle */}
        <p className="font-handwritten text-[25px] md:text-[30px] font-regular mt-1 opacity-90">
          (And Why You’re Winning)
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-6 text-[13px] md:text-[15px] font-light font-poppins text-gray-300 leading-relaxed">
          This is how Greater Noida is leading the way: the days of a small gym
          and a kids’ slide being touted as “world-class amenities” are over.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-14">
          {amenities.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-[220px] md:h-[180px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="font-poppins font-light mt-4 text-sm md:text-[13px] text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
