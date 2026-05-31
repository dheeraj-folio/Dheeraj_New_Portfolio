const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      desc: "I build fast, responsive and user-friendly websites using modern technologies like React and Tailwind CSS.",
      color: "violet",
      icon: "</>",
    },

    {
      title: "UI/UX Design",
      desc: "I design clean, modern and intuitive user interfaces with better user experience.",
      color: "blue",
      icon: "UI",
    },

    {
      title: "API Development",
      desc: "I create secure and scalable API integrations for modern web applications.",
      color: "green",
      icon: "API",
    },

    {
      title: "Responsive Design",
      desc: "I build fully responsive websites that work perfectly on all devices.",
      color: "orange",
      icon: "RD",
    },
  ];

  return (
    <section
      id="services"
      className="
      py-28
      bg-[#070B14]
      text-white
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0
      //  w-[300px] h-[300px]
       bg-violet-700/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="text-center">
          <p className="text-violet-500 uppercase tracking-[4px] font-semibold">
            WHAT I DO
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            My Services
          </h2>

          <p className="text-gray-400 text-lg leading-8 mt-6 max-w-2xl mx-auto">
            I build high-quality digital solutions
            that help businesses grow and succeed.
          </p>

          {/* Line */}
          <div className="w-24 h-1 bg-violet-500 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Cards */}
        <div
          className="
          mt-20
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              backdrop-blur-xl
              hover:-translate-y-3
              hover:border-violet-500/40
              transition-all
              duration-300
              group
              "
            >
              {/* Icon */}
              <div
                className={`
                w-24
                h-24
                rounded-3xl
                border
                flex
                items-center
                justify-center
                text-3xl
                font-bold
                mb-10
                
                ${
                  service.color === "violet"
                    ? "border-violet-500 text-violet-400"
                    : ""
                }

                ${
                  service.color === "blue"
                    ? "border-blue-500 text-blue-400"
                    : ""
                }

                ${
                  service.color === "green"
                    ? "border-green-500 text-green-400"
                    : ""
                }

                ${
                  service.color === "orange"
                    ? "border-orange-500 text-orange-400"
                    : ""
                }
                `}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold leading-snug">
                {service.title}
              </h3>

              {/* Line */}
              <div
                className={`
                w-16
                // h-[3px]
                rounded-full
                mt-6
                
                ${
                  service.color === "violet"
                    ? "bg-violet-500"
                    : ""
                }

                ${
                  service.color === "blue"
                    ? "bg-blue-500"
                    : ""
                }

                ${
                  service.color === "green"
                    ? "bg-green-500"
                    : ""
                }

                ${
                  service.color === "orange"
                    ? "bg-orange-500"
                    : ""
                }
                `}
              ></div>

              {/* Description */}
              <p className="text-gray-400 leading-9 text-lg mt-8">
                {service.desc}
              </p>

              {/* Button */}
              <button
                className={`
                mt-10
                text-lg
                font-semibold
                flex
                items-center
                gap-3
                
                ${
                  service.color === "violet"
                    ? "text-violet-400"
                    : ""
                }

                ${
                  service.color === "blue"
                    ? "text-blue-400"
                    : ""
                }

                ${
                  service.color === "green"
                    ? "text-green-400"
                    : ""
                }

                ${
                  service.color === "orange"
                    ? "text-orange-400"
                    : ""
                }
                `}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;