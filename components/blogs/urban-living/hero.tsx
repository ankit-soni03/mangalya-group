import Image from "next/image";

export default function UrbanHomeBlog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Images + Title */}
        <div className="flex items-center justify-center gap-10 mb-10">
          {/* Left images */}
          <div className="hidden md:flex items-center gap-6">
            <div className="w-32 h-20 relative rotate-[-10deg]">
              <Image
                src="/blogs/img1.png"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-40 h-26 relative rotate-[-5deg]">
              <Image
                src="/blogs/img2.png"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold">
              The Mangalya Group
            </h2>
            <p className="text-3xl md:text-4xl font-medium text-gray-500 mt-1">
              Story
            </p>
          </div>

          {/* Right images */}
          <div className="hidden md:flex items-center gap-6">
            <div className="w-40 h-26 relative rotate-[5deg]">
              <Image
                src="/blogs/img3.png"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-32 h-20 relative rotate-[10deg]">
              <Image
                src="/blogs/img4.png"
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
          Here at Mangalya Group, outstanding real estate is not only
          constructed but also carefully planned for contemporary living.
          Mangalya Group, a reputable brand in the Delhi NCR real estate market,
          is dedicated to turning dreams into stunning, useful, and future-ready
          residences.
        </p>
      </div>
    </section>
  );
}
