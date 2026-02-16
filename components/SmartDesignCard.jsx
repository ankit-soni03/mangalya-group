// "use client";

// export default function SmartDesignExecution() {
//   return (
//     <div className="wrap bg-[#000000]">
//       {/* SVG BORDER */}
//       <svg
//         viewBox="0 0 700 200"
//         className="border"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="
//             M120 20
//             H640
//             C670 20 680 35 680 60
//             V140
//             C680 165 670 180 640 180
//             H70
//             C50 180 40 165 40 140
//             V80
//             C45 65 50 50 80 50
//             H100
//             C145 30 50 20 200 20
            
//           "
//           fill="none"
//           stroke="rgba(255,255,255,0.55)"
//           strokeWidth="2"
//           strokeDasharray="6 6"
//           strokeLinecap="round"
//         />
//       </svg>

//       {/* ICON */}
//       {/* <div className="icon">
//         💡
//       </div> */}

//       {/* CONTENT */}
//       {/* <div className="content">
//         <h3>Smart Design<br />Execution</h3>
//         <div className="line"></div>
//         <p>
//           Efficient floor plans with smart cores ensure functional layouts
//           for comfortable everyday living.
//         </p>
//       </div> */}

//       <style jsx>{`
//         .wrap {
//           position: relative;
//           width: 100%;
//           max-width: 700px;
//           height: auto;
//           aspect-ratio: 700 / 200;
//           margin: 0 auto;
//         }

//         .border {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .icon {
//           position: absolute;
//           top: 18px;
//           left: 18px;
//           width: 56px;
//           height: 56px;
//           background: #16a463;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 22px;
//           z-index: 2;
//         }

//         .content {
//           position: relative;
//           z-index: 2;
//           padding: 32px 40px 32px 120px;
//           color: #fff;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }

//         h3 {
//           margin: 0;
//           font-size: 22px;
//           line-height: 1.2;
//           font-weight: 600;
//         }

//         .line {
//           width: 70px;
//           height: 2px;
//           background: rgba(255,255,255,0.35);
//           margin: 12px 0;
//         }

//         p {
//           margin: 0;
//           font-size: 14px;
//           color: rgba(255,255,255,0.75);
//           max-width: 460px;
//           line-height: 1.6;
//         }

//         /* Responsive styles */
//         @media (max-width: 768px) {
//           .wrap {
//             aspect-ratio: auto;
//             height: auto;
//             min-height: 180px;
//           }
          
//           .content {
//             padding: 24px 24px 24px 100px;
//           }
          
//           .icon {
//             width: 48px;
//             height: 48px;
//             font-size: 20px;
//             top: 16px;
//             left: 16px;
//           }
          
//           h3 {
//             font-size: 20px;
//           }
          
//           p {
//             font-size: 13px;
//           }
//         }

//         @media (max-width: 480px) {
//           .wrap {
//             min-height: 160px;
//           }
          
//           .content {
//             padding: 20px 20px 20px 90px;
//           }
          
//           .icon {
//             width: 44px;
//             height: 44px;
//             font-size: 18px;
//           }
          
//           h3 {
//             font-size: 18px;
//           }
          
//           .line {
//             width: 60px;
//             margin: 10px 0;
//           }
          
//           p {
//             font-size: 12px;
//             line-height: 1.5;
//           }
//         }

//         @media (max-width: 360px) {
//           .content {
//             padding: 16px 16px 16px 80px;
//           }
          
//           .icon {
//             width: 40px;
//             height: 40px;
//             font-size: 16px;
//           }
          
//           h3 {
//             font-size: 16px;
//           }
          
//           p {
//             font-size: 11px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import React from 'react';

export default function SmartDesignExecution() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] p-10 font-sans">
      <div className="relative w-full max-w-[560px] min-h-[250px] flex items-center">
        
        {/* THE "BUTTERY SMOOTH" DASHED BORDER */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 560 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            /* Path breakdown for maximum smoothness:
               - M 200 25: Start on top edge
               - C (Cubic Bezier): Used for every corner to increase the "sweep"
               - The Notch: A deep, fluid S-curve that eases into the left wall
            */
            d="M 200 25 
               H 500 
               C 530 25, 545 40, 545 70 
               V 180 
               C 545 210, 530 225, 500 225 
               H 60 
               C 30 225, 15 210, 15 180 
               V 130 
               C 15 70, 120 120, 120 25 
               Z" 
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeDasharray="8 10"
            strokeLinecap="round"
          />
        </svg>

        {/* REFINED GREEN ICON CIRCLE */}
        <div className="absolute top-[5px] left-[30px] w-[88px] h-[88px] bg-[#00a651] rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_rgba(0,166,81,0.3)]">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Minimalist Bulb */}
            <path 
              d="M12 3C8.5 3 6 5.5 6 9C6 11.2 7.2 13.1 9 14.2V17C9 17.6 9.4 18 10 18H14C14.6 18 15 17.6 15 17V14.2C16.8 13.1 18 11.2 18 9C18 5.5 15.5 3 12 3Z" 
              stroke="white" strokeWidth="1.5" strokeLinecap="round"
            />
            {/* The Pencil/Lead Tip */}
            <path d="M12 7V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10.5 12L12 14.5L13.5 12H10.5Z" fill="white" />
            <path d="M10 21H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* TEXT CONTENT */}
        <div className="pl-36 pr-12 py-12">
          <h2 className="text-white text-[34px] font-extrabold leading-[1.05] tracking-tight mb-4">
            Smart Design <br /> 
            <span className="text-white/95">Execution</span>
          </h2>
          
          {/* Elegant thin separator */}
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-white/40 to-transparent mb-6"></div>
          
          <p className="text-white/70 text-[17px] leading-relaxed max-w-[360px] font-medium">
            Efficient floor plans with smart cores ensure functional layouts 
            for comfortable everyday living.
          </p>
        </div>
      </div>
    </div>
  );
}