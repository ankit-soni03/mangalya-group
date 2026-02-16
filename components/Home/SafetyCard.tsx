import React from 'react';

const DottedSafetyCard = ({ title, description }) => {
  return (
    <div className="relative w-full max-w-md p-8 bg-[#121212] text-white rounded-xl overflow-hidden">
      {/* SVG Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Smooth Rounded Dotted Line with rounded corners */}
        <path
          d="M 50,80 
             C 50,80 110,80 110,80 
             L 110,40 
             C 110,30 110,30 120,30 
             L 360,30 
             C 370,30 370,30 370,40 
             L 370,160 
             C 370,170 370,170 360,170 
             L 40,170 
             C 30,170 30,170 30,160 
             L 30,80 
             C 30,80 50,80 50,80 Z"
          stroke="#4b5563"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 pl-20 pt-2">
        {/* Icon */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#008542] rounded-full flex items-center justify-center border-[6px] border-[#121212] shadow-xl">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight uppercase">
            {title || "Safety & Reliability"}
          </h2>
          
          {/* Thin Divider Line */}
          <div className="w-full h-[1px] bg-gray-800 my-5" />

          <p className="text-gray-400 text-sm leading-relaxed font-light">
            {description || "Earthquake-resistant structural design with comprehensive fire-safety planning ensures enhanced safety."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DottedSafetyCard;