import React from "react";

import about from "/about.jpg";
import aboutShape from "/about-shape.svg";
import { FaCircleCheck } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="relative bg-primary md:px-10 px-5 ">
      <div className="absolute -top-0 left-0 bg-primary-dark lg:w-[658px] lg:h-[497px] md:w-[458px] md:h-[397px] "></div>
      <div className="max-w-[1440px] mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-5  relative lg:py-[100px] md:py-[60px] py-10">
        {/* Left side  */}
        <div className="pl-0 md:pl-5 lg:pl-0 ">
          <div className="w-full max-w-[564px] aspect-[564/651] relative mb-20 lg:mb-0  ">
            <img
              src={about}
              alt=""
              className="w-full h-full object-cover z-10"
            />
            <div className="absolute bottom-5 md:bottom-8 -left-3 md:-left-4 bg-accent w-3 h-[120px] md:w-4 md:h-[258px] rounded-l-md  "></div>
            <div className="relative flex justify-center items-center">
              <div className="absolute -top-10 md:-top-20  md:w-[428px] w-[96%] bg-bg-success flex md:gap-5 gap-2 py-4 md:py-8 px-6 md:px-9 rounded-lg">
                <div className="w-[76px] h-[70px]">
                  <img src={aboutShape} alt="" className="w-full h-full" />
                </div>
                <div className="border-l-2 border-white/20 "></div>
                <div className=" text-white">
                  <h4 className="font-script text-5xl">86,700</h4>
                  <p className=" text-sm md:text-base font-body">
                    Successfully Project Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side  */}
        <div className="max-w-xl text-white">
          <span className="text-base md:text-xl font-heading uppercase mb-2 md:mb-4">
            Our introduction
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 md:mb-10">
            Pure Agriculture and Organic Form
          </h2>

          <h4 className="text-2xl md:text-3xl text-accent font-body mb-3 md:mb-5">
            We’re Leader in Agriculture Market
          </h4>
          <p className="text-base mx-w-4xl  mb-6 md:mb-12">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humou or
            randomised words even slightly believable.
          </p>

          <div className="space-y-3 text-sm md:text-xl">
            <span className="flex items-center gap-2 md:gap-5">
              <FaCircleCheck className="text-accent" /> Organic food contains
              more vitamins
            </span>
            <span className="flex items-center gap-2 md:gap-5">
              <FaCircleCheck className="text-accent" /> Eat organic because
              supply meets demand
            </span>
            <span className="flex items-center gap-2 md:gap-5">
              <FaCircleCheck className="text-accent" /> Organic food is never
              irradiated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
