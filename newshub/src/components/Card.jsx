import React from 'react';

export default function Card({ image, title, description, onclick }) {
  return (
    <div className="w-full max-w-[320px] h-[300px] rounded-xl bg-white shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={image || "placeholder.svg"}
          alt="News"
          className="w-full cursor-pointer h-[200px] object-cover rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={onclick}
        />
      </div>

      <div className="p-2">
        <p className="text-text font-semibold text-base leading-snug line-clamp-2">
          {title || "No Title Available"}
        </p>
        {description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
