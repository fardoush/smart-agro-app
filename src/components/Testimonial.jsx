import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Tyrese Gibson",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet risus mus mi commodo volutpat quis neque.",
    },
    {
      id: 2,
      name: "David Miller",
      role: "Organic Farmer",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Exceptional quality and amazing support! Their organic farming methods helped me increase my total crop production by almost double. Highly recommended for sustainable agriculture solutions.",
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "Agribusiness Owner",
      image:
        "https://images.unsplash.com/photo-1689357640539-ae6d005c6ac2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "The professional team provided excellent advice on soil management and modern tractor irrigation systems. It totally transformed our regular cultivation workflow efficiently.",
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Garden Specialist",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "I am absolutely thrilled with their natural agriculture services. They helped design our community vegetable greenhouse, and the fresh harvesting results are absolutely brilliant.",
    },
    {
      id: 5,
      name: "Michael Chang",
      role: "Regular Customer",
      image:
        "https://images.unsplash.com/photo-1681075402179-b1c548054317?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Getting fully fresh and organic vegetables directly from the local farmers has never been this smooth. The purity of the crops is exactly what my family always prefers.",
    },
    {
      id: 6,
      name: "Albert Flores",
      role: "Wheat Exporter",
      image:
        "https://images.unsplash.com/photo-1558154378-b2a14a26da28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote:
        "Their modern harvesting tools and automated workflow made bulk crop storage a breeze. Truly professional service with top-tier agricultural expertise all around.",
    },
  ];

  return (
    <div className="relative bg-primary flex justify-center items-center flex-col py-10 md:py-[60px] lg:pt-[78px] lg:pb-[100px] px-5 md:px-10 overflow-hidden">
      <span className="mb-3 lg:mb-4 text-white text-xs font-semibold tracking-widest opacity-80 uppercase">
        RECENTLY COMPLETED WORK
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-10 lg:mb-[80px] text-white">
        Explore Our Projects
      </h2>

      <div className="w-full max-w-5xl z-10 custom-swiper-pagination">
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
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 24 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper !pb-14"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id} className="bg-transparent">

              <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20 text-left px-2">
                <div className="relative flex-shrink-0 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full border-4 border-transparent shadow-2xl"
                  />
                
                  <div className="absolute top-3 md:top-6 right-4  text-accent ">
                   <FaQuoteLeft size={48}/>

                  </div>
                </div>

                {/* left side */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-white/80 font-medium text-base sm:text-lg leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                  <div>
                    <h3 className="text-white font-bold text-xl tracking-wide mb-0.5">
                      {item.name}
                    </h3>
                    <p className="text-[#e5a93b] text-sm uppercase tracking-wider font-semibold">
                      {item.role}
                    </p>
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
    </div>
  );
};

export default Testimonial;
