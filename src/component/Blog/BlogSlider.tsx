"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BlogSlider() {
    const projects = [
        { id: 1, category: "Branding", title: "PRODUCT DESIGN", image: "/images/app__indus__01.jpg" },
        { id: 3, category: "Branding", title: "BRAND IDENTITY", image: "/images/app__indus__03.png" },
        { id: 4, category: "UI/UX", title: "MOBILE APP", image: "/images/app__indus__04.png" },
        { id: 5, category: "UI/UX", title: "MOBILE APP", image: "/images/app__indus__05.png" }
    ];

    return (
        <div className="relative group lg:px-0 px-4">
            <Swiper
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
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="relative group/slide cursor-pointer rounded-[20px_20px_0_20px] lg:h-[456px] h-[303px] mb-7">
                            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/slide:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-[20px]" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end p-10">
                                <div className="flex items-end justify-between">
                                    <div className="text-white max-w-[250px] text-[17px] font-federo tracking-[2px] leading-[1.4em] uppercase">
                                        App Industries
                                    </div>
                                    <div className="absolute bottom-[-6px] right-[-6px] w-[90px] h-[90px] bg-white rounded-tl-[50%] p-[15px] flex items-center justify-center cursor-pointer">
                                        <div
                                            className="relative w-full h-full flex items-center justify-center text-3xl rounded-full transition-all duration-500
                                            bg-[#101010] group-hover/slide:bg-[#b6ef00] text-[#fff] group-hover/slide:text-[#101010]"
                                        >
                                            <ArrowUpRight className=" transition-all duration-500 group-hover/slide:color-[#101010]" />
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
