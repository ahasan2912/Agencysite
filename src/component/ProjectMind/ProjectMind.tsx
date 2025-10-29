import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaBehance, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function ProjectInMind() {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-fixed relative"
            style={{ backgroundImage: `url('/images/heroImage.jpg')` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className='flex flex-col items-center justify-center py-32 relative z-50 gap-3'>
                <h4 className="relative font-federo text-[18px] text-[#b6ef00] uppercase tracking-[2px] before:content-['•'] before:text-2xl before-text-center before:absolute before:-left-4 before:text-[#b6ef00] flex items-center">
                    Let’s talk
                </h4>
                <h1 className='font-federo text-5xl text-white uppercase tracking-[2px] text-center leading-12'>Have a project in mind?</h1>
                <div className='font-barlow flex flex-col lg:flex-row gap-5 lg:gap-2 items-center'>
                    <div className='flex gap-6 text-white'>
                        <FaInstagram className='hover:text-[#b6ef00]' />
                        <BsTwitterX className='hover:text-[#b6ef00]' />
                        <FaBehance size={18} className='hover:text-[#b6ef00]' />
                        <FaWhatsapp size={18} className='hover:text-[#b6ef00]' />
                    </div>
                    <div>
                        <p className='text-[20px] text-white hover:text-[#b6ef00]'>info@dagency.com</p>
                    </div>
                    <div>
                        <p className='text-[20px] text-white tracking-[2px] hover:text-[#b6ef00]'>+(1) 123 456 7890</p>
                    </div>
                    <div className="text-white flex gap-1 items-center hover:text-[#b6ef00] group transition-all duration-300">
                        <p className="text-[20px]">Contact</p>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};
