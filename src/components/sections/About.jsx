import React from "react";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaStar,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative bg-[#f5f7ff] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">

          {/* Main Image */}
          <img
            src="./hero.png"
            alt="about"
            className="rounded-[40px] w-full object-cover shadow-2xl"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* ABOUT LABEL */}
          <div className="flex items-center gap-3 text-violet-600 font-semibold uppercase tracking-wider">
            <FaUser />
            <p>About Me</p>
          </div>

          {/* HEADING */}
          <h1 className="text-5xl lg:text-6xl font-bold text-black mt-5 leading-tight">
            Get to <span className="text-violet-600">know me</span>
          </h1>

          {/* LINE */}
          <div className="w-24 h-1 bg-violet-600 rounded-full mt-6"></div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-lg leading-9 mt-8">
            I’m a passionate{" "}
            <span className="text-violet-600 font-semibold">
              Frontend Developer
            </span>{" "}
            who loves building clean, responsive and user-friendly websites.
            I enjoy turning ideas into{" "}
            <span className="font-bold">
              real-world applications
            </span>{" "}
            using modern technologies.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

            {/* Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 text-2xl">
                <FaBriefcase />
              </div>

              <h2 className="text-4xl font-bold mt-5 text-black">
                1+
              </h2>

              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
                <FaCode />
              </div>

              <h2 className="text-4xl font-bold mt-5 text-black">
                15+
              </h2>

              <p className="text-gray-600 mt-2">
                Projects Completed
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-2xl">
                <FaGraduationCap />
              </div>

              <h2 className="text-4xl font-bold mt-5 text-black">
                5+
              </h2>

              <p className="text-gray-600 mt-2">
                Technologies Mastered
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                <FaStar />
              </div>

              <h2 className="text-4xl font-bold mt-5 text-black">
                100%
              </h2>

              <p className="text-gray-600 mt-2">
                Client Satisfaction
              </p>
            </div>
          </div>

          {/* INFO + RESUME */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">

            {/* INFO */}
            <div className="space-y-5 text-gray-800">

              <div className="flex items-center gap-4">
                <FaUser className="text-violet-600" />
                <p>
                  <span className="font-semibold">
                    Name :
                  </span>{" "}
                  Dheeraj Jangid
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-violet-600" />
                <p>
                  <span className="font-semibold">
                    Email :
                  </span>{" "}
                  dheeraj.folio@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-violet-600" />
                <p>
                  <span className="font-semibold">
                    Location :
                  </span>{" "}
                  Jaipur, Rajasthan
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-violet-600" />
                <p>
                  <span className="font-semibold">
                    Phone :
                  </span>{" "}
                  +91 97849 58368
                </p>
              </div>
            </div>

            {/* RESUME CARD */}
            <div className="bg-white rounded-3xl shadow-lg p-6 flex gap-5 items-center">

              <img
                src="./cv_image.png"
                alt="cv"
                className=" w-15 h-60 rounded-xl border"
              />

              <div>
                <h2 className="text-3xl font-bold text-black">
                  My Resume
                </h2>

                <p className="text-gray-600 mt-2">
                  Download my CV to know more about me.
                </p>

                <a
                  href="/Dheeraj_Portfolio.pdf"
                  download
                  className="mt-5 inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
                >
                  Download CV
                  <FaDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;