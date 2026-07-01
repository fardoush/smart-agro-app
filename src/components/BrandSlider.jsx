import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const BrandSlider = () => {

    const logoData = [
    { id: 1, image: "/logo3.svg" },
    { id: 2, image: "/logo3.svg" },
    { id: 3, image: "/logo3.svg" },
    { id: 4, image: "/logo3.svg" },
    { id: 5, image: "/logo3.svg" },
    { id: 6, image: "/logo3.svg" },
    { id: 7, image: "/logo3.svg" },
    { id: 8, image: "/logo3.svg" },
  ];

  return (
    <div className="bg-primary border-t-1 border-white/20 py-10 md:py-[60px] lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto">

        <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={20}
        speed={3500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50, 
            },
          }}
        modules={[Autoplay]}
        className="mySwiper unique-brand-swiper"
      >
        {logoData.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="w-full h-[60px] flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={logo.image}
                  alt="brand logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        
      </Swiper>

      </div>
      <style jsx global>{`
        .unique-brand-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default BrandSlider;
