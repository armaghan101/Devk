import React from "react";
// Import a 'solid' icon for a stronger presence
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <>
      {/* - Use min-h-screen to make the section fill the screen height.
        - Use 'pt-24 pb-32' for spacing, assuming a navbar is present.
        - 'px-6' adds side padding, responsive by default.
      */}
      <section className="hero w-full min-h-screen flex flex-col justify-center items-center text-center bg-white px-6 py-24 sm:py-32">
        
        {/* Text container with max-width for readability */}
        <div className="text max-w-4xl mx-auto">
          {/* - Responsive font sizes (e.g., text-4xl up to lg:text-7xl).
            - 'font-extrabold' for a strong impact.
            - 'tracking-tight' and 'leading-tight' for modern typography.
          */}
          <h1 className="text-black text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-tight">
            We only <span className="text-purple-600">teach</span>
            {/* - Use the imported React icon.
              - 'inline-block' and 'mx-2' for spacing.
              - 'align-baseline' to match the text flow.
            */}
            <PresentationChartLineIcon className="h-10 w-10 lg:h-16 lg:w-16 text-purple-600 inline-block mx-2 align-baseline" />
            What we are really, really <span className="text-purple-600">good</span> at
          </h1>
          {/* - Standard 'text-xl' with a softer 'text-gray-600' color.
            - Responsive 'max-w-3xl' to control line length.
            - Removed <br /> tags for natural text flow.
          */}
          <p className="mt-8 text-lg sm:text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            At Devk, we build custom websites, SaaS platforms, mobile
            apps, and digital marketing systems that increase revenue and drive
            sustainable business growth.
          </p>
        </div>
        
        {/* - Button container stacks vertically on mobile ('flex-col')
          - Switches to horizontal ('sm:flex-row') on small screens and up.
          - 'gap-6' provides consistent spacing in both layouts.
        */}
        <div className="buttons mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="
            px-8 py-4 bg-purple-600 text-white font-semibold 
            text-lg rounded-full shadow-lg 
            transform transition-all duration-300 ease-in-out
            hover:bg-purple-700 hover:scale-105 hover:shadow-purple-500/30
            active:scale-95
          ">
            Get Started Today
          </button>
          <button className="
            px-8 py-4 border-2 border-purple-600 text-purple-600 
            font-semibold text-lg rounded-full
            transform transition-all duration-300 ease-in-out
            hover:bg-purple-600 hover:text-white hover:scale-105
            active:scale-95
          ">
            Discover More
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
