import React from 'react'
import BlogSlider from './BlogSlider'

export default function Blog() {
    return (
        <>
            <div className="pt-[120px] pb-[90px] container">
                <div className='mb-[15px]'>
                    <div className="flex items-center justify-center gap-2.5 mb-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#AEEF41]"></div>
                        <h4 className="text-[#101010] text-[17px] max-w-[735px] font-federo tracking-[2px] font-normal uppercase">
                            App Industries
                        </h4>
                    </div>
                    <h2 className="text-[#101010] lg:text-[45px] text-[36px] mb-[15px]
                font-federo tracking-[2px] font-normal uppercase text-center">
                        Top Contributor
                    </h2>
                </div>
                <BlogSlider />
            </div>
        </>
    )
}
