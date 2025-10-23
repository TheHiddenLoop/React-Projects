import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function Category() {

  const [categories, setCategories]=useState([]);
  const [slide, setSlide]=useState(0);

  const fetchCategory=async()=>{
    const res=await fetch("http://localhost:5000/categories");
    const data=await res.json();
    setCategories(data)
  }

  const nextSlide=()=>{
    if(categories.length-8===slide) return false;
    setSlide(e=>e+3)
  }
  const preSlide=()=>{
    if(slide==0) return false;
    setSlide(e=>e-3)
  }

  useEffect(()=>{
    fetchCategory();
  },[])

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className="flex my-3 items-center justify-between">
        <div className='text-xl'>What's on your mind</div>
        <div className="flex select-none">
            <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={preSlide}><FaArrowLeft /></div>
            <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}><FaArrowRight /></div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat,index)=>{
          return <div key={index} className='select-none w-[150px] shrink-0 duration-700' style={{
            transform: `translateX(-${slide*100}%)`
          }}>
            <img  src={"http://localhost:5000/images/"+cat.image} alt="" />
          </div>
        })}
      </div>
      <hr className='my-[6px] border-[1px]'/>
    </div>
  )
}
