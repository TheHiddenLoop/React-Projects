import React, { useState } from "react";
import CardSection from "./CardSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Section() {
  const slides = [
    { h1: "Lessons and insights", h2: "from 8 years" },
    { h1: "Grow your business fast", h2: "for free of cost" },
    { h1: "Learn Design and Illustration", h2: "in 4 months" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out min-w-0"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div className="w-screen flex-shrink-0 min-w-0" key={index}>
            <CardSection h1={slide.h1} h2={slide.h2} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 "
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}
