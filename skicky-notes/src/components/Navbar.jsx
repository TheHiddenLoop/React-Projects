import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function Navbar({ handleAdd }) {
    const colors = [
        { name: "#FFF176", color: "bg-yellow-300" },
        { name: "#FF8A80", color: "bg-red-300" },
        { name: "#81D4FA", color: "bg-blue-300" },
        { name: "#A5D6A7", color: "bg-green-300" },
        { name: "#F48FB1", color: "bg-pink-300" },
        { name: "#CE93D8", color: "bg-purple-300" },
        { name: "#FFCC80", color: "bg-orange-300" },
        { name: "#B0BEC5", color: "bg-gray-300" },
        { name: "#FFD54F", color: "bg-yellow-400" },
        { name: "#90CAF9", color: "bg-blue-200" },
    ];


    const [isSelected, setIsSelected] = useState("#FEF08A");

    const handleClick = (data) => {
        setIsSelected(data);
    };

    return (
        <div className="flex items-center justify-between bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-4 px-24 border-[1px] border-b-gray-300 shadow-sm fixed w-full">
            <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 bg-yellow-300 rounded-md shadow-md rotate-3 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 rotate-45 origin-bottom-right"></div>
                </div>
                <span className="text-xl font-bold text-gray-800">NoteApp</span>
            </div>


            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    {colors.map((e, i) => (
                        <span
                            key={i}
                            onClick={() => handleClick(e.name)}
                            className={`${e.color} h-7 w-7 cursor-pointer inline-block rounded-full ${isSelected === e.name ? "ring-2 ring-blue-800" : ""
                                }`}
                        ></span>
                    ))}
                </div>
                <div onClick={() => handleAdd(isSelected)} className="bg-gray-400 cursor-pointer rounded-full h-7 w-7 flex items-center justify-center text-white font-bold hover:bg-gray-700 active:ring-2 active:ring-blue-800">
                    <Plus size={20} />
                </div>
            </div>
        </div>
    );
}
