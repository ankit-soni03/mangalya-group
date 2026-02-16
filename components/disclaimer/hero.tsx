"use client";
import Link from "next/link";

export default function DisclaimerSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-1">
          Disclaimer
        </h2>

        <p className="font-handwritten text-lg mb-8">
          Thank you for visiting
        </p>

        {/* SEARCH UI (same to same style) */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-3 px-5 py-3 border rounded-full shadow-sm hover:shadow-md transition">
            
            {/* Google Icon */}
            <span className="text-xl font-semibold text-blue-600">G</span>

            {/* URL text */}
            <span className="flex-1 text-left text-sm text-gray-600 font-poppins">
              www.mangalyagroup.in
            </span>

            {/* Mic */}
            <span className="text-gray-500 text-sm">🎤</span>

            {/* Lens */}
            <span className="text-gray-500 text-sm">📷</span>

            {/* AI Mode */}
            <span className="text-xs border border-blue-500 text-blue-600 px-3 py-1 rounded-full font-medium">
              AI Mode
            </span>
          </div>
        </div>

        {/* Disclaimer text */}
        <p className="font-poppins text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
          This is the only official website of Mangalya Group (“Company”). Users
          are advised not to rely on information from any other website claiming
          association with the Company. All content on this website, including
          brochures and marketing materials, is provided for informational
          purposes only and is subject to change without notice. No information
          on this website constitutes advertising, marketing, booking, selling,
          or an offer or invitation to purchase any unit or project. Users
          acknowledge that no reliance has been placed on this information for
          any booking or purchase decision.
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-10 py-3 text-sm hover:bg-gray-800 transition"
        >
          Enquire Now
        </Link>

      </div>
    </section>
  );
}
