import React, { useState } from "react";
import { Menu, MoveRight, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-xl">
      <div className="flex justify-between items-center px-4 md:px-24 py-4">
        <img src="/images/Logo.png" alt="Site Logo" className="h-5" />

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-gray-700 font-semibold">
            <li className="cursor-pointer hover:text-[#43a047]">Home</li>
            <li className="cursor-pointer hover:text-[#43a047]">Features</li>
            <li className="cursor-pointer hover:text-[#43a047]">Communities</li>
            <li className="cursor-pointer hover:text-[#43a047]">Blog</li>
            <li className="cursor-pointer hover:text-[#43a047]">Pricing</li>
          </ul>
          <button className="bg-[#4caf4f] text-white px-4 py-2 rounded hover:bg-[#43a047] transition">
            Register Now <MoveRight className="inline" />
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-[65px] left-0 w-full bg-white shadow-md z-50 md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-[#43a047]">Home</li>
            <li className="cursor-pointer hover:text-[#43a047]">Features</li>
            <li className="cursor-pointer hover:text-[#43a047]">Communities</li>
            <li className="cursor-pointer hover:text-[#43a047]">Blog</li>
            <li className="cursor-pointer hover:text-[#43a047]">Pricing</li>
          </ul>
          <button className="mt-4 w-full bg-[#4caf4f] text-white px-4 py-2 rounded hover:bg-[#43a047] transition">
            Register Now <MoveRight className="inline" />
          </button>
        </div>
      )}

    </div>
  );
}
