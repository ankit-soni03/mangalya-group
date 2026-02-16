"use client";

export default function LifestyleEvolution() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative grid grid-cols-1 md:grid-cols-[360px_1fr] gap-10">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[360px] top-0 bottom-0 w-px bg-gray-300" />

          {/* LEFT SIDE */}
          <div className="space-y-20">
            {/* Block 1 */}
            <div className="relative">
              <span className="hidden md:block absolute right-[-18px] top-2 w-3 h-3 bg-green-600 rounded-full" />
              <h3 className="text-2xl font-semibold leading-snug">
                Finally, We’re Talking Minutes, Not Hours
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
            <div className="relative">
              <span className="hidden md:block absolute right-[-18px] top-2 w-3 h-3 bg-green-600 rounded-full" />
              <h3 className="text-2xl font-semibold leading-snug">
                The Lifestyle Evolution: From Concrete to Community
              </h3>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-16 font-poppins text-sm text-gray-600 leading-relaxed">
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
                Green Spaces Aren’t Optional Anymore
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
                Visit Greater Noida Extension on a Saturday morning, and you’ll
                understand what makes it different—kids riding bikes on
                designated tracks, senior citizens taking their morning walks,
                and families using green spaces the way they were meant to be
                used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
