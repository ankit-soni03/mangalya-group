"use client";

export default function AmenitiesThatMatter() {
  return (
    <section className="md:py-12 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] md:gap-10 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-[25px] md:text-[30px] font-medium leading-tight mb-3 font-poppins">
              Amenities That Matter
            </h2>

            <p className="font-poppins text-sm text-gray-600 leading-relaxed mb-6 font-light">
              Instead of listing 50 amenities, Mangalya emphasizes the ones that
              matter to the residents
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-black text-white p-5 font-poppins font-light text-sm leading-relaxed">
              <ul className="list-disc pl-4 space-y-2">
                <li>Well-maintained swimming pools (not just for show)</li>
                <li>Functional gymnasiums with adequate equipment</li>
                <li>
                  Children’s play areas that are safe and designed for the
                  Indian climate
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#008854] text-white p-5 font-poppins font-light text-sm leading-relaxed">
              <ul className="list-disc pl-4 space-y-2">
                <li>Useable jogging tracks and sports courts</li>
                <li>24/7 power backup and water supply that functions</li>
                <li>
                  Rainwater harvesting, which shows that the developer cares
                  about the environment
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 p-5 font-poppins font-light text-sm text-gray-600 shadow-xl leading-relaxed">
              <p>
                The Mangalya Greens project in Ghaziabad, for instance, has been
                appreciated for its 24/7 water supply and power backup, which
                are basic amenities that most luxury projects fail to deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
