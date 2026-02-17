"use client";
import Image from "next/image";
// import Link from "next/link";

export default function ConsideringGreaterNoida() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="font-poppins font-medium text-[25px] md:text-[35px] mb-4 leading-snug">
            Considering moving to Greater Noida?
          </h2>

          <p className="font-poppins font-light text-[14px] md:text-[15px] text-gray-600 leading-relaxed mb-6">
            Take a look at our current projects in Mangalya Novena Greens and
            Mangalya Anant, or contact us to see which one suits your lifestyle.
            Because when it comes to buying a home, it’s not just about the
            space, it’s about whether you can imagine yourself living there in
            five years.
            <br /><br />
            Thoughts on the development of Greater Noida? Share your experiences
            and questions in the comments below.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden">
          <Image
            src="/blogs/urban-living/img6.png"
            alt="Greater Noida"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
