import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    "home",
    "about",
    "skills",
    "services",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <header className="  fixed top-0 left-0 w-full z-50 px-4 pt-5">
      <nav
        className={`
        max-w-7xl mx-auto
        flex items-center justify-between
        px-6 lg:px-10
        py-4
        rounded-full
        bg-black/5
        backdrop-blur-xl border border-white/10
        transition-all duration-300
        
        ${scrolled
            ? "bg-black/80"
            : "bg-black/80"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className="
            w-12 h-12
            rounded-2xl
            bg-gradient-to-br
            from-violet-600
            to-indigo-500
            flex items-center justify-center
            text-white text-2xl font-bold
            "
          >
            D
          </div>

          <h1 className="text-white text-2xl font-bold">
            Dheeraj
            {/* <span className="text-violet-500"></span> */}
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                className="
                relative
                text-white/80
                hover:text-violet-400
                font-medium
                capitalize
                cursor-pointer
                transition-all duration-300
                
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-[2px]
                after:bg-violet-500
                after:transition-all
                after:duration-300
                
                hover:after:w-full
                "
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Button */}
        <button
          className="
          hidden lg:flex
          items-center gap-2
          px-6 py-3
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-indigo-500
          text-white
          font-semibold
          hover:scale-105
          transition-all duration-300
          "
        >
          <a href="https://wa.me/919784958368" target="_blank">
            Hire Me
          </a>
          <ArrowRight size={18} />
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          lg:hidden
          mt-4
          max-w-7xl mx-auto
          rounded-3xl
          border border-white/10
          bg-[#0B1120]/95
          backdrop-blur-xl
          p-8
          "
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="
                  text-white/80
                  hover:text-violet-400
                  text-lg
                  capitalize
                  cursor-pointer
                  transition-all duration-300
                  "
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="
            mt-8
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-indigo-500
            text-white
            font-semibold
            "
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;