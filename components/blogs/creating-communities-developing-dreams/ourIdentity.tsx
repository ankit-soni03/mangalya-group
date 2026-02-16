import Image from "next/image";
import Link from "next/link";

export default function OurIdentity() {
  return (
    <section className="w-full md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/blogs/creating-communities-developing-dreams"
          className="block"
        >
          <div className="relative w-full h-[180px] sm:h-[260px] md:h-80">
            <Image
              src="/blogs/footer-logo.png"
              alt="Blog Hero"
              fill
              priority
              className="block object-contain md:object-cover"
              sizes="100vw"
            />
          </div>
        </Link>
      </div>

      <section className="md:py-16 pb-12 md:pb-0bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6 items-start">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-poppins md:text-[30px] font-medium mb-1">
                OUR IDENTITY
              </h2>

              <div className="flex gap-2">
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  Technology
                </span>
                <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  Other Category
                </span>
              </div>
            </div>

            {/* Right */}
            <p className="font-poppins md:text-[16px] text-[14px] font-light text-gray-600 leading-relaxed">
              Mangalya Group was established with the goal of redefining quality
              and dependability in residential real estate, and it has
              continuously produced well-thought-out projects that endure.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
