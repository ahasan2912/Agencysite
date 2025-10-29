import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Phone } from "lucide-react";
import VideoCard from "./VideoCard";

export default function About() {
  return (
    <>
      <div className="relative container mx-auto py-[120px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-0 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#AEEF41]"></div>
              <h4 className="text-[#101010] text-[17px] max-w-[735px] font-federo tracking-[2px]">
                About Us
              </h4>
            </div>

            <h2 className="font-federo lg:text-[45px] text-[36px] uppercase font-normal mb-[15px] tracking-[2px] leading-[1.2em]">
              <span className="text-[#b6ef00]">Always providing</span> the best
              services
            </h2>
            <p className="font-barlow text-[20px] text-[#727272] mb-[15px] leading-[1.75em]">
              App_Cake is an innovative product company that has been specializing in the successful development of mobile applications. We conquer the IT industry with a non-trivial approach, interesting tasks and the active use of modern technologies. The released products are distinguished by positive download growth, intuitive interface and easy perception by end users. Our goal is to create quality products that are understandable and easy to use.
              fermen.
            </p>
            <h4 className="font-federo font-normal text-[20px] uppercase text-[#101010] mb-[30px] tracking-[2px]">
              We are more than a <br />
              digital agency.
            </h4>

            <div className="flex items-center gap-4">
              <PrimaryButton buttonname="Read More" />
              <div className="flex items-center gap-2.5 cursor-pointer">
                <div className="bg-[#101010] rounded-full p-4">
                  <Phone color="#b6ef00" />
                </div>
                <span className="text-[#101010] text-[20px] font-federo">
                  {" "}
                  +1 234 567 8910
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:w-[485px] w-full max-w-full ml-auto">
              <VideoCard />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto -my-[25px] border-0 border-l border-l-[#b6ef00] w-[2px] h-[50px] z-10 opacity-100"></div>
    </>
  );
}
