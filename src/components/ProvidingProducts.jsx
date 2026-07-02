import React from "react";
import aguFamily from '/agu-family.jpg';
import orgLogo from '/org-logo.svg';
import agrShape from '/agr-shape.png';
import boxShape from '/box-shape.svg';

const ProvidingProducts = () => {

  const features = [
    {
      id: 1,
      icon: "./growth 1.svg",
      title: "Our Agriculture Growth",
      description: "Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor.",
    },
    {
      id: 2,
      icon: "./food-icon.svg",
      title: "Making Healthy Foods",
      description: "Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor interdum scelerisque.",
    },
  ];

  return (
    <div className="bg-bg-success w-full overflow-hidden">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2">
        
        {/* ─── left side ─── */}
        <div className="relative w-full h-full md:h-full min-h-[400px] md:min-h-[600px]">
          <img
            src={aguFamily}
            alt="Family Farming"
            className="absolute inset-0 relative w-full h-full object-cover"
          />
          
          <div className="absolute top-6 right-4 md:-right-8 lg:-right-10 w-20 h-20 lg:w-[100px] lg:h-[100px] z-10 drop-shadow-lg">
            <img src={orgLogo} alt="Organic Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* ─── right side ─── */}
        <div className="text-white py-12 md:py-20 lg:py-28 px-5 md:px-8 lg:px-12 flex flex-col justify-center relative">
          
          <div className="absolute top-0 right-0 w-[120px] h-[120px] md:w-[120px] md:h-[120px] lg:w-[205px] lg:h-[208px] opacity-40 md:opacity-100 pointer-events-none">
            <img src={boxShape} alt="Box Shape" className="w-full h-full object-contain" />
          </div>

          <div className="relative z-10 max-w-xl w-full">
            <span className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] block mb-3">
              Modern Agriculture
            </span>

            <h2 className="text-3xl md:text-2xl lg:text-[44px] font-extrabold tracking-tight leading-tight mb-8 md:mb-12">
              Providing High Quality <br className="hidden sm:inline" /> Products
            </h2>

            <div className="space-y-8 md:space-y-10">
              {features.map((item, index) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6 group">
                  
                  <div className="w-16 h-16 md:w-16 md:h-16 lg:w-[90px] lg:h-[90px] rounded-full bg-[#344C31] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 border border-white/5">
                    <img src={item.icon} alt={item.title} className="w-[32px] h-[32px]  lg:w-[45px] lg:h-[45px] object-contain" />
                  </div>

                  <div className="w-full">
                    <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white mb-2 group-hover:text-[#f2be5c] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/80 font-heading text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                    
                    {index !== features.length - 1 && (
                      <div className="w-full h-[1px] bg-white/10 mt-8 md:mt-10"></div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[250px] h-[150px] sm:w-[400px] sm:h-[230px] lg:w-[604px] lg:h-[343px] opacity-20 lg:opacity-30 pointer-events-none mix-blend-overlay">
            <img src={agrShape} alt="Agriculture Shape" className="w-full h-full object-contain object-bottom-right" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProvidingProducts;