import React from 'react'

export default function PrimaryButton({buttonname}:{buttonname:string}) {
    return (
        <>
            <button
                className="text-black text-[15px] font-normal bg-[#b6ef00]
        font-federo tracking-wide cursor-pointer py-3 px-9 border border-[#b6ef00] 
        rounded-[40px] uppercase
        hover:border-[#101010] hover:bg-[#101010] hover:text-white 

        hover:-translate-y-[6px] hover:translate-z-[0.01px] transition-all duration-300"
            >
                {buttonname}
            </button>
        </>
    )
}
