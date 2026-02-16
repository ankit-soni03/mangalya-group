"use client";

export default function QuoteStrip() {
  return (
    <section className="w-full">
      <div
        className="relative w-full py-14 md:py-16 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #e3f4ee 0%, #f8ecee 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto relative">
          {/* Left quote */}
          <span className="absolute left-0 -top-6 text-5xl md:text-6xl text-black/60 font-serif">
            “
          </span>

          {/* Text */}
          <p className="font-light text-gray-800 text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight px-6">
            Smart planning,{" "}
            <span className="text-emerald-600 font-normal relative inline-block">
              green
              <span className="absolute -top-3 -right-4 text-base md:text-lg">
                🌱
              </span>
            </span>{" "}
            spaces and
            <br className="hidden sm:block" />a{" "}
            <span className="text-red-500 font-normal">lifestyle</span> that feels
            upgraded –
            <br />
            everyday
          </p>

          {/* Right quote */}
          <span className="absolute right-0 bottom-0 text-5xl md:text-6xl text-black/60 font-serif">
            ”
          </span>
        </div>
      </div>
    </section>
  );
}
