import  { useState } from 'react'
import {array} from "./array"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function Slider() {
    const [categories, setCategories]=useState(0);
    const prevSlide =()=>{
        if(categories == 0) return false;
        setCategories(e=>e-2)
    }
    const nextSlide=()=>{
        if(array.length - 6 === categories) return false;
        setCategories(e=>e+2)
    }
  return (
    <div >
        <div className='flex  overflow-hidden rounded-xl ' >
      {array.map((data, index)=>{
        return <div key={index} className='w-[200px] shrink-0 duration-700 select-none' style={{transform: `translateX(-${categories*100}%)`}}>
            <img src={data.image} alt="" />
        </div>
      })};
    </div>
    <div>
        <div className="flex justify-center select-none mt-6 ">
            <div className='cursor-pointer flex justify-center items-center w-[50px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 hover:bg-[#ffa700] hover:text-white' onClick={prevSlide}><FaArrowLeft size={18}/></div>
            <div className='cursor-pointer flex justify-center items-center w-[50px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 hover:bg-[#ffa700] hover:text-white' onClick={nextSlide}><FaArrowRight size={18}/></div>
        </div>
      </div>
    </div>
  )
}
