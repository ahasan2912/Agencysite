
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LogoSlider() {
    const swiperRef = useRef(null);
    const logos = [
        { id: 3, src: '/images/logo/Bitdefender.png', alt: 'Bitdefender' },
        { id: 4, src: '/images/logo/Fortinet.png', alt: 'Fortinet' },
        { id: 6, src: '/images/logo/Google.png', alt: 'Google' },
        { id: 8, src: '/images/logo/Kaspersky.png', alt: 'Kaspersky' },
        { id: 9, src: '/images/logo/Mircrosoft.png', alt: 'Mircrosoft' },
        { id: 10, src: '/images/logo/Oddo.png', alt: 'Oddo' },
        { id: 11, src: '/images/logo/Oracle.png', alt: 'Oracle' },
        { id: 12, src: '/images/logo/RedHat.png', alt: 'RedHat' },
        { id: 13, src: '/images/logo/Tenable.png', alt: 'Tenable' },
        { id: 14, src: '/images/logo/Trend.png', alt: 'Trend' },
    ];

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.head.appendChild(link);
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.async = true;

        script.onload = () => {
            if ((window as any).Swiper && swiperRef.current) {
                new (window as any).Swiper(swiperRef.current, {
                    slidesPerView: 6,
                    spaceBetween: 30,
                    loop: true,
                    speed: 3000,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
                    freeMode: true,
                    centeredSlides: true,
                    allowTouchMove: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    },
                });
            }
        };

        document.body.appendChild(script);
        return () => {
            document.head.removeChild(link);
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="container overflow-hidden logo-slider-container">
            <div ref={swiperRef} className="swiper">
                <div className="swiper-wrapper">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="swiper-slide flex items-center justify-center cursor-pointer"
                        >
                            <div className="transition-all duration-300 logo-item">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={190}
                                    height={60}
                                    className="w-full h-full object-cover rounded-[20px_20px_0_20px]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
