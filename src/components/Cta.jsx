import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const Cta = () => {
  return (
    <div className="w-full relative overflow-hidden">
      
      <div className="w-full bg-gradient-to-r from-[#dfc17b] via-[#bfa156] to-[#476945] py-12 md:py-[65px] lg:py-[85px] px-5 md:px-10  relative">
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-40 pointer-events-none z-0"
          style={{
            backgroundImage: `url('./cta.png')`, 
          }}
        ></div>

        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative z-10">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left w-full md:w-auto">
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#203a2a] flex items-center justify-center shrink-0 border border-[#f2be5c]/20 shadow-md">
              <FiTrendingUp className="text-[#f2be5c] text-3xl sm:text-4xl" />
            </div>
          
            <h2 className="text-[#203a2a] text-3xl sm:text-4xl lg:text-[44px] font-script italic font-heading  tracking-wide leading-tight select-none ">
              We are Leader in Agriculture Market
            </h2>
          </div>

          <div className="shrink-0 w-full sm:w-auto text-center">
            <button className="w-full sm:w-auto bg-[#f2be5c] hover:bg-[#e5a93b] text-[#203a2a] font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 sm:py-5 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-[#203a2a]/10">
              Discover More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cta;