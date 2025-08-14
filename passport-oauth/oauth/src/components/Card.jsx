import React from 'react';
import {Link} from "react-router-dom"
export function Card({ post }) {
  return (
    <div className="shadow-md w-[30%] rounded-md p-4 bg-white hover:shadow-lg transition duration-300">
      <Link className="link" to={`/post/${post.id}`}>
      <h2 className="text-lg font-semibold text-gray-900 truncate mb-2">
        {post.title}
      </h2>

      <img
        src={post.img}
        alt={post.title || "Post Image"}
        className="w-full h-[200px] object-cover rounded-md mb-4"
      />

      <p className="text-gray-700 mb-4 leading-6 line-clamp-3">
        {post.desc}
      </p>

      <button className="rounded-md px-4 py-2 bg-purple-700 text-white hover:bg-purple-800 transition duration-200">
        Read More
      </button>
      </Link>
    </div>
  );
}
