import React from 'react'

export default function LearnMore() {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center px-4 md:px-24 py-12 gap-24 bg-white">
      <div className="flex-shrink-0 w-[350px] h-[350px]">
        <img
          src="images/pana.svg"
          alt="Feature Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-xl space-y-5 text-center md:text-left">
        <p className="text-2xl font-semibold text-gray-800">
          How to design your site footer like we did
        </p>
        <p className="text-gray-600">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="bg-[#4caf4f] hover:scale-105 text-white px-8 py-3 rounded hover:bg-[#43a047] transition-transform duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
}
