import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import OurTeamSlider from './OurTeamSlider'

export default function OurTeam() {
    return (
        <>
            <div className="pt-[120px] pb-[90px] ml-[calc((100%-1220px)/2)] max-[1536px]:ml-[calc((100%-1220px)/2)] max-[1220px]:ml-[calc((100%-1024px)/2)] max-[1023px]:ml-[calc((100%-768px)/2)] max-[768px]:ml-[calc((100%-640px)/2)] max-[640px]:ml-8">
                <div className='flex lg:flex-row flex-col lg:gap-10 gap-7'>
                    <div className='mb-[15px] w-[384px] max-w-[100%]'>
                        <div className="flex items-center gap-2.5 mb-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#AEEF41]"></div>
                            <h4 className="text-[#101010] text-[17px] max-w-[735px] font-federo tracking-[2px] font-normal uppercase">
                                Seniors
                            </h4>
                        </div>
                        <h2 className="text-[#101010] lg:text-[45px] text-[36px] mb-[15px]
                font-federo tracking-[2px] font-normal uppercase">
                            Our Team
                        </h2>
                        <p className="text-[#727272] text-[17px] font-barlow leading-[1.75em] mb-[15px]">
                            A dedicated team of 400+ developers, designers, and strategists bringing your digital ideas to life.
                        </p>
                        <PrimaryButton buttonname="all team" />
                    </div>
                    <div className='lg:w-[calc(100%-384px)] lg:pr-0 w-full max-w-[100%] pr-6'>
                        <OurTeamSlider />
                    </div>
                </div>
            </div>
        </>
    )
}
