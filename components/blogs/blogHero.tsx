import Image from "next/image";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="w-full">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-16 lg:mb-20 pt-8 lg:pt-16">
        {/* Heading */}
        <div className="relative inline-flex items-center">
          <h2 className="font-quattrocento font-semibold text-[30px] md:text-[36px] lg:text-[40px] text-black tracking-wide">
            Blogs
          </h2>

          {/* Leaf */}
          <div className="absolute -top-6 right-[-32px] md:right-[-45px] w-12 md:w-16 pointer-events-none">
            <Image
              src="/about-us/leaf.png"
              alt="leaf"
              width={64}
              height={64}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-[16px] md:text-[18px] text-gray-600">
          Where strategy meets execution—and growth follows.
        </p>
      </div>

      {/* Hero Wrapper (this adds padding like image) */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Image Container - Clickable */}
        <Link
          href="/blogs/creating-communities-developing-dreams"
          className="group block"
        >
          <div className="relative w-full h-64 md:h-80 overflow-hidden cursor-pointer">
            <Image
              src="/blogs/footer-logo.png"
              alt="Blog Hero"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute bottom-6 left-6 text-white max-w-xl">
              <div className="flex gap-2 mb-3 flex-wrap">
                <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Technology
                </span>
                <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Other Category
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-poppins font-semibold leading-snug mb-2">
                Creating Communities, Developing Dreams
              </h2>

              <span className="bg-white text-black font-poppins text-xs px-3 py-1 rounded-full inline-block">
                The Mangalyam Group Story
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
