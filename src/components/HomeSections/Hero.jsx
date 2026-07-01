import React from "react";
import banner from "/image.jpg";
import lineShape from "/line-shape.svg";
import leafShape from "/leaf-shape.svg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px]">
      <img
        src={banner}
        alt=""
        className="absolute  w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#263C28]/5 via-[#263C28]/10 to-black/6"></div>
      <div className="relative z-10 max-w-[1440px] mx-auto h-full flex  items-center px-4 sm:px-5 lg:px-5">
        <div className="max-w-2xl">
          {/* Small Title */}
          <div
            className="relative 
          md:inline-block block  mb-4"
          >
            <p className="relative text-white text-2xl  font-heading font-bold ">
              Original & Natural
            </p>
            <img src={lineShape} alt="" className="absolute -bottom-0 left-0" />
          </div>

          {/* Heading */}
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight font-body">
              <div className="absolute -right-4.5 md:-right-2.5 -top-9 md:-top-6.5">
                <img src={leafShape} alt="" className=" w-full h-full" />
              </div>
              <span className="text-[#F6C453]">Agriculture Matter</span>
              <br />
              <span className="text-white">Good production</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-200 mt-6 text-base md:text-lg leading-7 md:max-w-xl w-full font-heading">
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he speedily.
          </p>

          {/* Button */}
          {/* <button className="mt-8 md:px-11 md:py-5 px-8 py-3 bg-[#F6C453] rounded-full text-black font-body font-semibold hover:bg-yellow-500 duration-300">
            DISCOVER MORE
          </button> */}
          <button
              type="submit"
              className="mt-8 bg-[#f2be5c] hover:bg-[#e5a93b] text-primary-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 sm:py-5 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              DISCOVER MORE
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
