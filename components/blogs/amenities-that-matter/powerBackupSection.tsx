"use client";
import Image from "next/image";

export default function PowerBackupSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Image */}
          <div className="relative w-full h-[280px] md:h-[350px] overflow-hidden">
            <Image
              src="/blogs/amenities-that-matter/power-backup-1.png"
              alt="24 Hours Power Backup"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="font-poppins">
            <h2 className="text-[25px] md:text-[35px] font-medium mb-2 md:mb-4">
              24 HOURS POWER BACKUP
            </h2>

            <p className="text-[15px] font-light text-gray-600 leading-relaxed mb-4">
              The Reality Check: It’s 2026, and power outages continue. Your
              child has online exams. You are having a critical office call from
              home. The temperature is 42°C during the hot summer months. Can
              anyone afford a loss of even 5 minutes of electricity?
            </p>

            <p className="text-[25px] font-medium mb-2">Why its Matters:</p>

            <ul className="list-disc font-light pl-5 space-y-2 text-[15px] text-gray-600">
              <li>
                Telecommuting is here to stay and is no longer just a pandemic
                phenomenon
              </li>
              <li>
                Online education and digital learning demand constant
                connectivity
              </li>
              <li>
                Medical equipment in elderly relatives cannot afford to be
                without power
              </li>
              <li>
                Comfort is not a luxury when the thermometer reaches sky-high
                numbers
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 items-start">
          {/* Right Image */}
          <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden order-1 lg:order-2">
            <Image
              src="/blogs/amenities-that-matter/power-backup-2.png"
              alt="Power Generator"
              fill
              className="object-cover"
            />
          </div>

          {/* Left Content */}
          <div className="font-poppins order-2 lg:order-1">
            {/* Tags */}
            <div className="flex gap-2 md:mb-4 mb-1">
              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                Technology
              </span>
              <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                Other Category
              </span>
            </div>

            <h3 className="text-[25px] md:text-[35px] font-medium mb-4">
              What Smart Buyers Look For :
            </h3>

            <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
              At Mangalya projects, 24×7 power backup isn’t an “extra”; it is
              fundamental. Because we understand that in the digital age, power
              isn’t just about lights; it’s about keeping your life running
              smoothly.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-[15px] text-gray-600">
              <li>
                Full Power Backup for Common Areas & Individual Apartments
              </li>
              <li>Power supply for necessary appliances</li>
              <li>Rapid switchover from main to standby sources</li>
              <li>Open communication regarding the backup capacity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
