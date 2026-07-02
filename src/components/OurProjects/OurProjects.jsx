import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import projectShape from "/project-shape.png";
import { FaArrowRightLong } from "react-icons/fa6";

const productSlider = [
  {
    id: 1,
    sliderImg: "./slider1.jpg",
    "sub-title": "Agriculture",
    title: "Modern Tractor Cultivation",
  },
  {
    id: 2,
    sliderImg: "./slider2.jpg",
    "sub-title": "Organic Farming",
    title: "Natural Way Of Agriculture",
  },
  {
    id: 3,
    sliderImg: "./slider3.jpg",
    "sub-title": "Fresh Produce",
    title: "Healthy Vegetables Market",
  },
  {
    id: 4,
    sliderImg: "./slider4.jpg",
    "sub-title": "Farming Tech",
    title: "Automated Wheat Harvesting",
  },
  {
    id: 5,
    sliderImg: "./slider5.jpg",
    "sub-title": "Agriculture",
    title: "Golden Wheat Field Crop",
  },
  {
    id: 6,
    sliderImg: "./slider6.jpg",
    "sub-title": "Agribusiness",
    title: "Innovative Farming Methods",
  },
  {
    id: 7,
    sliderImg: "./slider7.jpg",
    "sub-title": "Farming Life",
    title: "Beautiful Sunset Green Field",
  },
  {
    id: 8,
    sliderImg: "./slider8.jpg",
    "sub-title": "Heavy Machinery",
    title: "Industrial Combine Harvester",
  },
  {
    id: 9,
    sliderImg: "./slider9.jpg",
    "sub-title": "Organic Farming",
    title: "Fresh Corn Plantation Crops",
  },
  {
    id: 10,
    sliderImg: "./slider10.jpg",
    "sub-title": "Eco Friendly",
    title: "Sustainable Field Agriculture",
  },
];

const OurProjects = () => {
  return (
    <div className="relative bg-primary flex justify-center items-center flex-col py-10 md:py-[60px] lg:pt-[78px] lg:pb-[100px] px-5 md:px-10 overflow-hidden">
      <span className="mb-3 lg:mb-4 text-white text-xs font-semibold tracking-widest opacity-80 uppercase">
        RECENTLY COMPLETED WORK
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-10 lg:mb-[80px] text-white">
        Explore Our Projects
      </h2>

      <div className="w-full max-w-[1440px] z-10 custom-swiper-pagination">
        <Swiper
          spaceBetween={24}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper !pb-14"
        >
          {productSlider.map((slider) => (
            <SwiperSlide key={slider.id}>
              {/* card contain*/}
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-transparent hover:border-[#e5a93b] transition-all duration-500 cursor-pointer shadow-lg">
                {/* img */}
                <img
                  src={slider.sliderImg}
                  alt={slider.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* overly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* content */}
                <div className="absolute bottom-0 left-0 p-6 w-full text-left transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="text-[#e5a93b] text-xs font-bold uppercase tracking-wider block mb-1">
                    {slider["sub-title"]}
                  </span>
                  <div className="flex justify-between items-end gap-2">
                    <h3 className="text-white font-bold text-lg md:text-xl leading-tight max-w-[85%]">
                      {slider.title}
                    </h3>
                    {/* arrow btn */}
                    <span className="text-[#e5a93b] text-xl transform translate-x-[-5px] group-hover:translate-x-0 transition-transform duration-300">
                      <FaArrowRightLong/>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* pagination dot style  */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.4;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #e5a93b !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
      {/* bg shape  */}
      <div className="absolute bottom-0 left-0 w-full h-[439px] pointer-events-none ">
        <img src={projectShape} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default OurProjects;
