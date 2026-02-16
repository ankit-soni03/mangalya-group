"use client";
import Image from "next/image";
import Link from "next/link";

export default function ResidentsSayingSection() {
  return (
    <section className="relative w-full h-[220px] md:h-[280px]">
      
      {/* Background Image */}
      <Image
        src="/blogs/mangalya-projects/img-2.png" // replace with your image
        alt="Residents Experience"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-white font-poppins">
          
          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
              What Residents Are <br /> Actually Saying
            </h2>

            <Link
              href="/brochure"
              className="inline-block bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition"
            >
              Download Brochure
            </Link>
          </div>

          {/* RIGHT */}
          <p className="text-sm md:text-base leading-relaxed text-gray-200 max-w-xl">
            Unlike curated marketing claims, real voices from Mangalya Group
            residents reveal the true experience. Homeowners at Mangalya Novena
            Greens highlight everyday wins—usable green spaces, active
            amenities, and a lifestyle that genuinely works. From children
            playing outdoors daily to professionals enjoying quick office
            commutes without sacrificing peace, the real value lies not in
            flashy features, but in thoughtful design that elevates daily
            living.
          </p>

        </div>
      </div>
    </section>
  );
}
