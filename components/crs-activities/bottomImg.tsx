// "use client";

// import Image from "next/image";

// export function BottomImg() {
//   return (
//     <section className="w-full h-auto">
//       <div className="relative w-full">
//         <Image
//           src="/crs-activity/bottomImg1.png"
//           alt="Contact-Us"
//           width={1920}
//           height={1080}
//           priority
//           className="w-full h-auto"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function BottomImg() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/crs-activity/bottomImg1.png"
            alt="Mangalya Project"
            width={1920}
            height={900}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/crs-activity/bottomImg1-mobile.png"
            alt="Mangalya Project Mobile"
            width={800}
            height={1200}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
