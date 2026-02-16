export default function ModernDesignNatureSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-[380px_1fr] gap-4 md:gap-16 items-start">
          {/* Desktop Vertical Divider */}
          <div className="hidden md:block absolute left-[358px] top-2 bottom-2 w-px bg-gray-300" />

          {/* LEFT TITLE */}
          <h2 className="font-poppins text-[25px] md:text-[30px] font-medium leading-tight">
            Where Modern Design and Nature Collide
          </h2>

          {/* RIGHT CONTENT */}
          <p className="font-poppins text-[14px] md:text-[16px] leading-relaxed font-light text-gray-600">
            Mangalya Novena Greens, located in Tech Zone-IV, Greater Noida West,
            is designed to bring rare breathing space to urban living. Spread
            across 4 acres, the project dedicates 70% of its area to open green
            spaces, blending nature with modern comforts. With a clear focus on
            enhancing everyday life, every detail—from the grand entrance to the
            thoughtful layout—reflects a philosophy of homes that are not just
            lived in, but truly experienced.
          </p>
        </div>
      </div>
    </section>
  );
}
