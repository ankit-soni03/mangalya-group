"use client";

const properties = [
  {
    id: 1,
    name: "Mangalya Novena Green",
    description: "Aim to make your living truly spectacular.",
    image: "/top-performing1.png",
    logo: "/Noveena-Logo.png",
    reraNo: "UPRERAPRJ8646",
    link: "/projects/mangalya-novena-green",
  },
  {
    id: 2,
    name: "Mangalya Ophira",
    description: "Redefining Affordable Luxury Living",
    image: "/top-performing2.png",
    logo: "/ophira logo.png",
    reraNo: "UPRERAPRJ6418",
    link: "/projects/mangalya-ophira",
  },
  {
    id: 3,
    name: "Mangalya Anant",
    description: "Designed for Peaceful, Premium Living",
    image: "/top-performing3.png",
    logo: "/Mangalya-Group-logo.png",
    reraNo: "UPRERAPRJ4306",
    link: "/projects/mangalya-anant",
  },
];

export function TopProperties() {
  return (
    <section className="py-6 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
      {/* Section Header */}
      <div className="text-center mb-5 md:mb-10">
        {/* TOP-PERFORMING */}
        <h2 className="text-[30px] md:text-[60px] font-bold text-black uppercase font-['Quattrocento_Sans']">
          TOP-PERFORMING
        </h2>

        {/* Properties with decorative brackets */}
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-18">
          {/* Left bracket */}
          <img
            src="/arrow-line-left.png"
            alt=""
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain opacity-70"
          />

          <h3 className="text-[35px] md:text-[60px] text-black font-handwritten font-bold leading-none">
            Properties
          </h3>

          {/* Right bracket */}
          <img
            src="/arrow-line-right.png"
            alt=""
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain opacity-70"
          />
        </div>
      </div>

      {/* Properties Grid - 3 Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {properties.map((property) => (
            <a
              key={property.id}
              href={property.link}
              className="relative block overflow-hidden group cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl h-[420px] md:h-[450px] lg:h-[480px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Logo - Top Right */}
              <div className="absolute top-4 right-4 md:top-5 md:right-5 lg:top-6 lg:right-6">
                <img
                  src={property.logo}
                  alt="Logo"
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-lg"
                />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-7">
                <div className="flex items-end justify-between">
                  {/* Left Content */}
                  <div className="flex-1">
                    {/* Property Name */}
                    <h4 className="text-white text-xl md:text-2xl lg:text-[26px] font-semibold mb-2 leading-tight font-['Quattrocento_Sans']">
                      {property.name}
                    </h4>

                    {/* Description */}
                    <p className="text-white text-sm md:text-base lg:text-[17px] mb-3 md:mb-4 leading-relaxed font-['Poppins'] font-light">
                      {property.description}
                    </p>

                    {/* RERA Number Box */}
                    <div className="inline-flex items-center bg-[#008854] px-3 py-1.5 md:px-4 md:py-2">
                      <span className="text-white text-xs md:text-sm font-medium font-['Poppins']">
                        Rera No.
                      </span>
                      <span className="text-white text-xs md:text-sm font-semibold ml-2 font-['Poppins']">
                        {property.reraNo}
                      </span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                    <img
                      src="/arrows 4.png"
                      alt="Arrow"
                      className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 object-contain"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopProperties;
