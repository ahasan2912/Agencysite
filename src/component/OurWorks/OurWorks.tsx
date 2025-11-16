import React from 'react'
import OurWorksSlider from './OurWorksSlider'

export default function OurWorks() {
    return (
        <>
            <div id='works' className="pt-[120px] pb-[90px]">
                <div className='mb-[15px]'>
                    <div className="flex items-center justify-center gap-2.5 mb-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#AEEF41]"></div>
                        <h4 className="text-[#101010] text-[17px] max-w-[735px] font-federo tracking-[2px] font-normal uppercase">
                            Projects
                        </h4>
                    </div>
                    <h2 className="text-[#101010] lg:text-[45px] text-[36px] mb-[15px]
                font-federo tracking-[2px] font-normal uppercase text-center">
                        Our Works
                    </h2>
                </div>
                <OurWorksSlider />
            </div>
            <div className="relative mx-auto -my-[25px] border-0 border-l border-l-[#b6ef00] w-[2px] h-[50px] z-10 opacity-100"></div>
        </>
    )
}
