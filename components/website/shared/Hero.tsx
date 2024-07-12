import { RocketIcon } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <div className="text-center py-16 relative max-w-[95%] mx-auto w-full h-full ">
      <div className=" absolute inset-0 max-w-[500px] z-d h-[300px] bg-gradient-to-r from-slate-600 to-slate-500 rounded-full blur-[210px]"></div>
      <div className="space-y-6 z-30">
        <p className="uppercase text-sm text-center items-center gap-3 font-medium text-slate-600">
          Made for more
        </p>
        <h1 className=" text-center ds:text-2xl sm:text-3xl md:text-5xl font-semibold text-balance">
          Connecting Billions Of People<br className="mt-3"></br> Around the
          Globe
        </h1>
        <p className=" pt-3 text-sm text-center text-balance font-medium leading-7">
          Konnect is a social media web app with only one objective to<br className=" md:block ds:hidden"></br>
          help connect people around the world with more features than ever
        </p>
        <button className="md:w-auto ds:w-full rounded-sm bg-gradient-to-r hover:bg-gradient-to-bl smooth from-slate-600 to-slate-300 px-7 p-3 ">
          Get Started
        </button>
      </div>
    </div>
  );
};
