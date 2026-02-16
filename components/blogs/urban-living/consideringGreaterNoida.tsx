"use client";
import Image from "next/image";
// import Link from "next/link";

export default function ConsideringGreaterNoida() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Considering moving to Greater Noida?
          </h2>

          <p className="font-poppins text-sm text-gray-600 leading-relaxed mb-6">
            Take a look at our current projects in Mangalya Novena Greens and
            Mangalya Anant, or contact us to see which one suits your lifestyle.
            Because when it comes to buying a home, it’s not just about the
            space, it’s about whether you can imagine yourself living there in
            five years.
            <br /><br />
            Thoughts on the development of Greater Noida? Share your experiences
            and questions in the comments below.
          </p>

          {/* <Link
            href="/brochure"
            className="inline-block bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition"
          >
            Download Brochure
          </Link> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden">
          <Image
            src="/blogs/urban-living/img6.png" // replace with your image
            alt="Greater Noida"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
