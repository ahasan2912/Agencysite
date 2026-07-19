"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoInformation } from "react-icons/io5";
import Image from "next/image";

export default function OurTeamSlider() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [scrollHeight, setScrollHeight] = useState("100vh");

    const teamMembers = [
        { id: 1, name: "Zahid Hasan", role: "Project Manager", image: "/images/zahid_PM_1243x1202.png" },
        { id: 2, name: "Abdul Al Mamun", role: "Full-stack Developer", image: "/images/Abdul_Al_Mamun.png" },
        { id: 3, name: "Najmul Hossain", role: "Backend Developer", image: "/images/Najmul_Hassoin.png" },
        { id: 4, name: "Bodruddoza Khilzee", role: "Frontend Developer", image: "/images/Khilzee.png" },
        { id: 5, name: "Selim Reza", role: "UI/UX Designer", image: "/images/Selim_Reza.png" },
        { id: 6, name: "Fahim Hossain", role: "Senior AI Developer", image: "/images/Fahim.png" },
    ];

    useEffect(() => {
        const updateSlider = () => {
            const section = sectionRef.current;
            const viewport = viewportRef.current;
            const track = trackRef.current;

            if (!section || !viewport || !track) return;

            const maxTranslate = Math.max(track.scrollWidth - viewport.clientWidth, 0);
            const stickyDistance = maxTranslate;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const scrolled = window.scrollY - sectionTop;
            const progress = Math.min(Math.max(scrolled / Math.max(stickyDistance, 1), 0), 1);

            setScrollHeight(`${window.innerHeight + stickyDistance}px`);
            setTranslateX(-maxTranslate * progress);
        };

        updateSlider();
        window.addEventListener("scroll", updateSlider, { passive: true });
        window.addEventListener("resize", updateSlider);

        return () => {
            window.removeEventListener("scroll", updateSlider);
            window.removeEventListener("resize", updateSlider);
        };
    }, []);

    return (
        <div ref={sectionRef} style={{ height: scrollHeight }} className="relative">
            <div ref={viewportRef} className="sticky top-[calc((100vh-420px)/2)] overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex w-max gap-5 will-change-transform"
                    style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                >
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex min-h-105 w-[calc(100vw-56px)] shrink-0 items-stretch relative sm:w-[calc((100vw-96px)/2)] lg:w-85 xl:w-95"
                        >
                            <div className="group relative flex-1 rounded-[20px_20px_0_20px] z-2 mb-3.75 min-h-82.75 overflow-hidden bg-[#C6C6C6]">
                                <div className="relative w-full h-full min-h-101.25">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 640px) calc(100vw - 56px), (max-width: 1024px) 50vw, 380px"
                                        className={`w-full h-full object-cover rounded-[20px_20px_0_20px]`}
                                    />
                                </div>
                                <div className="w-fit absolute bottom-2 left-2 z-20 rounded-lg px-4 py-2 bg-[#b6ef00] text-black">
                                    <h1 className="text-xl font-normal font-federo">{member.name}</h1>
                                    <h2 className="text-[12px] font-medium font-barlow">{member.role}</h2>
                                </div>
                                <div className="absolute -bottom-1.5 -right-1.5 w-22.5 h-22.5 bg-white rounded-tl-[50%] p-3.75 flex items-center justify-center cursor-pointer z-30">
                                    <button
                                        className="relative w-full h-full flex items-center justify-center bg-[#101010] text-white text-3xl rounded-full transition-all duration-500 group-hover:bg-[#b6ef00] group-hover:text-[#101010]"
                                        aria-label={`View ${member.name} details`}
                                    >
                                        <IoInformation />
                                    </button>
                                    <span className="absolute bottom-1.5 -left-5 w-5 h-5 bg-transparent rounded-br-[20px] shadow-[6px_6px_0_6px_#fff]"></span>
                                    <span className="absolute -top-5 right-1.5 w-5 h-5 bg-transparent rounded-br-[20px] shadow-[6px_6px_0_6px_#fff]"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
