"use client";
import Image from "next/image";
// import Link from "next/link";

export default function ReraFinanceFamilySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-10 items-start md:mb-20 mb-12">
          {/* Left Image */}
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/blogs/mangalya-novena-greens/img-6.png"
              alt="Living Room"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="text-center font-poppins">
            <h2 className="text-[25px] md:text-[30px] font-medium md:mb-4 mb-2">
              RERA Registration &amp; Finance Options
            </h2>

            <p className="text-[14px] md:text-[16px] font-light text-gray-600 leading-relaxed md:mb-4 mb-2">
              Mangalya Novena Greens is completely RERA registered
              (UPRERAPRJ8646), giving homebuyers the assurance and transparency
              they are entitled to. The project has received approval from major
              finance institutions, ensuring easy home loan processing:
            </p>

            <p className="text-[14px] md:text-[16px] font-light text-gray-600 leading-relaxed md:mb-4 mb-2">
              HDFC Home Loans, LIC Housing Finance Ltd., PNB Housing Finance
              Limited, Dewan Housing Finance Corporation Limited (DHFL)
            </p>

            {/* <Link
              href="/brochure"
              className="inline-block bg-black text-white px-7 py-3 text-sm hover:bg-gray-800 transition"
            >
              Download Brochure
            </Link> */}
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src="/blogs/mangalya-novena-greens/img-7.png" // replace
              alt="Bedroom"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] md:gap-12 gap-4 items-start">
          {/* Left Title */}
          <h3 className="font-poppins text-[25px] md:text-[30px] font-medium leading-snug">
            A Home That Grows With <br /> Your Family
          </h3>

          {/* Right Content */}
          <p className="font-poppins text-[14px] md:text-[16px] font-light text-gray-600 leading-relaxed">
            With 756 units distributed in 6–8 towers, standing 20–21 floors
            high, Mangalya Novena Greens is a vibrant and established community.
            The project has already attained 100% occupancy, with families
            already residing within the community—a testament to its quality and
            desirability. This is not a construction site you are investing in;
            it is a ready-to-move, fully functional community where life is
            already in full swing. The status of the development allows you to
            move in immediately and start creating memories without the
            uncertainty of construction delays.
          </p>
        </div>
      </div>
    </section>
  );
}
