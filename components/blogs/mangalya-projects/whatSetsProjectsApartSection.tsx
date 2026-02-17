"use client";

const items = [
  {
    heading: (
      <>
        What Sets These Projects Apart?
      </>
    ),
    tags: ["Technology", "Other Category"],
    content: (
      <>
        <span className="font-semibold text-gray-800">
          The 70% Open Space Promise
        </span>{" "}
        In a world where developers are trying to squeeze the maximum number of
        units into the smallest possible area, the promise of allocating 70% of
        the project area to open spaces is nothing short of revolutionary. This
        is not just a sales pitch; it is a lifestyle that the residents get to
        enjoy every single day. Consider the case of Mangalya Novena Greens in
        Tech Zone-IV, for example. The project spans 4 acres and is more like a
        carefully planned neighborhood than a high-rise residential complex,
        where green spaces are not an afterthought but an integral part of the
        design. In a pollution-choked NCR, this is a promise that is resonating
        with health-conscious families.
      </>
    ),
  },
  {
    heading: (
      <>
        The Quality That Speaks for Itself
      </>
    ),
    tags: [],
    content: (
      <>
        <span className="font-semibold text-gray-800">
          Spanish-Inspired Architecture with Indian Sensibilities
        </span>{" "}
        The Mangalya projects have Spanish-inspired architecture that appears
        elegant yet not ostentatious. More importantly, however, they also take
        into account Vastu requirements and designs that are appropriate for
        Indian families—something that many &ldquo;international style&rdquo;
        projects do not.
      </>
    ),
  },
];

export default function WhatSetsProjectsApartSection() {
  return (
    <section className="py-8 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Continuous vertical line */}
          <div className="hidden md:block absolute left-[336px] top-0 bottom-0 w-px bg-gray-300" />
          
          <div className="space-y-12 md:space-y-16">
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-0 md:gap-0 relative"
              >
                {/* LEFT — heading */}
                <div className="pr-8 pb-4 md:pb-0">
                  <h3 className="font-poppins text-[25px] md:text-[30px] font-medium leading-tight mb-3">{item.heading}</h3>
                  {item.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Green dot */}
                <div className="hidden md:block absolute left-[337px] w-3 h-3 bg-green-600 rounded-full mt-1 -ml-1.5" />

                {/* RIGHT — content */}
                <div className="font-poppins md:pl-10 text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}