"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSlider() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const projects = [
        { id: 1, name: "Rakibul Islam", title: "CEO", image: "/images/Rakibul_Islam.jpg", link: "https://www.upwork.com/freelancers/rakibuli86" },
        { id: 2, name: "Zahid Hasan", title: "Head of Operations", image: "/images/zahid_PM2.png", link: "https://www.linkedin.com/in/mr-zahid-hasan" },
        { id: 3, name: "Farvez Hossen", title: "Business Strategy Manager", image: "/images/Farvez_Hossen.jpg", link: "https://www.upwork.com/freelancers/farvezh" },
    ];

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 639px)");
        const updateScreenSize = () => setIsSmallScreen(mediaQuery.matches);

        updateScreenSize();
        mediaQuery.addEventListener("change", updateScreenSize);

        return () => mediaQuery.removeEventListener("change", updateScreenSize);
    }, []);

    const orderedProjects = isSmallScreen ? [projects[1], projects[2], projects[0]] : projects;

    return (
        <div className="relative group lg:px-0 px-4">
            <Swiper
                key={isSmallScreen ? "small-screen" : "large-screen"}
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="portfolio-swiper"
            >
                {orderedProjects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="relative group/slide cursor-pointer rounded-[20px_20px_0_20px] lg:h-114 h-75.75 mb-7">
                            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/slide:scale-110"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent rounded-[20px]" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end py-10 px-8">
                                <div className="flex items-end justify-between">
                                    <div className="text-white max-w-62.5 font-federo tracking-[2px] leading-[1.4em] uppercase space-y-1.5">
                                        <h1 className="text-[17px]">{project.name}</h1>
                                        <p className="text-[12px] font-barlow">{project.title}</p>
                                    </div>
                                    <div className="absolute bottom-[-6px] right-[-6px] w-[90px] h-[90px] bg-white rounded-tl-[50%] p-[15px] flex items-center justify-center cursor-pointer">
                                        <div
                                            className="relative w-full h-full flex items-center justify-center text-3xl rounded-full transition-all duration-500
                                            bg-[#101010] group-hover/slide:bg-[#b6ef00] text-[#fff] group-hover/slide:text-[#101010]"
                                        >
                                            <Link href={project?.link}><ArrowUpRight className=" transition-all duration-500 group-hover/slide:color-[#101010]" /></Link>
                                        </div>
                                        <span className="absolute bottom-[6px] left-[-20px] w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[10px_6px_0_6px_#fff]"></span>
                                        <span className="absolute top-[-20px] right-[6px] w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[10px_6px_0_6px_#fff]"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
