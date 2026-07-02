import React from "react";

import { FiUser, FiMessageSquare } from "react-icons/fi";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-[#1e3325] rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-white/5">
      <div className="relative overflow-hidden shrink-0 text-white">
        <img
          src={post.image}
          alt={post.title}
          className="w-full md:h-[240px] h-auto object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute bottom-0 right-0 bg-[#f2be5c] text-[#203a2a] text-xs font-bold px-3 py-1.5 rounded-tl-lg shadow-md uppercase tracking-wider">
          {post.date}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-5 text-white text-xs sm:text-sm mb-4">
            <span className="flex items-center gap-1.5 hover:text-[#f2be5c] cursor-pointer transition-colors">
              <FiUser className="text-[#f2be5c]" /> by {post.author}
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#f2be5c] cursor-pointer transition-colors">
              <FiMessageSquare className="text-[#f2be5c]" /> {post.comments}{" "}
              Comments
            </span>
          </div>

          <h3 className="text-white font-sans text-lg sm:text-xl font-bold leading-snug cursor-pointer group-hover:text-[#f2be5c] transition-colors duration-300 line-clamp-2 mb-4">
            {post.title}
          </h3>
        </div>

        {/* <div className="pt-2">
          <span className="text-[#f2be5c] text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-1 group-hover:underline cursor-pointer">
            Read More &rarr;
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
