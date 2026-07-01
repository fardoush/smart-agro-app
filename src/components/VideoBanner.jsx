import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const VideoBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[450px] md:h-[550px] lg:h-[650px] flex items-center overflow-hidden">
      {/* bg img and overlay  */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2, 48, 20, 0.1), rgba(0, 0, 0, 0.2)), url('/videoBanner.png')`,
        }}
      />

      <div className="max-w-[1440px] mx-auto  px-5 md:px-10 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        {/* right side*/}
        <div className="text-white max-w-lg md:max-w-xl mx-auto md:text-left text-center  ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-md ">
            Agriculture Matters to the Future of Bangladesh
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center md:items-start md:pl-16 lg:pl-32">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full text-green-800 shadow-lg hover:scale-110 transition-all duration-300 focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
            <FaPlay className="text-xl sm:text-2xl ml-1 relative z-10" />
          </button>

          <span className="mt-3 text-accent text-base sm:text-3xl font-normal tracking-wide font-script italic  drop-shadow-sm pointer-events-none">
            Watch the video
          </span>
        </div>
      </div>

      {/* video modal popup  */}
      {isOpen && (
        <div
          //   video modal close
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 transition-opacity duration-300"
        >
          {/* modal content  */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-stone-900 rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* close btn  */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors duration-200"
              aria-label="Close video"
            >
              <IoMdClose className="text-xl sm:text-2xl" />
            </button>

            {/* responsive (16:9 Aspect Ratio) */}
            <div className="aspect-video w-full bg-black">
              {isOpen && (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/hmzXWxpl-Yc?autoplay=1"
                  title="তাজউদ্দীন এগ্রো ফার্ম"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoBanner;
