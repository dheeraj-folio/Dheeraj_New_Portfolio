const Experience = () => {
  const experienceData = [
    {
      year: "2024 - Present",
      title: "Frontend Developer",
      company: "CodeCraft Technologies",
      desc: "Building responsive and user-friendly web applications using React.js and Tailwind CSS.",
      color: "violet",
    },
    {
      year: "2022 - 2023",
      title: "Junior Developer",
      company: "Webify Solutions",
      desc: "Worked on multiple frontend projects and optimized UI performance.",
      color: "cyan",
    },
    {
      year: "2021 - 2022",
      title: "Web Developer Intern",
      company: "DevStudio",
      desc: "Assisted in developing websites and learned modern frontend practices.",
      color: "orange",
    },
  ];

  const educationData = [
    {
      year: "2021 - 2024",
      title: "Bachelor of Computer Applications",
      company: "XYZ University",
      desc: "Focused on frontend development and software engineering fundamentals.",
      badge: "8.4 CGPA",
      color: "green",
    },
    {
      year: "2019 - 2021",
      title: "Higher Secondary (12th)",
      company: "ABC School",
      desc: "Completed higher secondary with Computer Science stream.",
      badge: "78%",
      color: "yellow",
    },
    {
      year: "2018 - 2019",
      title: "Secondary (10th)",
      company: "ABC School",
      desc: "Completed secondary education with excellent academic performance.",
      badge: "85%",
      color: "violet",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-28 bg-[#070B14] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center">
          <p className="text-violet-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
            MY JOURNEY
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-4 sm:mt-5">
            Experience & Education
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-6 max-w-3xl mx-auto">
            A summary of my professional experience and educational background that shaped my skills and knowledge.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-14 sm:mt-20">
          
          {/* EXPERIENCE */}
          <div>
            {/* Title */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 text-2xl sm:text-3xl font-semibold">
              Experience
            </div>

            {/* Timeline Container */}
            <div className="relative mt-8 sm:mt-10 pl-2 sm:pl-0">
              {/* Vertical Line - Hidden on tiny screens, visible from 'sm' breakpoint */}
              <div className="hidden sm:block absolute left-[90px] top-0 w-[2px] h-full bg-white/10"></div>

              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:grid sm:grid-cols-[80px_30px_1fr] gap-4 sm:gap-6 mb-8 sm:mb-10"
                >
                  {/* Year */}
                  <div className="text-violet-400 sm:text-gray-300 text-base sm:text-lg font-medium sm:leading-8 sm:pt-2">
                    {item.year}
                  </div>

                  {/* Dot Indicator - Hidden on mobile view */}
                  <div className="hidden sm:flex relative justify-center sm:pt-4">
                    <div className="w-5 h-5 rounded-full bg-violet-500 border-4 border-[#070B14] z-10"></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-violet-500/40 transition-all duration-300">
                    <h3 className="text-xl sm:text-3xl font-semibold">
                      {item.title}
                    </h3>

                    <h4 className="text-violet-400 text-base sm:text-xl mt-2 sm:mt-3">
                      {item.company}
                    </h4>

                    <p className="text-gray-400 text-sm sm:text-lg leading-6 sm:leading-8 mt-4 sm:mt-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            {/* Title */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 text-2xl sm:text-3xl font-semibold">
              Education
            </div>

            {/* Timeline Container */}
            <div className="relative mt-8 sm:mt-10 pl-2 sm:pl-0">
              {/* Vertical Line - Hidden on tiny screens, visible from 'sm' breakpoint */}
              <div className="hidden sm:block absolute left-[90px] top-0 w-[2px] h-full bg-white/10"></div>

              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:grid sm:grid-cols-[80px_30px_1fr] gap-4 sm:gap-6 mb-8 sm:mb-10"
                >
                  {/* Year */}
                  <div className="text-violet-400 sm:text-gray-300 text-base sm:text-lg font-medium sm:leading-8 sm:pt-2">
                    {item.year}
                  </div>

                  {/* Dot Indicator - Hidden on mobile view */}
                  <div className="hidden sm:flex relative justify-center sm:pt-4">
                    <div className="w-5 h-5 rounded-full bg-violet-500 border-4 border-[#070B14] z-10"></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-violet-500/40 transition-all duration-300">
                    <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-3 sm:gap-5">
                      <div>
                        <h3 className="text-xl sm:text-3xl font-semibold">
                          {item.title}
                        </h3>

                        <h4 className="text-violet-400 text-base sm:text-xl mt-2 sm:mt-3">
                          {item.company}
                        </h4>
                      </div>

                      {/* Badge */}
                      <span className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-violet-500/10 text-violet-400 text-xs sm:text-sm font-semibold inline-block self-start">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm sm:text-lg leading-6 sm:leading-8 mt-4 sm:mt-6">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;