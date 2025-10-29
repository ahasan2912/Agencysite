"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoInformation } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TeamMember } from "@/types/team.type";
import Image from "next/image";

export default function OurTeamSlider() {
    const teamMembers = [
        { id: 1, name: "Abdur Rakib Rafi", role: "Mobile App Developer", image: "/images/member-1.png" },
        { id: 2, name: "Uzzal Bhowmik", role: "Front End Developer", image: "/images/member-2.png" },
        { id: 3, name: "Minhaz Sharif Akash", role: "UX/UI Designer", image: "/images/member-3.png" },
        { id: 4, name: "Ahad Hossain Aiman", role: "Back End Developer", image: "/images/member-4.png" },
        { id: 5, name: "Abdur Rakib Rafi", role: "Mobile App Developer", image: "/images/member-1.png" },
        { id: 6, name: "Minhaz Sharif Akash", role: "UX/UI Designer", image: "/images/member-3.png" },
    ];

    const [activeMemberId, setActiveMemberId] = useState<number | null>(null);
    const [memberInfo, setMemberInfo] = useState<TeamMember | null>(null);

    const toggleMode = (id: number) => {
        if (activeMemberId === id) {
            setActiveMemberId(null);
            setMemberInfo(null);
        } else {
            const memberInformation = teamMembers.find((member) => member.id === id) || null;
            setActiveMemberId(id);
            setMemberInfo(memberInformation);
        }
    };

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1150: { slidesPerView: 2, spaceBetween: 20 },
                1250: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="team-swiper"
        >
            {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                    <div className="flex w-full min-h-[420px] items-stretch relative">
                        <div className="group relative flex-1 rounded-[20px_20px_0_20px] bg-[#f0f0f3]  z-[2] mb-[15px] min-h-[331px] overflow-hidden">
                          <div className="w-[290px] h-auto aspect-[290/331]">
                              <Image
                                src={member.image}
                                alt={member.name}
                               fill
                                className="w-full h-full object-contain rounded-[20px_20px_0_20px]"
                            />
                          </div>
                            {activeMemberId === member.id && (
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] animate-fadeIn z-10"></div>
                            )}
                            {activeMemberId === member.id && memberInfo && (
                                <div className="w-fit absolute bottom-1 left-1 z-20 rounded-lg px-4 py-2 bg-[#b6ef00] text-black animate-slideUp">
                                    <h1 className="text-xl font-normal font-federo">{memberInfo.name}</h1>
                                    <h2 className="text-[12px] font-normal font-barlow">{memberInfo.role}</h2>
                                </div>
                            )}
                            <div className="absolute bottom-[-6px] right-[-6px] w-[90px] h-[90px] bg-white rounded-tl-[50%] p-[15px] flex items-center justify-center cursor-pointer z-30">
                                <button
                                    onClick={() => toggleMode(member.id)}
                                    className="relative w-full cursor-pointer h-full flex items-center justify-center bg-[#101010] text-white text-3xl rounded-full transition-all duration-500 group-hover:bg-[#b6ef00] group-hover:text-[#101010]"
                                >
                                    <IoInformation />
                                </button>
                                <span className="absolute bottom-[6px] left-[-20px] w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[6px_6px_0_6px_#fff]"></span>
                                <span className="absolute top-[-20px] right-[6px] w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[6px_6px_0_6px_#fff]"></span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
