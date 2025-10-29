import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from './Card';
import { Blinds, Shell, Smartphone } from 'lucide-react';
import AppDevelopment from '../svg/AppDevelopment';
import AppDevelopment2 from '../svg/AppDevelopment2';
import Website from '../svg/Website';
import WebsiteDark from '../svg/WebsiteDark';
import Design from '../svg/Design';
import DesignDark from '../svg/DesignDark';

export default function ServicesSlider() {
    const services = [
        {
            id: 1,
            title: 'Mobile App Development',
            description: 'IOS App Development <br/> Mobile App Marketing <br/>  Android App Development',
            icon: (
                <AppDevelopment />
            ),
        hoverIcon: (
            <AppDevelopment2 />
        )
        },
{
    id: 2,
        title: 'Website Development',
            description: 'Wordpress <br/>  Shopify <br/>  Website Maintenance',
                icon: (
                    <Website />
                ),
                    hoverIcon: (
                        <WebsiteDark />
                    )
},
{
    id: 3,
        title: 'UI/UX Design',
            description: 'Website Design <br/>  Landing Page Design <br/>  App Design',
                icon: (
                    <Design />
                ),
                    hoverIcon: (
                        <DesignDark />
                    )
},
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
                    <Card service={service} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
}