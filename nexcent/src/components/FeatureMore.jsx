import React from 'react';

export default function FeatureMore() {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center px-4 md:px-24 py-12 gap-24 bg-white">
      <div className="flex-shrink-0 w-[350px] h-[350px]">
        <img
          src="images/rafiki.svg"
          alt="Feature Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-xl space-y-6 text-center md:text-left">
        <p className="text-2xl font-semibold text-gray-800">
          The unseen of spending three years at Pixelgrade
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo
          ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat
          vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar
          sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae,
          tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="bg-[#4caf4f] hover:scale-105 text-white px-8 py-3 rounded hover:bg-[#43a047] transition-transform duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
}
