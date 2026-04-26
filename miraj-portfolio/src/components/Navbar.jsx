import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];
  const handleActive = (id) => {
    setIsActive(id);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={` fixed top-0 left-0 right-0 z-50 transition-all  duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container px-2 md:px-4 navbar  mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black/50 backdrop-blur-lg
              rounded-xl z-1 mt-3 w-36 p-2 shadow text-white"
            >
              {links.map((link, indx) => (
                <li key={indx}>
                  <a href={`#${link.id}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center lg:gap-6 md:gap-3 text-white">
            {links.map((link, indx) => (
              <a
                key={indx}
                onClick={() => handleActive(link.id)}
                href={`#${link.id}`}
                className={`hover:text-cyan-300 ${isActive == link.id && "text-cyan-300"}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-end mr-5 md:mr-0 ">
          <a className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-green-300 bg-clip-text text-transparent">
            Miraj Balghari
          </a>
        </div>

    
      </div>
    </motion.div>
  );
}

export default Navbar;
