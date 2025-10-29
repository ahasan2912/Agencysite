'use client';

import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import PopupYoutube from '../PopupYoutube';

export default function PromotionVideoBanner() {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [open, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen(!open);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = (section as HTMLElement).getBoundingClientRect();
            const sectionHeight = (section as HTMLElement).offsetHeight;
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const scrolled = windowHeight - rect.top;
                const progress = Math.min(Math.max(scrolled / (sectionHeight + windowHeight), 0), 1);
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const translateX = -50 + (scrollProgress * 100);

    return (
        <div
            ref={sectionRef}
            className="relative w-full h-[50vh] overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(images/promotionBanner.jpg)',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="absolute bottom-[-18%] left-0 right-0 overflow-hidden">
                <h2
                    className="text-[160px] font-normal font-federo text-[rgba(255,255,255,0.5)] whitespace-nowrap tracking-tight"
                    style={{
                        transform: `translateX(${translateX}%)`,
                        transition: 'transform 0.1s linear'
                    }}
                >
                    VIDEOS
                </h2>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative items-center justify-center mr-24 lg:flex hidden">
                    <div
                        className="w-[88px] h-[88px] rounded-full border border-[#AEEF41] flex items-center justify-center cursor-pointer z-10"
                        onClick={toggleModal}
                    >
                        <Play color="transparent" fill="#AEEF41" width={50} height={50} />
                    </div>

                    {/* Circular Text Path */}
                    <div className="absolute w-[160px] h-[160px] animate-spin-slow">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="
                    M 100, 100
                    m -85, 0
                    a 85,85 0 1,1 170,0
                    a 85,85 0 1,1 -170,0
                  "
                                />
                            </defs>
                            <text fill="white" fontSize="18px" letterSpacing="2px">
                                <textPath
                                    href="#circlePath"
                                    startOffset="0%"
                                    textAnchor="middle"
                                    className="uppercase tracking-[4px]"
                                >
                                    Dagency - Digital Media Agency - Dagency - Digital Media Agency Dagency - Digital Media Agency
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>

            {
                open && (
                    <PopupYoutube toggleModal={toggleModal} />
                )
            }
        </div>
    );
}