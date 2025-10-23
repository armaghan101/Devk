import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Services", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const NavLink = ({ href, title }) => (
    <li className="relative">
      <a
        href={href}
        className="
          cursor-pointer font-medium text-gray-800
          hover:text-purple-600 transition-colors duration-300
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-[2px] after:w-0 after:bg-purple-600
          after:transition-all after:duration-300
          hover:after:w-full
        "
      >
        {title}
      </a>
    </li>
  );

  return (
    <>
      <nav
        className={`
          w-11/12 max-w-7xl h-[80px] rounded-full
          flex justify-between items-center px-6 md:px-10
          fixed top-5 left-0 right-0 mx-auto z-50
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? 'bg-white/30 backdrop-blur-lg shadow-2xl'
              : 'bg-white/95 shadow-lg'
          }
        `}
      >
        <a href="#" className="logo transform transition-transform hover:scale-105">
          <h3 className="text-3xl font-extrabold text-gray-900">
            <span className="text-purple-600">Dev</span>K
          </h3>
        </a>

        <div className="nav-links hidden md:block">
          <ul className="flex justify-center items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.title} href={link.href} title={link.title} />
            ))}
          </ul>
        </div>

        <button
          className="
            hidden md:block px-6 py-3 bg-purple-600 text-white 
            font-semibold text-base rounded-full shadow-lg
            hover:bg-purple-700 hover:scale-105 hover:shadow-purple-500/30
            active:scale-95
            transform transition-all duration-300 ease-in-out
          "
        >
          Get In Touch
        </button>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenu className="w-8 h-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-white/90 backdrop-blur-xl
          transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`
            fixed top-28 left-1/2 -translate-x-1/2 w-11/12
            bg-white rounded-3xl shadow-2xl p-8
            transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.title} className="w-full text-center">
                <a
                  href={link.href}
                  className="text-2xl font-semibold text-gray-800 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="w-full mt-4">
              <button
                className="
                  w-full px-6 py-4 bg-purple-600 text-white 
                  font-semibold text-lg rounded-full shadow-lg
                  hover:bg-purple-700 active:scale-95
                  transform transition-all duration-300 ease-in-out
                "
              >
                Get In Touch
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}