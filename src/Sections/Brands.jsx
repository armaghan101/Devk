import React from 'react'
import b1 from '../assets/devk assets/amazlogo.svg'
import b2 from '../assets/devk assets/dr-logo.svg'
import b3 from '../assets/devk assets/qiblalogo.svg'
import b4 from '../assets/devk assets/rockylogo.svg'

function Brands() {
  return (
    <>
      {/* This style block contains the necessary CSS for the animation 
        and is the only non-markup change made to your original file. 
      */}
      <style>
        {`
          /* Define the animation keyframes */
          @keyframes scroll-logos {
            0% {
              transform: translateX(0); /* Start at the original position */
            }
            100% {
              /* Move left by the width of one full set of logos (4 logos * 150px/logo = 600px) 
                 to create a seamless, infinite loop. */
              transform: translateX(calc(-150px * 4)); 
            }
          }

          /* Target the outer container to hide the scrolling content */
          .brands {
             overflow: hidden; /* **Removes the scrollbar** by hiding content that moves out of bounds */
          }
          
          /* Target the inner logos container to apply the animation */
          .logos {
            /* This width accommodates all 12 logos (12 * 150px = 1800px) on one line */
            width: calc(150px * 12 + 11 * 5px); /* Adjusted to include 11 gaps of 5px */
            /* Apply the animation: 20s duration, linear speed, repeats forever */
            animation: scroll-logos 20s linear infinite; 
            /* Your original code already had overflow-auto, we're overriding it via the parent overflow hidden */
            /* We also remove the overflow-auto utility from the classlist */
          }
        `}
      </style>

      {/* The brands class now implicitly has 'overflow: hidden' from the style block */}
      <h3 className='text-center mb-5'>TRUSTED BY AMAZING BRANDS </h3>
      <div className="brands h-[185px] w-[1280px] bg-[#E6E9ED] m-auto flex justify-center items-center rounded-2xl">
        
        {/* The logos class now implicitly has the animation and increased width */}
        <div className="logos h-[200px] w-[1100px] flex justify-center items-center shrink-0 gap-15 ">
            <img className='w-[200px]' src={b1} alt="" />
            <img className='w-[200px]' src={b2} alt="" />
            <img className='w-[200px]' src={b3} alt="" />
            <img className='w-[200px]' src={b4} alt="" />
            <img className='w-[200px]' src={b1} alt="" />
            <img className='w-[200px]' src={b2} alt="" />
            <img className='w-[200px]' src={b3} alt="" />
            <img className='w-[200px]' src={b4} alt="" />
            <img className='w-[200px]' src={b1} alt="" />
            <img className='w-[200px]' src={b2} alt="" />
            <img className='w-[200px]' src={b3} alt="" />
            <img className='w-[200px]' src={b4} alt="" />
        </div>
      </div>
    </>
  )
}

export default Brands