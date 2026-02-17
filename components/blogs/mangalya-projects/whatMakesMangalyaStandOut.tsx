export default function WhatMakesMangalyaStandOut() {
  const items = [
    {
      title: "No Overpromising",
      desc: "While other developers promise 100 amenities, Mangalya promises 20 amenities that will actually work.",
      variant: "dark",
    },
    {
      title: "Customer-First, Not Sales-First",
      desc: "At Mangalya Group, sales conversations feel more like guided walkthroughs. The focus is on clarity, not urgency—because the product itself does the talking.",
      variant: "green",
    },
    {
      title: "Timely Possession Track Record",
      desc: "In an industry known for delays, the record of timely possession (or near-timely) is a standout factor. Instead of accepting the 'delay norm', Mangalya has delivered homes more than any marketing brochure.",
      variant: "dark",
    },
    {
      title: "Sustainability Beyond Compliance",
      desc: "Rainwater harvesting systems and energy-efficient layouts are more than just RERA requirements—they're about building communities that will be relevant in 30 years.",
      variant: "green",
    },
    {
      title: "Spanish Architecture That Works",
      desc: "While other projects are content to replicate international architecture, Spanish-inspired designs at Mangalya are adapted to suit the Indian climate, lifestyle, and preferences.",
      variant: "dark",
    },
  ];
  return (
    <section className="pt-14 md:pb-25 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto md:px-4 px-2">
        {/* Heading */}
        <h2 className="font-poppins text-center text-[22px] md:text-[30px] font-medium  mb-8 md:mb-12 leading-tight">
          What Makes Mangalya Stand Out from <br className="hidden md:block" />
          the Rest
        </h2>

        {/* Desktop Layout - Horizontal Line Through Cards */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Thick horizontal line - full viewport width */}
            <div className="absolute top-1/2 left-[-100vw] right-[-100vw] h-[25px] bg-black transform -translate-y-1/2 z-0"></div>

            {/* Cards Grid */}
            <div className="grid grid-cols-5 gap-5 relative z-10">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 ${
                    item.variant === "green"
                      ? "bg-[#0a8a5a] text-white"
                      : "bg-black text-white"
                  }`}
                >
                  <h4 className="font-semibold text-[16px] mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[12px] font-light font-poppins leading-relaxed opacity-90">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical Line with Square Connectors & Gaps */}

        <div className="lg:hidden">
          <div className="relative flex flex-col items-center">
            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-0 w-[20px] bg-black"></div>

            {/* Cards */}
            <div className="relative z-10 w-full px-6">
              {items.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Top Connector */}
                  <div className="w-[20px] h-[10px] bg-black"></div>

                  {/* Card */}
                  <div
                    className={`w-full p-5 ${
                      item.variant === "green"
                        ? "bg-[#0a8a5a] text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    <h4 className="font-semibold font-poppins text-[16px] mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[12px] font-light font-poppins leading-relaxed opacity-90">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Connector */}
                  <div className="w-[20px] h-[10px] bg-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
