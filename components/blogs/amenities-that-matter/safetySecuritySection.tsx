// "use client";
// import Image from "next/image";

// export default function SafetySecuritySection() {
//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
//           {/* LEFT CONTENT */}
//           <div className="font-poppins">
//             <h2 className="text-[25px] md:text-[35px] font-medium md:mb-4 md:mt-6 leading-snug">
//               Safety and Security: Peace of Mind Matters
//             </h2>

//             <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed md:mt-16 mt-4 max-w-xl">
//               Advanced security features are a top priority for buyers, moving
//               beyond simple security guards to 24/7 CCTV surveillance with
//               mobile app access, biometric access systems, emergency response
//               protocols, and well-lit common areas. Gated communities with
//               controlled access points add another layer of safety assurance.
//               Also, they look for houses designed with safety features: fire
//               suppression systems, construction to bear earthquakes in
//               earthquake-prone places, and proper assembly points and emergency
//               exits.
//             </p>

//             {/* <Link
//               href="/brochure"
//               className="inline-block bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition"
//             >
//               Download Brochure
//             </Link> */}
//           </div>

//           {/* RIGHT IMAGES */}
//           <div className="grid grid-cols-2 gap-4">
            
//             {/* Image 1 */}
//             <div className="relative h-[150px] md:h-[180px] overflow-hidden">
//               <Image
//                 src="/blogs/amenities-that-matter/img1.png"
//                 alt="Security Guard"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Image 2 */}
//             <div className="relative h-[150px] md:h-[180px] overflow-hidden">
//               <Image
//                 src="/blogs/amenities-that-matter/img2.png"
//                 alt="CCTV Camera"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Image 3 */}
//             <div className="relative h-[150px] md:h-[180px] overflow-hidden">
//               <Image
//                 src="/blogs/amenities-that-matter/img3.png"
//                 alt="Fire Safety Pipes"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Image 4 */}
//             <div className="relative h-[150px] md:h-[180px] overflow-hidden">
//               <Image
//                 src="/blogs/amenities-that-matter/img4.png"
//                 alt="Biometric Access"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";

export default function SafetySecuritySection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 order-1 lg:order-2">

            {/* Image 1 */}
            <div className="relative h-[200px] md:h-[180px] overflow-hidden">
              <Image
                src="/blogs/amenities-that-matter/img1.png"
                alt="Security Guard"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative h-[200px] md:h-[180px] overflow-hidden">
              <Image
                src="/blogs/amenities-that-matter/img2.png"
                alt="CCTV Camera"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="relative h-[200px] md:h-[180px] overflow-hidden">
              <Image
                src="/blogs/amenities-that-matter/img3.png"
                alt="Fire Safety Pipes"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 4 */}
            <div className="relative h-[200px] md:h-[180px] overflow-hidden">
              <Image
                src="/blogs/amenities-that-matter/img4.png"
                alt="Biometric Access"
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* LEFT CONTENT */}
          <div className="font-poppins order-2 lg:order-1">
            <h2 className="text-[25px] md:text-[35px] font-medium md:mb-4 md:mt-6 leading-snug">
              Safety and Security: Peace of Mind Matters
            </h2>

            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed md:mt-16 mt-4 max-w-xl">
              Advanced security features are a top priority for buyers, moving
              beyond simple security guards to 24/7 CCTV surveillance with
              mobile app access, biometric access systems, emergency response
              protocols, and well-lit common areas. Gated communities with
              controlled access points add another layer of safety assurance.
              Also, they look for houses designed with safety features: fire
              suppression systems, construction to bear earthquakes in
              earthquake-prone places, and proper assembly points and emergency
              exits.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
