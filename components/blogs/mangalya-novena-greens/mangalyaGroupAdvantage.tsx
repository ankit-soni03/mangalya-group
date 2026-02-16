"use client";
import Image from "next/image";

export default function MangalyaGroupAdvantage() {
  return (
    <section className="bg-[#292929] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">

          {/* LEFT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            {/* Small Image */}
            <div className="relative h-[250px] md:h-[320px] overflow-hidden">
              <Image
                src="/blogs/mangalya-novena-greens/img-4.png" // replace
                alt="Mangalya Entrance"
                fill
                className="object-cover"
              />
            </div>

            {/* Tall Image */}
            <div className="relative h-[320px] overflow-hidden">
              <Image
                src="/blogs/mangalya-novena-greens/img-5.png" // replace
                alt="Mangalya Towers"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="font-poppins text-gray-300">
            <h2 className="text-[25px] md:text-[30px] font-medium text-white mb-4">
              The Mangalya Group Advantage
            </h2>

            <p className="text-[14px] md:text-[16px] leading-relaxed mb-6">
              Mangalya Group has earned its reputation on three strong
              foundations: transparency, quality, and timely delivery. As one
              of the most respected real estate developers in India, they bring
              decades of experience and a customer-centric approach to every
              project they undertake. The commitment of the company to
              sustainability is reflected in the design of Mangalya Novena
              Greens, which takes into account:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-[14px] md:text-[16px]">
              <li>Energy-efficient systems</li>
              <li>Green building practices</li>
              <li>Environmentally friendly landscaping</li>
              <li>Rainwater harvesting systems</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
