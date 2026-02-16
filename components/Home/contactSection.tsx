"use client";

import { useState } from "react";
import Link from "next/link";

// Instagram icon component
const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Always Here to Help You
            </h2>
            <p className="text-gray-500 text-sm mb-10 max-w-md leading-relaxed">
              Always here to help—fast, focused, and fully invested in your
              success. From quick support to big-picture strategy, we've got
              your back at every step.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white flex-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="text-gray-900 font-bold text-base mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    H-97, sec 63, Noida,
                    <br />
                    20122
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white flex-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="text-gray-900 font-bold text-base mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@mangalayagroup.in"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors block"
                  >
                    info@mangalayagroup.in
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white flex-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="text-gray-900 font-bold text-base mb-1">
                    Contact
                  </h3>
                  <a
                    href="tel:+918273782839"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors block"
                  >
                    +91 8273782839
                  </a>
                  <a
                    href="tel:+918273782839"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors block"
                  >
                    +91 8273782839
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white flex-none">
                  <InstagramIcon />
                </div>
                <div className="pt-1">
                  <h3 className="text-gray-900 font-bold text-base mb-1">
                    Instagram
                  </h3>
                  <a
                    href="https://instagram.com/mangalya_group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    @mangalya_group
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#F4F5F7] shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Your email will not be published. Required field are marked
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your Full name"
                    className="w-full px-4 py-6 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-6 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Number"
                    className="w-full px-4 py-6 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write a message..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 mt-1 cursor-pointer"
                    required
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="text-gray-600 text-sm cursor-pointer"
                  >
                    Accept{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      privacy policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
