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
            description: 'IOS App Development <br/> Android App Development <br/> Cross-Platform Development <br/>  Native and Hybrid Development <br/>',
            icon: (
                <AppDevelopment />
            ),
            hoverIcon: (
                <AppDevelopment2 />
            )
        },
        {
            id: 2,
            title: 'Website Development & Design',
            description: 'Responsive Website Design <br/> Web Application Development <br/> Custom ERP & CRM Solution <br/> POS System Development <br/> Single and Multi-vendor Platform <br/> E-commerce Platforms <br/> Landing Pages & Microsites <br/>',
            icon: (
                <Website />
            ),
            hoverIcon: (
                <WebsiteDark />
            )
        },
        {
            id: 3,
            title: 'AI Development',
            description: 'AI Integration for Apps & Websites <br/>  Chatbots & Virtual Assistants <br/>  AI Agent Development <br/> Machine Learning Solutions <br/> Predictive Analytics & Automation <br/>',
            icon: (
                <Design />
            ),
            hoverIcon: (
                <DesignDark />
            )
        },
        {
            id: 4,
            title: 'CMS Development',
            description: 'Custom CMS Development <br/> WordPress Website <br/>  Shopify Website <br/> Webflow Website <br/> Wix and Squarespace Website <br/> Theme development and customization <br/>',
            icon: (
                <Design />
            ),
            hoverIcon: (
                <DesignDark />
            )
        },
         {
            id: 5,
            title: 'UX/UI Design',
            description: 'User Experience Design <br/> User Interface Design <br/> Interaction Design <br/> Prototyping & Wireframing <br/>',
            icon: (
                <Design />
            ),
            hoverIcon: (
                <DesignDark />
            )
        },
         {
            id: 6,
            title: 'Digital Strategy & Consulting',
            description: 'Product Strategy & Planning <br/> Market Research & Analysis <br/>  Growth & Monetization Strategies <br/> Technology Consulting <br/> ',
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