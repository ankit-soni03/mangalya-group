// "use client";

// import Image from "next/image";

// export function HeroSection() {
//   return (
//     <section className="w-full p-0 sm:p-5">
//       <div className="relative w-full">

//         {/* DESKTOP IMAGE */}
//         <div className="hidden sm:block">
//           <Image
//             src="/hero-img-web.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto"
//           />
//         </div>

//         {/* MOBILE IMAGE */}
//         <div className="block sm:hidden h-screen">
//           <Image
//             src="/hero-img-mobile.png"
//             alt="Hero Mobile"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";

// export function HeroSection() {
//   return (
//     <section className="w-full p-0 sm:p-5">
//       <div className="relative w-full">
//          {/* DESKTOP IMAGE */}
//         <div className="hidden sm:block">
//           <Image
//             src="/homeImg.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto"
//           />
//         </div>

//         {/* MOBILE IMAGE */}
//         <div className="block sm:hidden h-screen">
//           <Image
//             src="/hero-img-mobile.png"
//             alt="Hero Mobile"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//          {/* Content */}
//          <div className="relative z-10 flex flex-col justify-center items-end px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 w-full h-full">

//            {/* Heading */}
//            <h1
//              className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-right text-white leading-tight mb-8 drop-shadow-2xl italic"
//              style={{
//                fontFamily:
//                  "'Playfair Display', 'Times New Roman', Georgia, serif",
//              }}
//            >
//              Homes crafted for comfort.
//              <br />
//              Built for pride.
//            </h1>

//            {/* CTA */}
//            <button className="px-10 py-4 bg-black text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
//              Enquire Now
//            </button>
//          </div>
//        </div>
//      </section>
//    );
//  }

// "use client";
// import Image from "next/image";

// export function HeroSection() {
//   return (
//     <section className="w-full p-0 sm:p-5">
//       <div className="relative w-full h-screen sm:h-auto overflow-hidden">
//         {/* IMAGES */}
//         <div className="hidden sm:block relative w-full">
//           <Image
//             src="/homeImg.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <div className="block sm:hidden absolute inset-0">
//           <Image
//             src="/hero-img-mobile.png"
//             alt="Hero Mobile"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />

//         {/* Content - MAXIMIZED RIGHT ALIGNMENT */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-2 sm:pr-6 md:pr-10 lg:pr-12 text-right">
//           {/* Heading */}
//           <h1
//             className="text-4xl md:text-5xl lg:text-6xl xl:text-[56px] text-white font-light leading-[1.1] mb-4 drop-shadow-2xl"
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
//             }}
//           >
//             Homes crafted for comfort.
//             <br />
//             Built for pride.
//           </h1>

//           {/* CTA */}
//           <button className="px-14 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl">
//             Enquire Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export function HeroSection() {
//   return (
//     <section className="w-full p-0 sm:p-5">
//       <div className="relative w-full h-screen sm:h-auto overflow-hidden">

//         {/* IMAGES */}
//         <div className="hidden sm:block relative w-full">
//           <Image
//             src="/homeImg.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <div className="block sm:hidden absolute inset-0">
//           <Image
//             src="/hero-img-mobile.png"
//             alt="Hero Mobile"
//             fill
//             priority
//             className="object-cover hv-[85vh]"
//           />
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30 sm:bg-transparent" />

//         {/* Content - PINNED TO EXTREME RIGHT */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-4 sm:pr-10 md:pr-16 lg:pr-20 text-right">

//           {/* Animated Text Wrapper */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="flex flex-col items-end"
//           >
//             {/* Heading */}
//             <h1
//               className="text-4xl md:text-5xl lg:text-6xl xl:text-[56px] text-white font-light leading-[1.1] mb-6 drop-shadow-2xl"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 textShadow: "2px 4px 20px rgba(0,0,0,0.6)",
//               }}
//             >
//               Homes crafted for comfort.
//               <br />
//               Built for pride.
//             </h1>

//             {/* CTA Button with Link */}
//             <Link href="/contact">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-14 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl border border-white/10"
//               >
//                 Enquire Now
//               </motion.button>
//             </Link>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export function HeroSection() {
//   return (
//     <section className="w-full p-0 sm:p-5">
//       {/* Container height set to 85vh on mobile, auto on desktop */}
//       <div className="relative w-full h-[85vh] sm:h-auto overflow-hidden">

//         {/* IMAGES */}
//         <div className="hidden sm:block relative w-full">
//           <Image
//             src="/homeImg.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto object-cover"
//           />
//         </div>

//         {/* Mobile Image: fill ensures it covers the 85vh height */}
//         <div className="block sm:hidden absolute inset-0">
//           <Image
//             src="/hero-img-mobile.png"
//             alt="Hero Mobile"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30 sm:bg-transparent" />

//         {/* Content - PINNED TO EXTREME RIGHT */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-5 sm:pr-10 md:pr-16 lg:pr-20 text-right">

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="flex flex-col items-end"
//           >
//             {/* Heading */}
//             <h1
//               className="text-3xl md:text-5xl lg:text-6xl xl:text-[56px] text-white font-light leading-[1.2] mb-6 drop-shadow-2xl"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 textShadow: "2px 4px 15px rgba(0,0,0,0.7)",
//               }}
//             >
//               Homes crafted for comfort.
//               <br />
//               Built for pride.
//             </h1>

//             {/* CTA Button */}
//             <Link href="/contact">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-10 py-4 bg-black text-white text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl border border-white/10"
//               >
//                 Enquire Now
//               </motion.button>
//             </Link>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";

// export function HeroSection() {
//   return (
//     <section className="w-full p-0 sm:p-5">
//       <div className="relative w-full h-[85vh] sm:h-auto overflow-hidden">
//         {/* IMAGES */}
//         <div className="hidden sm:block relative w-full">
//           <Image
//             src="/homeImg.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <div className="block sm:hidden absolute inset-0">
//           <Image
//             src="/hero-img-mobile.png"
//             alt="Hero Mobile"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20 sm:bg-transparent" />

//         {/* Content - MAXIMIZED RIGHT ALIGNMENT */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-2 sm:pr-6 md:pr-10 lg:pr-12 text-right">
//           {/* Heading */}
//           <h1
//             className="text-4xl md:text-5xl lg:text-6xl xl:text-[56px] text-white font-light leading-[1.1] mb-4 drop-shadow-2xl"
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
//             }}
//           >
//             Homes crafted for comfort.
//             <br />
//             Built for pride.
//           </h1>

//           {/* CTA */}
//           <button className="px-14 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl">
//             Enquire Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export function HeroSection() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <section className="w-full p-0 sm:p-5">
//       <style>{`
//         /* Enhanced Mobile-only Animations */
//         @media (max-width: 640px) {
//           @keyframes fadeInScaleUp {
//             0% {
//               opacity: 0;
//               transform: scale(0.95);
//             }
//             60% {
//               opacity: 1;
//               transform: scale(1.02);
//             }
//             100% {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }

//           @keyframes gradientShift {
//             0% {
//               background-position: 0% 50%;
//             }
//             50% {
//               background-position: 100% 50%;
//             }
//             100% {
//               background-position: 0% 50%;
//             }
//           }

//           @keyframes floatUp {
//             0% {
//               opacity: 0;
//               transform: translateY(30px) rotateX(20deg);
//             }
//             70% {
//               opacity: 1;
//               transform: translateY(-5px) rotateX(0deg);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0) rotateX(0deg);
//             }
//           }

//           @keyframes shimmer {
//             0% {
//               background-position: -200% center;
//             }
//             100% {
//               background-position: 200% center;
//             }
//           }

//           .hero-heading {
//             animation: ${isLoaded ? "fadeInScaleUp 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" : "none"};
//             opacity: ${isLoaded ? "0" : "0"};
//             transform-origin: center;
//           }

//           .hero-button {
//             animation: ${isLoaded ? "floatUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards" : "none"};
//             opacity: ${isLoaded ? "0" : "0"};
//             position: relative;
//             overflow: hidden;
//           }

//           .hero-button::after {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(
//               90deg,
//               transparent,
//               rgba(255, 255, 255, 0.2),
//               transparent
//             );
//             animation: ${isLoaded ? "shimmer 3s ease-in-out 1.8s infinite" : "none"};
//           }

//           /* Enhanced background animation for mobile */
//           .mobile-bg-overlay {
//             animation: ${isLoaded ? "gradientShift 8s ease infinite" : "none"};
//             background: linear-gradient(
//               45deg,
//               rgba(0, 0, 0, 0.4),
//               rgba(0, 0, 0, 0.2),
//               rgba(0, 0, 0, 0.4)
//             );
//             background-size: 200% 200%;
//           }
//         }

//         /* Desktop hover effects */
//         @media (min-width: 641px) {
//           .hero-button {
//             transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//           }

//           .hero-button:hover {
//             transform: translateY(-3px);
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
//           }

//           .arrow-icon {
//             transition: transform 0.3s ease;
//           }

//           .hero-button:hover .arrow-icon {
//             transform: translateX(6px) scale(1.2);
//           }
//         }

//         .hero-button {
//           transition: all 0.3s ease;
//           backdrop-filter: blur(4px);
//         }

//         .arrow-icon {
//           display: inline-block;
//           margin-left: 10px;
//           transition: all 0.3s ease;
//         }
//       `}</style>

//       <div className="relative w-full h-[85vh] sm:h-auto overflow-hidden">
//         {/* IMAGES */}
//         <div className="hidden sm:block relative w-full">
//           <Image
//             src="/homeImg.png"
//             alt="Hero Desktop"
//             width={1920}
//             height={1080}
//             priority
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <div className="block sm:hidden absolute inset-0">
//           <Image
//             src="/hero-img-mobile.png"
//             alt="Hero Mobile"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />
//         </div>

//         {/* Enhanced Overlay - Mobile-only gradient animation */}
//         <div className="absolute inset-0 bg-black/20 sm:bg-transparent mobile-bg-overlay" />

//         {/* Content */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-end px-4 sm:px-6 md:px-10 lg:px-12 text-right">
//           {/* Heading with responsive font sizes */}
//           <h1
//             className="hero-heading text-white font-light leading-tight mb-6 sm:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               textShadow: "2px 4px 20px rgba(0,0,0,0.7)",
//             }}
//           >
//             <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
//               Homes crafted for comfort.
//             </span>
//             <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] mt-2 sm:mt-3 md:mt-4">
//               Built for pride.
//             </span>
//           </h1>

//           {/* CTA Button with Link */}
//           <Link href="http://localhost:3000/contact" className="inline-block">
//             <button className="hero-button px-8 sm:px-12 md:px-14 py-3 sm:py-4 bg-black text-white text-xs sm:text-sm md:text-base tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl border-2 border-white/20 hover:border-white">
//               Enquire Now
//               <span className="arrow-icon">→</span>
//             </button>
//           </Link>

//           {/* Mobile-only decorative elements */}
//           <div className="block sm:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 text-sm animate-pulse">
//             Scroll to explore
//             <div className="w-px h-6 bg-white/40 mx-auto mt-2 animate-bounce" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";
import Image from "next/image"; 
import { useEffect, useState } from "react";
 
export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return ( 
    <section className="w-full p-0 sm:p-5">
      <style>{`
        @keyframes bounceInDown {
          0% {
            opacity: 0;
            transform: translate3d(0, -100px, 0);
          }
          60% {
            opacity: 1;
            transform: translate3d(0, 10px, 0);
          }
          80% {
            transform: translate3d(0, -5px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideUpBounce {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          60% {
            opacity: 1;
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
        }

        @keyframes arrowSlide {
          0% {
            transform: translateX(-8px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Mobile only animations */
        @media (max-width: 640px) {
          .hero-badges {
            animation: ${isLoaded ? "fadeIn 0.8s ease-out forwards" : "none"};
          }

          .hero-heading {
            animation: ${isLoaded ? "fadeIn 1s ease-out 0.3s forwards" : "none"};
            opacity: ${isLoaded ? "1" : "0"};
          }

          .hero-button {
            animation: ${isLoaded ? "slideUpBounce 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s forwards" : "none"};
            opacity: ${isLoaded ? "1" : "0"};
          }

          .hero-button:hover .arrow-icon {
            transform: translateX(4px);
          }
        }

        .hero-button {
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          transform: translateY(-2px);
        }

        .arrow-icon {
          display: inline-block;
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .hero-button:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>

      <div className="relative w-full h-[85vh] sm:h-auto overflow-hidden"> 
        {/* IMAGES */} 
        <div className="hidden sm:block relative w-full"> 
          <Image 
            src="/homeImg.png" 
            alt="Hero Desktop" 
            width={1920} 
            height={1080} 
            priority 
            className="w-full h-auto object-cover" 
          /> 
        </div> 
        <div className="block sm:hidden absolute inset-0"> 
          <Image 
            src="/hero-img-mobile.png" 
            alt="Hero Mobile" 
            fill 
            priority 
            className="object-cover" 
          /> 
        </div> 
 
        {/* Overlay */} 
        <div className="absolute inset-0 bg-black/20 sm:bg-transparent" /> 
 
        {/* Content - MAXIMIZED RIGHT ALIGNMENT */} 
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-end pr-2 sm:pr-6 md:pr-10 lg:pr-12 text-right">
          {/* Badges */}
          <div className="hero-badges flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-8 flex-wrap justify-end">
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
              2-3 BHK
            </span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
              YOGA CENTER
            </span>
            <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm rounded-full border border-white/30">
              LUXURY FEELS
            </span>
          </div>

          {/* Heading */} 
          <h1 
            className="hero-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] text-white font-light leading-[1.1] mb-4 sm:mb-8 drop-shadow-2xl" 
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              textShadow: "2px 4px 20px rgba(0,0,0,0.5)", 
            }} 
          > 
            Homes crafted for comfort. 
            <br /> 
            Built for pride. 
          </h1> 
 
          {/* CTA */} 
          <button className="hero-button px-8 sm:px-14 py-3 sm:py-4 bg-black text-white text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"> 
            Enquire Now
            <span className="arrow-icon">→</span>
          </button> 
        </div> 
      </div> 
    </section> 
  ); 
}