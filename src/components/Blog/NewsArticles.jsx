import React from "react";
import BlogCard from "./BlogCard";

const NewsArticles = () => {
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600",
      date: "3 Sep, 2023",
      author: "Kevin Martin",
      comments: 2,
      title:
        "Taking seamless key indicators offline to maximize farming efficiency.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=600",
      date: "12 Sep, 2023",
      author: "Kevin Martin",
      comments: 5,
      title:
        "Override the digital divide with additional holistic agro-tech dev.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600",
      date: "9 Sep, 2023",
      author: "Martin Kevin",
      comments: 1,
      title:
        "Agriculture Matters to the Future of next-generation food supply.",
    },
  ];

  return (
    <section className="bg-primary py-10 md:py-[60px] lg:py-[100px] px-5 sm:px-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 h-[537px] bg-primary-dark h-[537px] w-full">
        <img
          src="./blog-shape.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center flex flex-col items-center ">
          <span className="mb-3 lg:mb-4 text-white text-xs font-semibold tracking-widest opacity-80 uppercase">
            RECENTLY COMPLETED WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8 md:mb-10 lg:mb-[80px] text-white">
            Explore Our Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
