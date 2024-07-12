import Image from "next/image";
import React from "react";
import phone from "@/public/assets/img/phone.png"
export const Features = () => {
  return (
    <div className=" w-full text-sm mx-auto min-h-screen relative py-10 flex flex-col items-center justify-center max-w-[95%]">
      <div className=" absolute inset-0 right-0 max-w-[300px] z-d h-[200px] bg-gradient-to-r from-slate-600 to-slate-400 rounded-full blur-[210px]"></div>
      <div className=" absolute bottom-0 right-0 max-w-[300px] h-[200px] bg-gradient-to-r from-slate-600 to-slate-400 rounded-full blur-[210px]"></div>
  
        <div className="w-full h-full items-center justify-center gap-6 flex-wrap flex ">
            <div className="">
                <div className=" bg-slate-600/45 rounded-sm p-2"> Image and Video Sharing</div>
                <div className=" bg-slate-600/45 w-auto lg:-translate-x-4 mt-10 rounded-sm p-2"> 
                Anonymous post</div>
                <div className=" bg-slate-600/45 w-auto mt-10 rounded-sm p-2"> 
                File Sharing</div>
            </div>
            <Image src={phone} alt="" className=" w-[200px] animation-jump"/>
            <div className="">
                <div className=" bg-slate-600/45 rounded-sm p-2">  Data Exporting and importing</div>
                <div className=" bg-slate-600/45 w-auto lg:translate-x-4 mt-10 rounded-sm p-2"> 
                
                Organizations</div>
                <div className=" bg-slate-600/45 w-auto  mt-10 rounded-sm p-2"> 
                Voice messages and live feed</div>
            </div>
        </div>
    </div>
  );
};
