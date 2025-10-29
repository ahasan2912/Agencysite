"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpRight, ChevronLeft, ChevronRight, LayoutTemplate } from "lucide-react";
import Image from "next/image";

export default function OurWorksSlider() {
  const projects = [
    { id: 1, category: "Branding", title: "PRODUCT DESIGN", image: "/images/work__01.png" },
    { id: 2, category: "Web Design", title: "WEBSITE DEVELOPMENT", image: "/images/work__02.png" },
    { id: 3, category: "Branding", title: "BRAND IDENTITY", image: "/images/work__03.png" },
    { id: 4, category: "Web Design", title: "WEBSITE DEVELOPMENT", image: "/images/work__02.png" },
    { id: 5, category: "Branding", title: "BRAND IDENTITY", image: "/images/work__04.png" },
  ];

  return (
    <div className="relative group lg:px-0 px-4 bg-white overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 2.5 },
        }}
        className="portfolio-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="relative group/slide rounded-[20px_20px_0_20px] cursor-pointer lg:h-[500px] h-[303px] bg-black">
              <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover/slide:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-[20px]" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <div className="flex items-end justify-between">
                  {/* <div>
                    <div className="flex items-center gap-1.5 text-[#101010] text-[17px] rounded-[15px_15px_0_0] bg-[rgba(255,255,255,0.7)] w-fit px-2.5 py-1 font-barlow">
                      <LayoutTemplate width={14} height={14} color="#b6ef00" />
                      {project.category}
                    </div>
                    <h3 className="text-[#101010] text-[24px] uppercase font-normal mb-1 font-federo tracking-[2px] bg-[rgba(255,255,255,0.7)] px-2.5 py-3.5 rounded-[0_10px_10px_10px] leading-[1.25em]">
                      {project.title}
                    </h3>
                  </div> */}

                  <div className="absolute bottom-[-6px] right-[-6px] w-[90px] h-[90px] bg-white rounded-tl-[50%] p-[15px] flex items-center justify-center cursor-pointer">
                    <div
                      className="relative w-full h-full flex items-center justify-center text-3xl rounded-full transition-all duration-500
                      bg-[#b6ef00] text-[#101010] group-hover/slide:bg-black group-hover/slide:text-white"
                    >
                      <ArrowUpRight />
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
      <div
        className="prev opacity-0 group-hover:opacity-100 transition-opacity duration-500 
        absolute top-1/2 -translate-y-1/2 left-4 z-20 bg-white/70 hover:bg-white text-[#101010] rounded-full p-2 shadow-md"
      >
        <ChevronLeft color="#101010" strokeWidth={2} />
      </div>
      <div
        className="next opacity-0 group-hover:opacity-100 transition-opacity duration-500 
        absolute top-1/2 -translate-y-1/2 right-4 z-20 bg-white/70 hover:bg-white text-[#101010] rounded-full p-2 shadow-md"
      >
        <ChevronRight color="#101010" strokeWidth={2} />
      </div>
    </div>
  );
}
