import React from "react";

const FoodCard = ({ food }) => {
  const { img, title } = food;
  return (
    <div className="relative overflow-hidden group  text-white bg-[#D9D9D9]/10 p-[36px] rounded-2xl flex flex-col items-center">
        {/* overlay  */}
        <div className="absolute inset-0 bg-accent  translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0"></div>
      <div className="w-[56px] h-[60px] mb-5 z-2">
        <img src={img} alt="" className=" w-full h-full " />
      </div>
      <span className="text-lg  group-hover:text-black duration-500 font-body font-semibold z-2">{title}</span>
    </div>
  );
};

export default FoodCard;
