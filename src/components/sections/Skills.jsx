const Skills = () => {
  const progressSkills = [
    { name: "HTML", percent: "95%" },
    { name: "CSS", percent: "90%" },
    { name: "JavaScript", percent: "85%" },
    { name: "React.js", percent: "90%" },
    { name: "Tailwind CSS", percent: "95%" },
    { name: "Node.js", percent: "75%" },
    { name: "Firebase", percent: "70%" },
    { name: "Git & GitHub", percent: "90%" },
  ];

  const skillCards = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind",
    "Node.js",
    "Firebase",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="
      py-28
      bg-[#070B14]
      text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center">
          <p className="text-violet-500 font-semibold uppercase tracking-widest">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-8">
            I work with a variety of technologies to
            build modern, fast and responsive web
            applications.
          </p>
        </div>

        {/* OPTION A */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-violet-600 px-4 py-2 rounded-lg text-sm font-semibold">
              OPTION A
            </span>

            <h3 className="text-2xl font-semibold">
              Progress Bars
            </h3>
          </div>

          <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            "
          >
            {progressSkills.map((skill, index) => (
              <div key={index}>
                
                {/* Skill Name */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-medium">
                    {skill.name}
                  </h4>

                  <span className="text-gray-400">
                    {skill.percent}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-[#1E293B] rounded-full overflow-hidden">
                  <div
                    className="
                    h-full
                    // bg-gradient-to-r
                    from-violet-500
                    to-indigo-400
                    rounded-full
                    "
                    style={{ width: skill.percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OPTION B */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-violet-600 px-4 py-2 rounded-lg text-sm font-semibold">
              OPTION B
            </span>

            <h3 className="text-2xl font-semibold">
              Skill Cards
            </h3>
          </div>

          <div
            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-8
            "
          >
            {skillCards.map((skill, index) => (
              <div
                key={index}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:-translate-y-2
                hover:border-violet-500/50
                transition-all
                duration-300
                "
              >
                {/* Icon Placeholder */}
                <div
                  className="
                  w-20
                  h-20
                  mx-auto
                  rounded-2xl
                  bg-[#111827]
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                  text-violet-400
                  "
                >
                  {skill.charAt(0)}
                </div>

                {/* Skill Name */}
                <h4 className="text-2xl font-semibold mt-6">
                  {skill}
                </h4>

                {/* Line */}
                <div className="w-16 bg-violet-500 mx-auto mt-4 rounded-full"></div>

                {/* Level */}
                <p className="text-gray-400 mt-5">
                  Advanced
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;