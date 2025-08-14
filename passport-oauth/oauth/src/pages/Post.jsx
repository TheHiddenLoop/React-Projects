import React from 'react';
import { posts } from '../data';
import { useLocation } from 'react-router-dom';

export function Post() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden p-6">
      <img
        src={post.img}
        alt={post.title || "Post Image"}
        className="w-full h-[300px] object-cover rounded-md mb-6"
      />

      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        {post.title}
      </h1>

      <p className="text-gray-700 text-lg mb-4 leading-6">
        {post.desc}
      </p>

      <p className="text-gray-600 leading-7 whitespace-pre-line">
        {post.longDesc}
      </p>
    </div>
  );
}
