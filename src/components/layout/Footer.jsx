import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "UI/UX Design",
    "API Development",
    "Responsive Design",
  ];

  return (
    <footer className="bg-[#070B14] text-white pt-16 sm:pt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14">

          {/* LEFT COLUMN: Branding & Newsletter */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 flex items-center justify-center text-2xl sm:text-3xl font-bold shrink-0">
                D
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Dheeraj</h2>
                <p className="text-violet-400 text-sm sm:text-base mt-0.5">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-7 sm:leading-8 text-sm sm:text-lg mt-6 max-w-sm">
              I build modern, fast and responsive websites with clean code and smooth user experience.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mt-6">

              <div className="flex gap-4">
                <div className="flex gap-4">

                  <a
                    href="https://www.linkedin.com/in/dheerajjangid/"
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-violet-600"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://github.com/dheeraj-folio"
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-violet-600"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://x.com/dheerajjan9362"
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-violet-600"
                  >
                    <FaTwitter />
                  </a>

                  <a
                    href="https://www.instagram.com/codewithdheeru?igsh=OXFnMmxycDBscGl5"
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-violet-600"
                  >
                    <FaInstagram />
                  </a>

                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-10 w-full max-w-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-violet-400">
                Newsletter
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-6">
                Stay updated with my latest projects and articles.
              </p>

              {/* Stacked on mobile, combined row on tablet/desktop */}
              <div className="flex flex-col sm:flex-row mt-4 gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl sm:rounded-l-2xl sm:rounded-r-none px-4 py-3 outline-none text-white text-sm"
                />

                <button className="w-full sm:w-auto px-6 py-3 sm:py-0 rounded-xl sm:rounded-r-2xl sm:rounded-l-none bg-gradient-to-r from-violet-600 to-indigo-500 hover:opacity-90 active:scale-98 transition-all duration-300 flex items-center justify-center text-sm font-semibold">
                  <span className="sm:hidden">Subscribe</span>
                  <span className="hidden sm:inline">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-6 sm:mb-8 text-center sm:text-left">
              Quick Links
            </h3>

            <div className="space-y-4 sm:space-y-5 max-w-md mx-auto sm:mx-0">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between border-b border-white/10 pb-4 text-gray-300 hover:text-violet-400 transition-all duration-300 cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="text-gray-500">›</span>
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES & TECH */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-6 sm:mb-8">
              Services
            </h3>

            <div className="space-y-4 w-full max-w-md">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 text-gray-300"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center text-violet-400 text-xs sm:text-sm shrink-0">
                    ✦
                  </div>

                  <span className="text-sm sm:text-lg">{service}</span>
                </div>
              ))}
            </div>

            {/* Tools Frame */}
            {/* <div className="mt-10 w-full max-w-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-6 sm:mb-8 text-center sm:text-left">
                Tools I Use
              </h3>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                {["R", "T", "JS", "G"].map((tool, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center text-violet-400 font-bold text-sm sm:text-base select-none"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-6 sm:mb-8 text-center sm:text-left">
              Contact Info
            </h3>

            <div className="space-y-5 sm:space-y-8 max-w-md mx-auto sm:mx-0">
              {/* Address */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center text-violet-400 text-base sm:text-lg shrink-0">
                  📍
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-8 pt-2">
                  Jaipur, Rajasthan, India
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center text-violet-400 text-base sm:text-lg shrink-0">
                  ✉
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-8 pt-2 break-all">
                  dheeraj.dev@example.com
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center text-violet-400 text-base sm:text-lg shrink-0">
                  ☎
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-8 pt-2">
                  +91 98765 43210
                </p>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center text-violet-400 text-base sm:text-lg shrink-0">
                  ⏰
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-8 pt-2">
                  Mon - Sat : 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Details */}
        <div className="mt-14 sm:mt-20 py-6 sm:py-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
          <p className="text-center order-2 lg:order-1">
            © 2026 Dheeraj. All rights reserved.
          </p>

          <p className="text-center order-1 lg:order-2">
            Design and code with passion 💜
          </p>

          <div className="flex gap-4 sm:gap-6 order-3">
            <span className="hover:text-violet-400 cursor-pointer transition-all duration-300">
              Privacy Policy
            </span>

            <span className="hover:text-violet-400 cursor-pointer transition-all duration-300">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;