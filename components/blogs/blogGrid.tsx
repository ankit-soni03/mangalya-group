// import Image from "next/image";

// const blogs = [
//   {
//     title: "Amenities That Matter",
//     desc: "What Modern Homebuyers Really Want in 2026",
//     img: "/blogs/amenities.jpg",
//     tags: ["Technology", "Other Category"],
//     highlight: true,
//   },
//   {
//     title: "Inside Mangalya Novena Greens",
//     desc: "A New Standard for Modern Living",
//     img: "/blogs/novena.jpg",
//     tags: ["Technology", "Other Category"],
//   },
//   {
//     title: "Mangalya Projects",
//     desc: "Mangalya Projects Are Turning Heads in Noida West & Ghaziabad",
//     img: "/blogs/projects.jpg",
//     tags: ["Technology"],
//   },
//   {
//     title: "Urban Living",
//     desc: "Greater Noida Is the Future of Urban Living",
//     img: "/blogs/urban.jpg",
//     tags: ["Technology", "Other Category"],
//   },
// ];

// export default function BlogGrid() {
//   return (
//     <section className="container mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className={`relative h-[320px] overflow-hidden rounded-lg group ${
//               blog.highlight ? "ring-2 ring-blue-500" : ""
//             }`}
//           >
//             <Image
//               src={blog.img}
//               alt={blog.title}
//               fill
//               className="object-cover group-hover:scale-105 transition duration-500"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/35" />

//             {/* Tags */}
//             <div className="absolute top-4 right-4 flex gap-2">
//               {blog.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Content */}
//             <div className="absolute bottom-4 left-4 right-4 text-white">
//               <h3 className="text-xl font-semibold leading-tight">
//                 {blog.title}
//               </h3>
//               <p className="text-sm opacity-90 mt-1">{blog.desc}</p>

//               <div className="mt-3 flex justify-end">
//                 <span className="text-lg">→</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Amenities That Matter",
    desc: "What Modern Homebuyers Really Want in 2026",
    img: "/blogs/amenities.png",
    tags: ["Technology", "Other Category"],
    slug: "/blogs/amenities-that-matter",
  },
  {
    title: "Inside Mangalya Novena Greens",
    desc: "A New Standard for Modern Living",
    img: "/blogs/novena.png",
    tags: ["Technology", "Other Category"],
    slug: "/blogs/mangalya-novena-greens",
  },
  {
    title: "Mangalya Projects",
    desc: "Mangalya Projects Are Turning Heads in Noida West & Ghaziabad",
    img: "/blogs/mangalya.png",
    tags: ["Technology"],
    slug: "/blogs/mangalya-projects",
  },
  {
    title: "Urban Living",
    desc: "Greater Noida Is the Future of Urban Living",
    img: "/blogs/urban.png",
    tags: ["Technology", "Other Category"],
    slug: "/blogs/urban-living",
  },
];

export default function BlogGrid() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={blog.slug}
            className="group relative h-64 md:h-72 overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <Image
              src={blog.img}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={index < 2}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Tags - Top Right */}
            <div className="absolute top-4 right-4 flex gap-2 z-20 flex-wrap justify-end">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content - Bottom Bar (Full Width) */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-5 md:px-6 py-4 md:py-5 flex justify-between items-end gap-4">
              {/* Text Container */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight mb-1">
                  {blog.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-100 opacity-90 line-clamp-1">
                  {blog.desc}
                </p>
              </div>

              {/* Arrow - Bottom Right */}
              <div className="flex-shrink-0 text-white text-2xl md:text-3xl font-light">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
