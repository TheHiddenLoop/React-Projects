import React, { useState } from "react";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleCategoryClick = (category) => {
    onSearch(category);
  };

  return (
    <header className="bg-white shadow-[0_3px_10px_rgba(0,0,0,0.08)] w-full z-10 relative">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center py-4 px-4 md:px-1">
        <div className="text-primary font-bold text-2xl cursor-pointer">
          News<span className="text-accent">Today</span>
        </div>

        <div className="flex items-center gap-3 my-2 md:my-0">
          <input
            type="text"
            placeholder="Search news"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-text border border-secondary rounded-md h-10 w-[200px] md:w-[280px] px-3 outline-none focus:border-primary focus:shadow-[1px_0px_5px_1px_#1e293b]"
          />
          <button
            onClick={handleSearchClick}
            className="bg-primary text-white px-5 py-2 rounded-md hover:bg-hover transition"
          >
            Search
          </button>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 text-text font-medium text-[15px] mt-3 md:mt-0 md:gap-6">
          {["Sports", "Business", "Finance", "Trending", "Technology"].map((item) => (
            <li
              key={item}
              onClick={() => handleCategoryClick(item)}
              className="relative group cursor-pointer font-semibold"
            >
              <span className="hover:text-accent transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
