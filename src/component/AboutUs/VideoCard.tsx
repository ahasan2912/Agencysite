"use client";
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import PopupYoutube from "../PopupYoutube";

export default function VideoCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div className="relative rounded-[20px_20px_20px_0] overflow-hidden isolate group">
        {/* Background Image */}
        <img
          src="https://shthemes.net/demosd/dagency/wp-content/uploads/2025/05/about.jpg"
          alt="About Video"
          className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-40% to-transparent rounded-[20px_20px_0_20px] z-0"></div>

        {/* Play Icon Box */}
        <div
          onClick={() => setIsOpen(true)}
          className="absolute bottom-[-6px] left-[-6px] w-[90px] h-[90px] bg-white rounded-tr-[50%] p-[15px] cursor-pointer"
        >
          <div className="flex items-center justify-center w-full h-full bg-[#101010] rounded-full group-hover:bg-[#b6ef00] transition-colors duration-300">
            <Play className="text-white w-6 h-6 group-hover:text-[#101010] transition-colors duration-300" />
          </div>

          {/* Corner pseudo-elements */}
          <div className="absolute top-[-20px] left-[6px] w-[20px] h-[20px] rounded-br-[20px] shadow-[6px_6px_0_6px_#fff] rotate-90"></div>
          <div className="absolute bottom-[6px] right-[-20px] w-[20px] h-[20px] rounded-br-[20px] shadow-[6px_6px_0_6px_#fff] rotate-90"></div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <PopupYoutube toggleModal={() => setIsOpen(false)} />
      )}
    </>
  );
}
