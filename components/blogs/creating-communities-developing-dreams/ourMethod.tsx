"use client";
export default function OurMethod() {
  const methods = [
    { number: "1", title: "Clever, well-considered layouts" },
    { number: "2", title: "High requirements for the quality of construction" },
    { number: "3", title: "Seamless integration of lifestyle amenities" },
    { number: "4", title: "An emphasis on homeowners' long-term value" },
  ];
  return (
    <section className="w-full bg-[#292929] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins text-[24px] md:text-[34px] lg:text-[40px] leading-[128%] text-[#FFFFFF] py-6 relative inline-block">
            OUR METHOD
            {/* Leaf */}
            <span className="absolute -top-6 md:-top-8 right-[-52px] md:right-[-65px] w-20 md:w-25 pointer-events-none inline-block">
              <img
                src="/about-us/leaf.png"
                alt="Leaf"
                className="w-full h-auto object-contain"
              />
            </span>
          </h2>

          <p className="font-poppins text-[12px] md:text-[16px] lg:text-[18px] leading-[128%] font-light text-white max-w-[934px] mx-auto">
            Every project at Mangalya Group is the result of a dedication to
            quality in community planning, construction, and design. Whether
            it's an investment property or a first residence, <br />
            we guarantee:
          </p>
        </div>
        {/* Circles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-8 md:gap-10 lg:gap-0 max-w-5xl mx-auto">
          {methods.map((method, index) => (
            <div key={index} className="flex justify-center w-full">
              <div className="relative w-48 h-48 md:w-40 md:h-40 lg:w-44 lg:h-44 flex items-center justify-center">
                {/* Dotted Circle */}
                <div className="absolute inset-0 rounded-full border-2 border-[#B3B3B3]" />
                {/* Number Badge (positioned on the dotted border - top right) */}
                <div className="absolute -top-3 left-1/2 translate-x-4 md:translate-x-5 lg:translate-x-6 z-10">
                  <div className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#008854] flex items-center justify-center shadow-[0_0_0_3px_#292929]">
                    <span className="text-white font-bold text-base md:text-base lg:text-lg">
                      {method.number}
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="text-center px-4">
                  <p className="font-poppins text-[15px] md:text-[15px] lg:text-[16px] leading-[128%] font-light text-white">
                    {method.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
