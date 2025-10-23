import React from 'react'
import b1 from '../assets/devk assets/amazlogo.svg'
import b2 from '../assets/devk assets/dr-logo.svg'
import b3 from '../assets/devk assets/qiblalogo.svg'
import b4 from '../assets/devk assets/rockylogo.svg'

// Store brands in an array for cleaner code (DRY principle)
// This makes it easy to add or remove logos in one place.
const brandLogos = [
  { src: b1, alt: 'Amazon' },
  { src: b2, alt: 'Dr. Logo' }, // Assuming 'dr-logo' is its name
  { src: b3, alt: 'Qibla Finder' }, // Assuming from 'qiblalogo'
  { src: b4, alt: 'Rocky' }, // Assuming from 'rockylogo'
];

/**
 * Brands Component
 * Renders a clean, responsive, and infinitely-scrolling marquee
 * of trusted brand logos.
 */
function Brands() {
  return (
    <>
      {/* This style block contains the CSS for the marquee animation 
        and the fade-out mask effect.
      */}
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            /* We animate to -50% because the .animate-marquee container
              holds two identical sets of logos (width: 200%).
              Moving it 50% left shifts it by exactly one full set.
            */
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: 200%; /* Contains two sets of logos */
            animation: infinite-scroll 40s linear infinite;
          }

          /* Pause animation on hover */
          .animate-marquee:hover {
            animation-play-state: paused;
          }

          /* This container provides the 'overflow: hidden' 
            and the fade-out effect on the edges.
          */
          .marquee-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            /* CSS Mask for fading edges */
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }
          
          .logo-set {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 50%; /* Each set takes up 50% of the parent */
            flex-shrink: 0;
          }
        `}
      </style>

      {/* Main component wrapper */}
      <div className="w-full bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Title */}
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-600 tracking-wide uppercase">
            Trusted by amazing brands
          </h2>
          
          {/* The marquee-container provides the overflow-hidden
            and the fade-out mask effect.
          */}
          <div className="marquee-container mt-12">
            
            {/* This div holds *both* sets of logos and is what
              actually moves.
            */}
            <div className="animate-marquee">
              
              {/* Set 1: Rendered from the array */}
              <div className="logo-set">
                {brandLogos.map((logo, index) => (
                  <img
                    key={`logo-set1-${index}`}
                    className="
                      max-h-12 w-auto object-contain
                      grayscale opacity-75
                      hover:grayscale-0 hover:opacity-100 hover:scale-105
                      transition-all duration-300 ease-in-out
                    "
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>

              {/* Set 2: An identical copy for the seamless loop.
                'aria-hidden' is added for accessibility.
              */}
              <div className="logo-set" aria-hidden="true">
                {brandLogos.map((logo, index) => (
                  <img
                    key={`logo-set2-${index}`}
                    className="
                      max-h-12 w-auto object-contain
                      grayscale opacity-75
                      hover:grayscale-0 hover:opacity-100 hover:scale-105
                      transition-all duration-300 ease-in-out
                    "
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands