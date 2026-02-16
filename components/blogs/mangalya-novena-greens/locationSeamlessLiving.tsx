"use client";
import Image from "next/image";

export default function LocationSeamlessLiving() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-[25px] md:text-[30px] font-medium mb-4">
            A Location Designed for Seamless Living
          </h2>
          <p className="font-poppins font-light text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
            Mangalya Novena Greens’ advantageous location at Plot No. CP-GH-5B,
            Tech Zone–IV, is one of its main advantages. The project preserves a
            tranquil, pollution-free environment while providing easy access to
            significant landmarks.
          </p>
        </div>

        {/* Image Panel */}
        <div className="relative w-full overflow-hidden">
          {/* ✅ Desktop Image */}
          <div className="hidden md:block relative w-full h-[320px]">
            <Image
              src="/blogs/mangalya-novena-greens/img-3.png"
              alt="Location Overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* ✅ Mobile Image */}
          <div className="block md:hidden relative w-full h-[480px]">
            <Image
              src="/blogs/mangalya-novena-greens/info-bg.png"
              alt="Location Overview Mobile"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div
              className="w-full max-w-6xl mx-auto px-5 md:px-6 
                            grid grid-cols-1 md:grid-cols-2 
                            gap-8 text-white font-poppins"
            >
              {/* Left */}
              <div>
                <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
                  Healthcare Facilities
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-[14px] md:text-[16px] text-gray-100">
                  <li>Fortis Hospital Noida – 10 minutes away</li>
                  <li>Nearby multi-specialty hospitals</li>
                  <li>24×7 clinics & diagnostics</li>
                  <li>Local pharmacies & medical stores</li>
                  <li>Fast access to emergency care</li>
                </ul>
              </div>

              {/* Right */}
              <div className="mt-6 md:mt-0">
                <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
                  Connectivity
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-[14px] md:text-[16px] text-gray-100">
                  <li>NH-24 close by</li>
                  <li>Metro station at walking distance</li>
                  <li>Noida City Centre – 10 mins</li>
                  <li>FNG Expressway connectivity</li>
                  <li>Malls & entertainment zones nearby</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
