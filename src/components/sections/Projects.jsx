const Projects = () => {
  const projects = [
    {
      title: "Travel Website",
      category: "Frontend",
      image: "/project1.png",
      desc: "A responsive travel website UI built with HTML, CSS and JavaScript.",
    },

    {
      title: "Admin Dashboard",
      category: "Full Stack",
      image: "/project2.png",
      desc: "A modern admin dashboard with analytics and responsive layouts.",
    },

    {
      title: "E-Commerce Website",
      category: "Frontend",
      image: "/project3.png",
      desc: "A clean ecommerce UI with product filtering and cart system.",
    },
  ];

  return (
    <section
      id="projects"
      className="
      py-28
      bg-[#070B14]
      text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center">
          <p className="text-violet-500 uppercase tracking-[4px] font-semibold">
            MY WORK
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6 max-w-3xl mx-auto">
            Here are some of the projects I've worked on.
            Each project is built with clean UI,
            performance and modern technologies.
          </p>

          {/* Line */}
          <div className="w-24 h-1 bg-violet-500 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-14">
          <button className="px-8 py-4 rounded-full bg-violet-600 text-white font-medium">
            All
          </button>

          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-300">
            Frontend
          </button>

          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-300">
            Full Stack
          </button>

          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-300">
            UI/UX
          </button>
        </div>

        {/* Projects Grid */}
        <div
          className="
          mt-20
          grid
          lg:grid-cols-3
          gap-8
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              hover:-translate-y-3
              hover:border-violet-500/40
              transition-all
              duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  // h-[260px]
                  object-cover
                  hover:scale-105
                  transition-all
                  duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">
                
                {/* Category */}
                <span
                  className="
                  inline-block
                  px-4
                  py-2
                  bg-violet-500/10
                  text-violet-400
                  rounded-lg
                  text-sm
                  font-medium
                  "
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-3xl font-semibold mt-6">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-8 mt-6 text-lg">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-5 mt-10">
                  
                  {/* Live Demo */}
                  <button
                    className="
                    flex-1
                    py-4
                    rounded-2xl
                    border
                    border-violet-500/30
                    text-violet-400
                    hover:bg-violet-600
                    hover:text-white
                    transition-all
                    duration-300
                    "
                  >
                    Live Demo
                  </button>

                  {/* GitHub */}
                  <button
                    className="
                    flex-1
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    text-white
                    hover:bg-white/10
                    transition-all
                    duration-300
                    "
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;