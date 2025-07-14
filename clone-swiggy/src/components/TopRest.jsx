import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

export default function TopRest() {
  const [slide, setSlide] = useState(0);
  const [datas, setDatas] = useState([]);

  const fetchTopRestaurants = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await res.json();
    setDatas(data);
  };

  useEffect(() => {
    fetchTopRestaurants();
  }, []);

  const cardsPerView = 4;
  const scrollStep = 2;

  const nextSlide = () => {
    if (slide >= datas.length - cardsPerView) return;
    setSlide((e) => e + scrollStep);
  };

  const preSlide = () => {
    if (slide === 0) return;
    setSlide((e) => e - scrollStep);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-xl font-bold mt-2">Top restaurant chains in Chhindwara</div>
        <div className="flex select-none">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={preSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-7"
          style={{
            transform: `translateX(-${slide * 25}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {datas.map((e, i) => (
            <Card {...e} key={i} />
          ))}
        </div>
      </div>

      <hr className="my-3 border-[1px]" />
    </div>
  );
}
