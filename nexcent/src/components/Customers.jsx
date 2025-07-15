import { MoveRight } from "lucide-react";
import React from "react";

export default function Customers() {
  const logos = [
    "/images/Logo.svg",
    "/images/Logo (1).svg",
    "/images/Logo (2).svg",
    "/images/Logo (3).svg",
    "/images/Logo (4).svg",
    "/images/Logo (5).svg",
    "/images/Logo (6).svg",
  ];

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center px-4 md:px-24 py-12 gap-24 bg-[#f5f7fa]">
      <div className="flex-shrink-0 w-[350px] h-[350px]">
        <img
          src="images/image 9.png"
          alt="Feature Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-xl space-y-5 text-center md:text-left">
        <p className="text-gray-600 text-sm">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-2xl font-semibold text-[#4caf4f]">Tim Smith</p>
        <p className="text-gray-600">British Dragon Boat Racing Association</p>
        <div className="flex items-center justify-between flex-wrap gap-4 md:gap-6">
          <div className="flex items-center gap-4 md:gap-5">
            {logos.map((e, i) => (
              <img key={i} src={e} alt="logo" className="w-[33px] h-[33px]" />
            ))}
          </div>
          <p className="text-[#4caf4f] font-semibold cursor-pointer whitespace-nowrap">
            Meet All Customers<MoveRight className="inline" />
          </p>
        </div>
      </div>
    </div>
  );
}
