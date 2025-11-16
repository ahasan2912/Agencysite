import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function Footer() {
    return (
        <footer id='contact' className='bg-[#101010] font-federo'>
            <div className='container mx-auto border-white'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-[100px]'>
                    <div className='space-y-5'>
                        <Link href='/'>
                            <Image src="/images/logo_white.png" width={100} height={80} alt="Logo" />
                        </Link>
                        <p className='text-[#ffffffb3] text-[17px] font-barlow'>App Cake architecture miss in the sapien sertiton miss bibenum the erat nesuen fermen.</p>
                        <div className='flex gap-5'>
                            <div className='cursor-pointer bg-[#ffffff0d] hover:bg-[#b6ef00] transition-all duration-300 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white hover:text-black'>
                                <BsTwitterX />
                            </div>
                            <div className='cursor-pointer bg-[#ffffff0d] hover:bg-[#b6ef00] transition-all duration-300 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white hover:text-black'>
                                <FaInstagram />
                            </div>
                            <div className='cursor-pointer bg-[#ffffff0d] hover:bg-[#b6ef00] transition-all duration-300 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white hover:text-black'>
                                <AiOutlineYoutube />
                            </div>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-xl text-[#FFFFFF] text-[17px] uppercase tracking-[2px]'>Quick Links</h1>
                        <ul className='text-[#ffffffb3] space-y-3 font-barlow'>
                            <li className='hover:text-[#b6ef00] cursor-pointer'>Contact Us</li>
                            <li className='hover:text-[#b6ef00] cursor-pointer'>Privacy Policy</li>
                            <li className='hover:text-[#b6ef00] cursor-pointer'>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-xl text-[#FFFFFF] uppercase tracking-[2px]'>Subscribe</h1>
                        <p className='text-[#ffffffb3] text-[17px] font-barlow'>Want to be notified about our services. Just sign up and we'll send you a notification by email..</p>
                        <div className='relative'>
                            <input className='border border-[#ffffff12] h-15 w-full rounded-full outline-none text-[#ffffffb3] text-[17px] px-6 font-barlow' type="text" placeholder='Email Address' />
                            <div className='cursor-pointer bg-[#ffffff0d] hover:bg-[#b6ef00] transition-all duration-700 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white hover:text-black text-2xl font-bold -rotate-45 hover:rotate-0 absolute top-1 right-2'>
                                <IoIosArrowRoundForward />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-10 border-t border-[#ffffff12]'>
                    <div className=''></div>
                    <p className='font-barlow text-[17px] text-[#ffffffb3]'>© Copyright {new Date().getFullYear()} App Cake | All Rights Reserved.</p>
                </div>
            </div>

        </footer>
    );
};

