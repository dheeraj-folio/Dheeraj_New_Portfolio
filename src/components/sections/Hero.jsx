import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-[#070B14] text-white flex items-center pt-23"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <div className="inline-block px-5 py-2 border border-violet-500 rounded-full text-violet-400 text-sm mb-6">
              ● FRONTEND DEVELOPER
            </div>

            {/* Heading */}
            {/* Heading */}
            <h1
              className="
  text-5xl
  sm:text-6xl
  lg:text-7xl
  font-bold
  leading-tight
  text-white
  "
            >
              Hi, I'm{" "}
              <span className="text-violet-500">
                Dheeraj
              </span>
            </h1>

            {/* Sub Heading */}
            <h2
              className="
  mt-6
  text-2xl
  sm:text-3xl
  lg:text-4xl
  font-semibold
  leading-snug
  text-gray-200
  max-w-2xl
  "
            >
              I build modern, fast & responsive{" "}
              <span className="text-violet-400">
                web experiences.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
  mt-8
  text-gray-400
  text-base
  sm:text-lg
  leading-8
  max-w-xl
  "
            >
              Frontend Developer skilled in React.js,
              Tailwind CSS, JavaScript and modern
              web technologies. I create responsive,
              user-friendly websites with clean UI
              and smooth user experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 rounded-2xl font-semibold transition-all duration-300">
                <a
                  href="https://wa.me/919784958368"
                  target="_blank"
                >
                  Hire Me
                </a>
              </button>

              <button className="px-8 py-4 border border-gray-700 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <a
                  href="/Dheeraj_Portfolio.pdf"
                  download
                >
                  Download CV
                </a>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-12">
              <p className="text-gray-400">Follow Me</p>

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
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            {/* Background Glow */}
            <div className="absolute  bg-violet-700/30 blur-[120px] rounded-full"></div>

            {/* Hero Image */}
            <img
              src="./hero.png"
              alt="hero"
              className="relative z-10 w-full "
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
