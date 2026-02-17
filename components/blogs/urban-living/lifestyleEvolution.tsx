"use client";

export default function LifestyleEvolution() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        {/* Mobile View - Stacked Layout */}
        <div className="md:hidden space-y-8">
          {/* Block 1 - Heading */}
          <div className="relative pl-6">
    
            <h3 className="font-poppins text-[25px] font-medium leading-snug">
              Finally, We're Talking Minutes, Not Hours
            </h3>
          </div>

          {/* Block 1 - Content */}
          <div className="pl-6 font-poppins font-light text-[14px] text-gray-600 leading-relaxed">
            <p className="mb-3">
              The Aqua Line extension is not another metro route in the city;
              it is a lifestyle transformation. The 90-minute journey with
              three mode changes, dubious autorickshaw deals, and a plea to
              call the deities in between is now a metro ride.
            </p>

            <p className="text-[#008854] font-medium">
              Noida Sector 51 to Greater Noida in under 30 minutes
            </p>
            <p className="text-[#008854] font-medium">
              Direct connectivity to Blue Line at Noida City Centre
            </p>
          </div>

          {/* Block 2 - Heading */}
          <div className="relative pl-6 mt-8">
            <h3 className="font-poppins text-[25px] md:text-[30px] font-medium leading-snug">
              The Lifestyle Evolution: From Concrete to Community
            </h3>
          </div>

          {/* Block 2 - Content */}
          <div className="pl-6 font-poppins font-light text-[14px] text-gray-600 leading-relaxed">
            <p className="mb-4 font-medium text-gray-800">
              Green Spaces Aren't Optional Anymore
            </p>

            <p className="mb-4">
              Post-2020, something changed in the way Indians perceive homes.
              Suddenly, what additional room was less important than the fact
              that there was a park where your child could play. Greater Noida
              got the message early.
            </p>

            <p className="font-medium text-[16px] text-gray-900 mb-2">The Numbers:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Green coverage in Greater Noida: ~20%</li>
              <li>
                Parks in sectors, biodiversity parks, and green corridors
              </li>
              <li>
                Housing projects with 60–70% open space becoming the norm
              </li>
            </ul>

            <p className="mt-4">
              Visit Greater Noida Extension on a Saturday morning, and you'll
              understand what makes it different—kids riding bikes on
              designated tracks, senior citizens taking their morning walks,
              and families using green spaces the way they were meant to be
              used.
            </p>
          </div>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-[360px_1fr] gap-10">
            {/* Vertical line */}
            <div className="absolute left-[360px] top-0 bottom-0 w-px bg-gray-300" />

            {/* LEFT SIDE */}
            <div className="space-y-[140px]">
              {/* Block 1 */}
              <div className="relative pt-1">
                <span className="absolute -right-[7px] top-1 w-3 h-3 bg-green-600 rounded-full" />
                <h3 className="text-[30px] font-medium font-poppins leading-snug">
                  Finally, We're Talking <br />
                  Minutes, Not Hours
                </h3>

                <div className="flex gap-2 mt-4">
                  <span className="bg-yellow-400 text-xs px-3 py-1 rounded-full">
                    Technology
                  </span>
                  <span className="bg-yellow-400 text-xs px-3 py-1 rounded-full">
                    Other Category
                  </span>
                </div>
              </div>

              {/* Block 2 */}
              <div className="relative pt-1">
                <span className="absolute -right-[7px] top-1 w-3 h-3 bg-green-600 rounded-full" />
                <h3 className="text-[30px] font-medium font-poppins leading-snug">
                  The Lifestyle Evolution: <br />
                  From Concrete to Community
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-[80px] font-poppins text-[15px] font-light text-gray-600 leading-relaxed">
              {/* Content 1 */}
              <div>
                <p className="mb-3">
                  The Aqua Line extension is not another metro route in the city;
                  it is a lifestyle transformation. The 90-minute journey with
                  three mode changes, dubious autorickshaw deals, and a plea to
                  call the deities in between is now a metro ride.
                </p>

                <p className="text-green-600 font-medium">
                  Noida Sector 51 to Greater Noida in under 30 minutes
                </p>
                <p className="text-green-600 font-medium">
                  Direct connectivity to Blue Line at Noida City Centre
                </p>
              </div>

              {/* Content 2 */}
              <div>
                <p className="mb-4 font-medium text-gray-800">
                  Green Spaces Aren't Optional Anymore
                </p>

                <p className="mb-4">
                  Post-2020, something changed in the way Indians perceive homes.
                  Suddenly, what additional room was less important than the fact
                  that there was a park where your child could play. Greater Noida
                  got the message early.
                </p>

                <p className="font-medium text-gray-800 mb-2">The Numbers:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Green coverage in Greater Noida: ~20%</li>
                  <li>
                    Parks in sectors, biodiversity parks, and green corridors
                  </li>
                  <li>
                    Housing projects with 60–70% open space becoming the norm
                  </li>
                </ul>

                <p className="mt-4">
                  Visit Greater Noida Extension on a Saturday morning, and you'll
                  understand what makes it different—kids riding bikes on
                  designated tracks, senior citizens taking their morning walks,
                  and families using green spaces the way they were meant to be
                  used.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}