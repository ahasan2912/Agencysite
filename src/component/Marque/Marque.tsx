import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
    const items = [
        "Mobile Apps",
        "iOS & Android",
        "Cross-Platform Apps",
        "Hybrid & Native Apps",
        "Website Development",
        "Web Design",
        "E-commerce Platforms",
        "CMS Solutions",
        "AI Development",
        "Chatbots & Automation",
        "UX/UI Design",
        "Interaction Design",
        "Digital Strategy",
        "Consulting",
        "Support & Maintenance",
    ];

    return (
        <Marquee speed={60} gradient={false}>
            <div className="font-federo bg-[#f0f0f3] py-5 flex items-center gap-12">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-8">
                        <Image
                            src="/images/asterisk-icon.svg"
                            alt="Icon"
                            className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
                            width={32}
                            height={32}
                        />
                        <h1 className="text-[17px] md:text-xl lg:text-2xl">{item}</h1>
                    </div>
                ))}
            </div>
        </Marquee>
    );
};

export default MarqueeSection;