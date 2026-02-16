// "use client";

// import Image from "next/image";

// export default function CSRInitiatives() {
//   return (
//     <section className="w-full bg-white py-20 px-4">
//       <div className="max-w-6xl mx-auto relative">
//         {/* Heading */}
//         {/* <h2 className="font-handwritten text-4xl md:text-5xl lg:text-[60px] text-shadow-lg text-bold text-gray-800 mb-12">
//           CSR Initiatives & Impact Areas
//         </h2> */}

//         {/* Heading */}
//         <div className="relative mb-12">
//           {/* Decorative Image */}
//           <div className="absolute -top-42 -left-25 w-20 md:w-28 lg:w-60 opacity-80">
//             <Image
//               src="/crs-activity/leaf-a.png"
//               alt="decorative"
//               width={150}
//               height={150}
//               className="w-full h-auto object-contain"
//             />
//           </div>

//           {/* <h2 className="font-handwritten text-4xl md:text-5xl lg:text-[60px] text-gray-800 mb-6 text-shadow-lg text-bold"> */}
//           <h2 className="font-handwritten text-4xl md:text-5xl lg:text-[60px] text-gray-800 mb-6 text-shadow-lg font-bold">
//             CSR Initiatives & Impact Areas
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Card 1 */}
//           <div className="bg-[#e6f4ee]">
//             <div className="bg-[#fde2e1] px-6 py-4">
//               <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
//                 Education & Empowerment
//               </h3>
//             </div>

//             <div className="px-6 py-6 font-poppins text-sm text-gray-700 space-y-3">
//               <ul className="list-disc list-inside space-y-1">
//                 <li>Scholarships for underprivileged students</li>
//                 <li>School accessories & digital learning support</li>
//                 <li>Career guidance & skill development workshops</li>
//               </ul>

//               <div>
//                 <p className="font-semibold mt-4">Impact:</p>
//                 <p>
//                   Greater access to quality education and future opportunities.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-[#e6f4ee]">
//             <div className="bg-[#fde2e1] px-6 py-4">
//               <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
//                 Healthcare & Well-Being
//               </h3>
//             </div>

//             <div className="px-6 py-6 font-poppins text-sm text-gray-700 space-y-3">
//               <ul className="list-disc list-inside space-y-1">
//                 <li>Free health check-up camps</li>
//                 <li>Blood donation drives</li>
//                 <li>Women’s health awareness programs</li>
//                 <li>Sanitation and hygiene awareness</li>
//               </ul>

//               <div>
//                 <p className="font-semibold mt-4">Impact:</p>
//                 <p>
//                   Improved wellness, reduced health disparities, and stronger
//                   support systems.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-[#e6f4ee]">
//             <div className="bg-[#fde2e1] px-6 py-4">
//               <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
//                 Environment & Sustainability
//               </h3>
//             </div>

//             <div className="px-6 py-6 font-poppins text-sm text-gray-700 space-y-3">
//               <ul className="list-disc list-inside space-y-1">
//                 <li>Tree plantation drives</li>
//                 <li>Rainwater harvesting awareness</li>
//                 <li>Waste management & plastic-free initiatives</li>
//                 <li>Green living campaigns in neighborhoods</li>
//               </ul>

//               <div>
//                 <p className="font-semibold mt-4">Impact:</p>
//                 <p>
//                   Reduced environmental impact and promotion of sustainable
//                   living.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-[#e6f4ee]">
//             <div className="bg-[#fde2e1] px-6 py-4">
//               <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
//                 Community Development & Inclusion
//               </h3>
//             </div>

//             <div className="px-6 py-6 font-poppins text-sm text-gray-700 space-y-3">
//               <ul className="list-disc list-inside space-y-1">
//                 <li>
//                   Support for senior citizens & differently-abled individuals
//                 </li>
//                 <li>Local community events</li>
//                 <li>Public amenity development</li>
//                 <li>Skill building & livelihood programs</li>
//               </ul>

//               <div>
//                 <p className="font-semibold mt-4">Impact:</p>
//                 <p>Inclusive growth and empowered communities.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function CSRInitiatives() {
  return (
    <section className="w-full bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="relative mb-2">
          {/* Decorative Image - FIXED */}
          <div className="absolute -top-12 md:-top-28 -left-5 md:-left-15 w-16 md:w-28 lg:w-40 opacity-100 pointer-events-none">
            <Image
              src="/crs-activity/leaf-a.png"
              alt="decorative"
              width={150}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>

          <h2 className="font-handwritten text-4xl md:text-5xl lg:text-[60px] text-gray-800 mb-6 text-shadow-lg font-bold relative z-10">
            CSR Initiatives & Impact Areas
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-[#e6f4ee]">
            <div className="bg-[#fde2e1] px-6 py-4">
              <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
                Education & Empowerment
              </h3>
            </div>

            <div className="px-6 py-6 font-poppins text-[15px] text-[#3F3F3F] space-y-3">
              <ul className="list-disc list-inside space-y-1">
                <li>Scholarships for underprivileged students</li>
                <li>School accessories & digital learning support</li>
                <li>Career guidance & skill development workshops</li>
              </ul>

              <div>
                <p className="font-semibold mt-4">Impact:</p>
                <p>
                  Greater access to quality education and future opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#e6f4ee]">
            <div className="bg-[#fde2e1] px-6 py-4">
              <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
                Healthcare & Well-Being
              </h3>
            </div>

            <div className="px-6 py-6 font-poppins text-[15px] text-[#3F3F3F] space-y-3">
              <ul className="list-disc list-inside space-y-1">
                <li>Free health check-up camps</li>
                <li>Blood donation drives</li>
                <li>Women’s health awareness programs</li>
                <li>Sanitation and hygiene awareness</li>
              </ul>

              <div>
                <p className="font-semibold mt-4">Impact:</p>
                <p>
                  Improved wellness, reduced health disparities, and stronger
                  support systems.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#e6f4ee]">
            <div className="bg-[#fde2e1] px-6 py-4">
              <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
                Environment & Sustainability
              </h3>
            </div>

            <div className="px-6 py-6 font-poppins text-[15px] text-[#3F3F3F] space-y-3">
              <ul className="list-disc list-inside space-y-1">
                <li>Tree plantation drives</li>
                <li>Rainwater harvesting awareness</li>
                <li>Waste management & plastic-free initiatives</li>
                <li>Green living campaigns in neighborhoods</li>
              </ul>

              <div>
                <p className="font-semibold mt-4">Impact:</p>
                <p>
                  Reduced environmental impact and promotion of sustainable
                  living.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#e6f4ee]">
            <div className="bg-[#fde2e1] px-6 py-4">
              <h3 className="font-poppins font-semibold text-[20px] text-gray-800 text-center">
                Community Development & Inclusion
              </h3>
            </div>

            <div className="px-6 py-6 font-poppins text-[15px] text-[#3F3F3F] space-y-3">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Support for senior citizens & differently-abled individuals
                </li>
                <li>Local community events</li>
                <li>Public amenity development</li>
                <li>Skill building & livelihood programs</li>
              </ul>

              <div>
                <p className="font-semibold mt-4">Impact:</p>
                <p>Inclusive growth and empowered communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
