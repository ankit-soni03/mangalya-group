"use client";
import Image from "next/image";

export default function FacilitiesEverydayLifeSection() {
  return (
    <section className="md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12">
          {/* Vertical line - hidden on mobile, visible on lg */}
          <div className="hidden lg:block absolute left-[367px] top-0 bottom-0 w-px bg-gray-300" />

          {/* LEFT */}
          <div>
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                Technology
              </span>
              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                Other Category
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[25px] font-poppins text-[25px] md:text-[30px] font-medium leading-snug mb-6">
              Facilities That Really Improve Everyday Life
            </h2>

            {/* Images */}
            <div className="space-y-6">
              <div className="relative h-[200px] md:h-[330px] overflow-hidden">
                <Image
                  src="/blogs/mangalya-novena-greens/img-1.png"
                  alt="Bedroom"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[200px] md:h-[330px] overflow-hidden">
                <Image
                  src="/blogs/mangalya-novena-greens/img-2.png"
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative font-poppins text-sm text-gray-600 leading-relaxed space-y-10">
            {/* Mobile vertical line - visible only on mobile */}
            <div className="lg:hidden absolute left-[15px] top-0 bottom-0 w-px bg-gray-300" />

            {/* Intro */}
            <div className="relative pl-10 lg:pl-10">
              {/* Dot - visible on all screens */}
              <span className="rounded-full z-10 " />
              <p className="font-poppins text-[14px] md:text-[16px] leading-relaxed font-light">
                Mangalya Novena Greens is aware that amenities that actually
                enhance your daily life are what define true luxury, not
                ostentatious features. The project provides:
              </p>
            </div>

            {/* Section 1 */}
            <div className="relative pl-10 lg:pl-10">
              {/* Dot */}
              {/* <span className="absolute -left-[26px] lg:-left-[26px] top-1 w-3 h-3 bg-green-600 rounded-full z-10" /> */}
              <span className="absolute left-2 lg:-left-[26px] top-1 w-3 h-3 bg-green-600 rounded-full z-10" />
              <h4 className="font-poppins font-medium text-[20px] md:text-[25px] mb-2 text-black">
                For Wellbeing &amp; Health:
              </h4>
              <ul className="list-disc pl-5 space-y-1 font-poppins text-[14px] md:text-[16px] leading-relaxed font-light">
                <li>A contemporary pool for year-round exercise</li>
                <li>Modern equipment in a well-equipped gymnasium</li>
                <li>
                  A designated running track encircled by beautifully designed
                  gardens
                </li>
                <li>Basketball and badminton courts for sports fans</li>
                <li>A skating rink suitable for both kids and adults</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="relative pl-10 lg:pl-10">
              <span className="absolute left-2 lg:-left-[26px] top-1 w-3 h-3 bg-green-600 rounded-full z-10" />

              <h4 className="font-poppins font-medium text-[20px] md:text-[25px] mb-2 text-black">
                For Recreation &amp; Community:
              </h4>
              <ul className="list-disc pl-5 space-y-1 font-poppins text-[14px] md:text-[16px] leading-relaxed font-light">
                <li>Large clubhouse for parties and activities</li>
                <li>A multipurpose venue for festivities</li>
                <li>A play area for kids created with safety in mind</li>
                <li>Beautifully designed gardens ideal for evening walks</li>
                <li>Amphitheatre for neighbourhood gatherings</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="relative pl-10 lg:pl-10">
              <span className="absolute left-2 lg:-left-[26px] top-1 w-3 h-3 bg-green-600 rounded-full z-10" />

              <h4 className="font-poppins font-medium text-[20px] md:text-[25px] mb-2 text-black">
                For Convenience &amp; Safety:
              </h4>
              <ul className="list-disc pl-5 space-y-1 font-poppins text-[14px] md:text-[16px] leading-relaxed font-light">
                <li>CCTV surveillance and round-the-clock security</li>
                <li>Every home has an intercom system</li>
                <li>The complex's fire safety systems</li>
                <li>Residents' covered parking</li>
                <li>Every tower has high-speed lifts</li>
                <li>Harvesting rainwater for sustainability</li>
                <li>24-hour backup power and water supply</li>
                <li>RO water system to guarantee potable water quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
