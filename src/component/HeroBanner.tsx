"use client";
import { Play } from "lucide-react";
import React, { useState } from "react";
import PopupYoutube from "./PopupYoutube";
import Link from "next/link";

export default function HeroBanner() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div
      id="home" className="bg-cover bg-center bg-no-repeat bg-fixed relative" 
      style={{ backgroundImage: `url('/images/heroImage.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto py-6 h-[100vh] flex items-center justify-between relative z-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#AEEF41]"></div>
            <h4 className="text-white text-[17px] max-w-[735px] font-federo tracking-[2px] font-normal uppercase">
              App Cake Agency
            </h4>
          </div>
          <h1
            className="text-white lg:text-[42px] text-[28px] font-normal mt-3.5 lg:leading-[180%] leading-[180%] tracking-[2px]
        max-w-[735px] lg:tracking-[4px] uppercase font-federo"
          >
            Top-rated Software development Agency
          </h1>
          <Link href='https://www.upwork.com/agencies/1931196426598435363/'>
            <button
              className="text-white text-[15px] font-normal 
        font-federo tracking-wide cursor-pointer py-3 px-9 border border-[#AEEF41] 
        rounded-[40px] uppercase mt-3.5
        hover:border-[#AEEF41] hover:bg-[#AEEF41] hover:text-black 
        hover:-translate-y-[6px] hover:translate-z-[0.01px] transition-all duration-300">View Agency</button>
          </Link>
        </div>
        <div className="relative items-center justify-center mr-24 lg:flex hidden">
          <div
            className="w-[88px] h-[88px] rounded-full border border-[#AEEF41] flex items-center justify-center cursor-pointer z-10"
            onClick={toggleModal}
          >
            <Play color="transparent" fill="#AEEF41" width={50} height={50} />
          </div>

          {/* Circular Text Path */}
          <div className="absolute w-[160px] h-[160px] animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 100, 100
                    m -85, 0
                    a 85,85 0 1,1 170,0
                    a 85,85 0 1,1 -170,0
                  "
                />
              </defs>
              <text fill="white" fontSize="18px" letterSpacing="2px">
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  textAnchor="middle"
                  className="uppercase tracking-[4px]"
                >
                  Android, iOS Mobile App, Ai Web App and Full Stack Developer - Android, iOS Mobile App, Ai Web App and Full Stack Developer
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <PopupYoutube toggleModal={toggleModal} />
      )}
    </div>
  );
}
