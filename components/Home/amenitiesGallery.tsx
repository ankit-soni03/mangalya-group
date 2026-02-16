"use client";

export function AmenitiesGallery() {
  // Background images (first 3)
  const bgImages = [
    { id: 1, src: "/bg1.png", alt: "Amenity background 1" },
    { id: 2, src: "/bg2.png", alt: "Amenity background 2" },
    { id: 3, src: "/bg3.png", alt: "Amenity background 3" },
  ];

  // Display images (7 images)
  const galleryImages = [
    { id: 4, src: "/img1.png", alt: "Living room", span: "col-span-1" },
    { id: 5, src: "/img2.png", alt: "Games area", span: "col-span-1" },
    { id: 6, src: "/img3.png", alt: "Gym", span: "col-span-1" },
    { id: 7, src: "/img4.png", alt: "Pool", span: "col-span-1" },
    { id: 8, src: "/img5.png", alt: "Parking", span: "col-span-1" },
    { id: 9, src: "/img6.png", alt: "Security", span: "col-span-1" },
    {
      id: 10,
      src: "/img7.png",
      alt: "Playground",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative leaf elements */}
      <div className="absolute top-10 right-20 opacity-20 pointer-events-none">
        <svg
          className="w-40 h-40 text-teal-200"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 Q 70 30 70 50 Q 70 70 50 90 Q 30 70 30 50 Q 30 30 50 10 Z" />
        </svg>
      </div>

      <div className="absolute bottom-32 left-20 opacity-20 pointer-events-none">
        <svg
          className="w-48 h-48 text-teal-200"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 Q 70 30 70 50 Q 70 70 50 90 Q 30 70 30 50 Q 30 30 50 10 Z" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-10 opacity-15 pointer-events-none">
        <svg
          className="w-56 h-56 text-teal-200"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 Q 70 30 70 50 Q 70 70 50 90 Q 30 70 30 50 Q 30 30 50 10 Z" />
        </svg>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6">
          {/* Top row - 3 images (full width) */}
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.slice(0, 3).map((image) => (
                  <div
                    key={image.id}
                    className="relative overflow-hidden  shadow-md h-48 md:h-56 lg:h-64 group cursor-pointer"
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle row - 3 images (80% width) */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.slice(3, 6).map((image) => (
                  <div
                    key={image.id}
                    className="relative overflow-hidden  shadow-md h-48 md:h-56 lg:h-64 group cursor-pointer"
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row - 1 image (60% width) */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative overflow-hidden  shadow-md h-56 md:h-64 group cursor-pointer">
                <img
                  src={galleryImages[6].src || "/placeholder.svg"}
                  alt={galleryImages[6].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
