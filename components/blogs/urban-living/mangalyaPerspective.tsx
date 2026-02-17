"use client";

export default function MangalyaPerspective() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6 items-start">
          {/* LEFT */}
          <div>
            <h2 className="font-poppins font-medium text-[25px] md:text-[40px] leading-snug pt-10">
              The Mangalya Group <br /> Perspective
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="font-handwritten text-[30px] md:text-[35px] md:mb-4 mb-2 font-semibold text-gray-800">
              Building for Tomorrow, Today
            </h3>

            <p className="font-poppins font-light text-[14px] md:text-[15px] text-gray-700 leading-relaxed space-y-4">
              At Mangalya Group, we’ve been observing the development of Greater
              Noida firsthand—not from a conference room, but from actually
              developing the area. Projects such as Mangalya Novena Greens in
              Greater Noida West are not just about real estate; they’re about
              developing an area where your evening walk doesn’t feel like a
              chore.
              <br />
              <br />
              What we’ve learned: location is important, but so is the
              development at that location. Parks are not just selling points
              when you’re deciding between screen time and playtime for the
              kids. Good construction is not a luxury; it’s a necessity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
