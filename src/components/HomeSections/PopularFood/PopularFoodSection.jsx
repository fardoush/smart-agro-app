import React from "react";
import FoodCard from "./FoodCard";

const PopularFoodSection = () => {
  const foods = [
    {
      id: 1,
      img: "./Icon_Apple.svg",
      title: "Apple",
    },
    {
      id: 2,
      img: "./blueberry 2.svg",
      title: "Blueberry",
    },
    {
      id: 3,
      img: "./icon-Strawberry.svg",
      title: "Strawberry",
    },
    {
      id: 4,
      img: "./eggplant.svg",
      title: "Eggplant",
    },
    {
      id: 5,
      img: "./cabbage.svg",
      title: "Cabbage",
    },
    {
      id: 6,
      img: "./carrot.svg",
      title: "carrot",
    },
  ];

  return (
    <div className="bg-primary  flex justify-center items-center  flex-col pt-10 md:pt-[60px] lg:pt-[78px] pb-10 md:pb-[60px] lg:pb-[100px] px-5 md:px-10">
      <span className="mb-3 lg:mb-5 text-white">Popular Foods And Vegetables</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl  text-center font-bold mb-10 lg:mb-[80px] text-white">Quality Fruits & Vegetables</h2>

      <div className="grid gap-5 md:gap-8  grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default PopularFoodSection;
