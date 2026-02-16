"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Icons as SVG components
  // const FacebookIcon = () => (
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 24 24"
  //     fill="currentColor"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  //   </svg>
  // );

  // const InstagramIcon = () => (
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 24 24"
  //     fill="currentColor"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
  //   </svg>
  // );

  // const TwitterIcon = () => (
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 24 24"
  //     fill="currentColor"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.956 1.745 4.933 4.933 0 00-8.514 4.486c-4.09-.2-7.704-2.17-10.126-5.14a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  //   </svg>
  // );

  // const LinkedInIcon = () => (
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 24 24"
  //     fill="currentColor"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.776-2.237-1.088 0-1.72.722-2.002 1.413-.103.249-.129.597-.129.946v5.447h-3.554s.048-8.836 0-9.754h3.554v1.384c.43-.665 1.199-1.61 2.922-1.61 2.135 0 3.739 1.395 3.739 4.393v5.587zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.771-1.715 1.921-1.715 1.145 0 1.916.76 1.916 1.715 0 .953-.771 1.715-1.922 1.715zm1.581 11.597H3.715V9.498h3.203v10.954zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  //   </svg>
  // );

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact-Us", href: "/contact" },
        { label: "Blogs", href: "/blogs" },
      ],
    },
    {
      title: "Projects",
      links: [
        {
          label: "Mangalya Novena Green",
          href: "/projects/mangalya-novena-green",
        },
        { label: "Mangalya Anant", href: "/projects/mangalya-anant" },
        { label: "Mangalya Ophira", href: "/projects/mangalya-ophira" },
        { label: "Snow Village", href: "https://snowvillage.in/" },
        { label: "Cozy", href: "https://cozylounge.in/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  // const socialLinks = [
  //   {
  //     icon: FacebookIcon,
  //     href: "https://facebook.com/mangalya_group",
  //     label: "Facebook",
  //   },
  //   {
  //     icon: InstagramIcon,
  //     href: "https://instagram.com/mangalya_group",
  //     label: "Instagram",
  //   },
  //   {
  //     icon: TwitterIcon,
  //     href: "https://twitter.com/mangalya_group",
  //     label: "Twitter",
  //   },
  //   {
  //     icon: LinkedInIcon,
  //     href: "https://linkedin.com/company/mangalya-group",
  //     label: "LinkedIn",
  //   },
  // ];

  return (
    <footer className="w-full bg-[#292929] text-gray-100 font-['Montserrat']">
      {/* Main Footer Content */}
      <div className="w-full px-6 sm:px-10 lg:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/footer-logo.png"
                  alt="Mangalya Group"
                  className="w-40 h-auto mb-4"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building spaces that transcend ordinary living and inspire
                extraordinary moments.
              </p>
            </div>

            {/* Quick Links */}
            {footerSections[0] && (
              <div>
                <h4 className="text-white font-semibold text-base mb-6 relative pb-3">
                  {footerSections[0].title}
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#16a34a]" />
                </h4>
                <ul className="space-y-3">
                  {footerSections[0].links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-[#16a34a] transition-colors duration-300 hover:pl-2 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects */}
            {footerSections[1] && (
              <div>
                <h4 className="text-white font-semibold text-base mb-6 relative pb-3">
                  {footerSections[1].title}
                  <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#16a34a]" />
                </h4>
                <ul className="space-y-3">
                  {footerSections[1].links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 text-sm hover:text-[#16a34a] transition-colors duration-300 hover:pl-2 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-base mb-6 relative pb-3">
                Contact & Location
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#16a34a]" />
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+918273782839"
                    className="text-gray-300 text-sm hover:text-[#16a34a] transition-colors"
                  >
                    +91 8273782839
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@mangalayagroup.in"
                    className="text-gray-300 text-sm hover:text-[#16a34a] transition-colors break-all"
                  >
                    info@mangalayagroup.in
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    H-97, Sector 63,
                    <br />
                    Noida, 201301
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Tagline Section */}
          {/* <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"> */}
          {/* Social Links */}
          {/* <div>
              <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider font-medium">
                Follow Us
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-[#16a34a] hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div> */}

          {/* Tagline */}
          {/* <div className="text-center md:text-right">
              <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed max-w-sm ml-auto">
                Spaces that quietly
                <br className="hidden md:block" /> raise your standards.
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 px-6 sm:px-10 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-300 text-sm">
            © {currentYear} Mangalya Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerSections[2]?.links.slice(0, 2).map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-300 text-sm hover:text-[#16a34a] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
