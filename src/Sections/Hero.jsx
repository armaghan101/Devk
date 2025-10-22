import React from "react";

function Hero() {
  return (
    <>
      <section className="hero h-[763px] flex flex-col justify-center items-center text-center">
        <div className="text">
          <h3 className="text-black text-[72px] font-[700] mb-8 text-base/18">
            We only <span className="text-purple-600">teach</span> <span><i class="ri-presentation-line"></i></span> <br /> What
            we are really <br /> really <span className="text-purple-600">good</span> at
          </h3>
          <p className="text-[20px] mb-8">
            At Devk, we build custom websites, SaaS platforms, mobile <br />{" "}
            apps, and digital marketing systems that increase revenue and drive{" "}
            <br /> sustainable business growth.
          </p>
        </div>
        <div className="buttons space-x-5 flex justify-center items-center">
          <button className="px-8 py-4 bg-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
            Get Started Today
          </button>
          <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold text-lg rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
            Discover More
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
