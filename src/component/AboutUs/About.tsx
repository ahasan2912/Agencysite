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
              <span className="text-[#b6ef00]">From idea</span> to Impact
            </h2>
            <p className="font-barlow text-[20px] text-[#727272] mb-[15px] leading-[1.75em] text-justify">
              At <span className="font-bold ">App Cake Agency</span>, we believe that every great idea deserves a seamless digital experience. We are a team of passionate developers, designers, and strategists dedicated to turning concepts into high-performing apps and websites that not only look amazing but also drive measurable results.
              With innovation at our core, we blend creativity and cutting-edge technology to deliver solutions that help businesses grow, engage users, and stay ahead in the digital landscape. Whether it’s building a sleek mobile app, a dynamic web platform, or integrating the latest AI features, we bring expertise, dedication, and precision to every project.
              Our mission is to <span className="font-bold">make digital solutions as delightful and satisfying as a slice of cake.</span> We work closely with our clients to understand their goals, craft tailored strategies, and deliver exceptional results that exceed expectations.

            </p>
            <h4 className="font-federo font-normal text-[20px] uppercase text-[#101010] mb-[30px] tracking-[2px]">
              App Cake Agency — where your ideas <br/> rise, and your business grows.
            </h4>

            <div className="flex items-center gap-4">
              <PrimaryButton buttonname="Read More" />
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
