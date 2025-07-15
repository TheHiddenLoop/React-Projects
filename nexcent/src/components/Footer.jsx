import React from "react";
import { Dribbble, Twitter, Youtube, Send, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white px-4 md:px-24 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-4">
          <img src="/images/Logoss.svg" alt="Nexcent Logo" className="h-6" />
          <p className="text-sm text-gray-400">
            Copyright © 2020 Landify UI Kit. <br />
            All rights reserved
          </p>

          <div className="flex gap-4 mt-4">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Dribbble className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-3">Stay up to date</h3>
            <form className="flex items-center bg-gray-600 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-4 py-2 text-sm text-white placeholder-gray-300 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-[#4caf4f] px-3 py-2 flex items-center justify-center hover:bg-[#43a047]"
              >
                <Send size={16} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
