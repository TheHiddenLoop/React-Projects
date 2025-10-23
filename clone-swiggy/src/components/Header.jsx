import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";




export default function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };


  const link=[
    {
      icon:<IoIosSearch /> , name: "Search"
    },{
      icon:<BiSolidOffer /> , name: "Offers", sup:"New"
    },{
      icon:<IoHelpBuoyOutline /> , name: "Help"
    },{
      icon:<FaRegUser /> , name: "Sign In"
    },{
      icon:<IoCartOutline /> , name: "Cart"
    }
  ]

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500 "
        onClick={() => setToggle(false)}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex:99999
        }}
      >
        <div
          className="h-full bg-white w-[500px] absolute duration-[400ms]"
          onClick={(e) => e.stopPropagation()}
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-4 shadow-xl sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[40px] mr-5">
            <img src="images/logos.png" alt="" className="w-full" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black cursor-pointer hover:text-[#ff6217]">
              Ratnada 
            </span>{" "}
            <span className="hover:text-[#ff6217]">
              Jodhpur, Rajastan, India
            </span>
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline font-bold text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className="list-none flex gap-4 ml-auto font-semibold text-[18px] ">
                
                {link.map((link,index)=>{
                    return <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">{link.icon} {link.name} {<sup className="text-[#fc8019] ml-[-8px]">{link.sup}</sup>}</li>
                })}
                
          </nav>
        </div>
      </header>
    </>
  );
}
