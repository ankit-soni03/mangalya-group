"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl text-center">
        {/* 404 */}
        <h1 className="text-[96px] md:text-[120px] font-semibold leading-none text-gray-900">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        {/* Script line */}
        <p className="font-handwritten text-xl mt-3">
          Looks like you’ve taken a wrong turn
        </p>

        {/* Description */}
        <p className="font-poppins text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved. At
          Mangalya Group, every journey matters—let’s help you get back to the
          right place.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
