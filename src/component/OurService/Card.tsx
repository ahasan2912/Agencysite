import React, { useState } from "react";
import { IService } from "@/types/service.type";

export default function Card({ service }: { service: IService }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative bg-[#f0f0f3] rounded-[20px_20px_0_20px] p-[50px_40px_90px_40px] z-[2] mb-[15px] min-h-[380px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Text Content */}
            <div className="text">
                <h3 className="text-[19px] font-semibold mb-4 tracking-[2px] font-federo group-hover:text-black text-gray-800 ">
                    {service.title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: service.description }} />
            </div>

            {/* Icon */}
            <div className="absolute bottom-[-6px] right-[-6px] w-[90px] h-[90px] bg-white rounded-tl-[50%] p-[15px] flex items-center justify-center cursor-pointer">
                <div className={`relative w-full h-full flex items-center justify-center text-3xl rounded-full transition-all duration-500
                    ${hovered ? "bg-[#b6ef00] text-[#101010] transition-all duration-300" : "bg-[#101010] text-white transition-all duration-300"}`}>
                    {hovered ? service.hoverIcon : service.icon}
                </div>
                <span className="absolute bottom-[6px] left-[-20px] w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[6px_6px_0_6px_#fff]"></span>
                <span className="absolute top-[-20px] right-[6px] w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[6px_6px_0_6px_#fff]"></span>
            </div>
        </div>
    );
}
