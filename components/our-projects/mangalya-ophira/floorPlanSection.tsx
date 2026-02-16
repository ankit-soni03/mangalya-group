"use client";
import Image from "next/image";

const floorPlans = [
  {
    id: 1,
    src: "/our-projects/mangalya-ophira/floor-plans1.png"
  },
  {
    id: 2,
    src: "/our-projects/mangalya-ophira/floor-plans2.png"
  },
  {
    id: 3,
    src: "/our-projects/mangalya-ophira/floor-plans3.png"
  },
  {
    id: 4,
    src: "/our-projects/mangalya-ophira/floor-plans4.png"
  },
  {
    id: 5,
    src: "/our-projects/mangalya-ophira/floor-plans5.png"
  },
  {
    id: 6,
    src: "/our-projects/mangalya-ophira/floor-plans6.png",
  },
  {
    id: 7,
    src: "/our-projects/mangalya-ophira/floor-plans7.png",
  },
  {
    id: 8,
    src: "/our-projects/mangalya-ophira/floor-plans8.png",
  },
];

export default function FloorPlanSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold flex items-center justify-center gap-2">
            Floor Plan 🌿
          </h2>
          <p className="text-gray-500 mt-2">
            Thoughtfully planned layouts that balance comfort, movement, and
            modern living.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-6">
          {floorPlans.map((item, index) => (
            <div
              key={item.id}
              className={`
        shadow-sm hover:shadow-md transition overflow-hidden
        ${
          index < 3
            ? "col-span-12 sm:col-span-6 lg:col-span-4" // row 1 → 3
            : index < 6
              ? "col-span-12 sm:col-span-6 lg:col-span-4" // row 2 → 3
              : "col-span-12 sm:col-span-6 lg:col-span-6" // row 3 → 2
        }
      `}
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <div className="text-center py-2 font-medium text-sm">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
