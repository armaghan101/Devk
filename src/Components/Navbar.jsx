import React, { useState, useEffect } from "react";

/**
 * Navbar Component
 * * This component renders a navigation bar that is fixed to the top.
 * It starts with a solid background and transitions to a glassmorphism
 * effect (semi-transparent blurred background) when the user scrolls down.
 */
export default function Navbar() {
  // State to track whether the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Set 'scrolled' to true if user has scrolled more than 10px, else false
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <nav 
        className={`
          text-black w-[1280px] h-[80px] rounded-full m-auto 
          flex justify-between items-center px-10
          fixed top-5 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${scrolled 
            ? 'bg-white/30 backdrop-blur-lg shadow-lg'  // Glassmorphism styles when scrolled
            : 'bg-[#CBD0D6]'                           // Original style when at top
          }
        `}
      >
        <div className="logo">
          <h3 className="text-3xl font-extrabold"><span className="text-purple-600">Dev</span>K</h3>
        </div>
        <div className="nav-links">
          <ul className="flex justify-center items-center gap-7">
            {/* Added cursor-pointer for better UX */}
            <li className="cursor-pointer font-medium hover:text-purple-600 transition-colors">Home</li>
            <li className="cursor-pointer font-medium hover:text-purple-600 transition-colors">Services</li>
            <li className="cursor-pointer font-medium hover:text-purple-600 transition-colors">About</li>
            <li className="cursor-pointer font-medium hover:text-purple-600 transition-colors">Contact</li>
          </ul>
        </div>
        <button className="px-6 py-3 bg-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
          Get In Touch
        </button>
      </nav>
    </>
  );
}

