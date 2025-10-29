
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LogoSlider() {
    const swiperRef = useRef(null);
    const logos = [
        { id: 1, src: '/images/logo-awwwards-white.svg', alt: 'Walmart' },
        { id: 2, src: '/images/logo-awwwards-white.svg', alt: 'WooCommerce' },
        { id: 3, src: '/images/logo-awwwards-white.svg', alt: 'Awwwards' },
        { id: 4, src: '/images/logo-awwwards-white.svg', alt: 'Envato' },
        { id: 5, src: '/images/logo-awwwards-white.svg', alt: 'Monday' },
        { id: 6, src: '/images/logo-awwwards-white.svg', alt: 'Monday' },
        { id: 7, src: '/images/logo-awwwards-white.svg', alt: 'Monday' },
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
                    slidesPerView: 5,
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
                            slidesPerView: 5,
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
        <div className="container bg-white overflow-hidden logo-slider-container pb-[120px]">
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
                                    className="object-contain grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
