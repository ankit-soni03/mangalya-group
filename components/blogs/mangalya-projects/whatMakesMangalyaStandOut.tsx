export default function WhatMakesMangalyaStandOut() {
  const items = [
    {
      title: "No Overpromising",
      desc:
        "While other developers promise 100 amenities, Mangalya promises 20 amenities that will actually work.",
      variant: "dark",
    },
    {
      title: "Customer-First, Not Sales-First",
      desc:
        "At Mangalya Group, sales conversations feel more like guided walkthroughs. The focus is on clarity, not urgency—because the product itself does the talking.",
      variant: "green",
    },
    {
      title: "Timely Possession Track Record",
      desc:
        "In an industry known for delays, the record of timely possession (or near-timely) is a standout factor. Instead of accepting the 'delay norm', Mangalya has delivered homes more than any marketing brochure.",
      variant: "dark",
    },
    {
      title: "Sustainability Beyond Compliance",
      desc:
        "Rainwater harvesting systems and energy-efficient layouts are more than just RERA requirements—they're about building communities that will be relevant in 30 years.",
      variant: "green",
    },
    {
      title: "Spanish Architecture That Works",
      desc:
        "While other projects are content to replicate international architecture, Spanish-inspired designs at Mangalya are adapted to suit the Indian climate, lifestyle, and preferences.",
      variant: "dark",
    },
  ];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-[28px] md:text-[32px] lg:text-[36px] font-semibold mb-12 leading-tight">
          What Makes Mangalya Stand Out from <br className="hidden md:block" />
          the Rest
        </h2>

        {/* Desktop Layout - Horizontal Line Through Cards */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Thick horizontal line - full width */}
            <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-black transform -translate-y-1/2 z-0"></div>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-5 gap-5 relative z-10">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 ${
                    item.variant === "green"
                      ? "bg-[#0a8a5a] text-white"
                      : "bg-black text-white"
                  }`}
                >
                  <h4 className="font-semibold text-[15px] mb-3 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed opacity-90">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical Line with Square Connectors & Gaps */}
        <div className="lg:hidden">
          <div className="relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-[3px] bg-black"></div>
            
            {/* Cards Stack with Gaps */}
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="relative">
                  {/* Square connector positioned at card's vertical center */}
                  <div className="absolute -left-[29px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-black transform rotate-45 z-10"></div>
                  
                  {/* Card */}
                  <div
                    className={`p-6 ${
                      item.variant === "green"
                        ? "bg-[#0a8a5a] text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    <h4 className="font-semibold text-[15px] mb-3 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}