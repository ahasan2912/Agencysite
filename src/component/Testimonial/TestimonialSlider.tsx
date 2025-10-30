import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSlider() {
    const services = [
        {
            id: 1,
            icon: <FaQuoteLeft />,
            description: 'I want to congratulate Rakibul and his team for their excellent work in developing my application. When a team loves what they do, it clearly shows in their work. Despite facing connectivity issues due to governmental restrictions in Bangladesh, where the team is located, they did everything possible to deliver the project on time and exceed all my expectations. Not only will I continue working with this team, but I will also recommend them to anyone looking for trustworthy developers. Best wishes!',
            clientImg: '/images/client__01.webp',
            clientName: "santiadslab",
            designation: "Customer",
        },
        {
            id: 2,
            icon: <FaQuoteLeft />,
            description: 'Rakibul’s team has been very patient which is something I appreciate. We have been working for months now. I just wish to leave a few constructive comments to the team. The team’s front-end design could be much better, and I trust that they can achieve more. I learned a lot in the process, and I am thankful for the patience and willingness to correct mistakes. Also, having the client involved in the process from the very beginning is a good strategy I hope they implement in the future. Other than that, a great team to depend on.',
            clientImg: '/images/client__02.webp',
            clientName: "ali_kw95",
            designation: "Customer",
        },
        {
            id: 3,
            icon: <FaQuoteLeft />,
            description: 'Amazing work, adequate follow up and excellent results. Everything as expected.',
            clientImg: '/images/client__03.webp',
            clientName: "raigam_martinez",
            designation: "Customer",
        },
        {
            id: 4,
            icon: <FaQuoteLeft />,
            description: 'Patient, professional, cares about the experience, and the end result!!',
            clientImg: '/images/client__01.webp',
            clientName: "labellavibes",
            designation: "Customer",
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4">
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="pb-12"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative p-[40px] pb-0 rounded-[20px_20px_20px_0] bg-[#f0f0f3] mb-4">
                            <div className="text min-h-[490px]">
                                <div className='mb-[15px] text-[51px] text-[#b6ef00]'>
                                    {service?.icon}
                                </div>
                                <p className="text-[#727272] text-[17px] font-barlow leading-[1.75em]">{service.description}</p>
                            </div>
                            <div className="flex items-center -ml-[40px] mt-8">
                                <div className="relative p-4 rounded-[0_40px_0_0] bg-white">
                                    <img
                                        src={service?.clientImg}
                                        alt="L. White"
                                        className="w-16 h-16 object-cover rounded-full"
                                    />
                                    <div className="absolute top-[-31px] left-[-1px] rotate-[270deg]">
                                        <svg
                                            viewBox="0 0 11 11"
                                            width={30}
                                            height={32}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-full h-full"
                                        >
                                            <path d="M11 0L0 0L0 11C0 4.92487 4.92487 0 11 0Z" fill="#fff" />
                                        </svg>
                                    </div>

                                    <div className="absolute bottom-[-1px] right-[-28px] rotate-[270deg]">
                                        <svg
                                            viewBox="0 0 11 11"
                                            width={30}
                                            height={32}
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-full h-full"
                                        >
                                            <path d="M11 0L0 0L0 11C0 4.92487 4.92487 0 11 0Z" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-7">
                                    <h6 className="text-[17px] text-[#101010] tracking-[2px] font-normal font-federo uppercase">{service?.clientName}</h6>
                                    <p className="text-[15px] text-[#727272] font-barlow font-normal">{service?.designation}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}