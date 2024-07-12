import Image from "next/image";
import React from "react";
import bg from "@/public/assets/img/bg.png";
import user1 from "@/public/assets/img/user4.jpg"
{
  /* import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";*/
}
import BorderCard from "@/components/ui/BorderCard";

export const Testimonial = () => {
  return (
    <div className=" w-full h-screen  relative">
      <Image
        src={bg}
        alt=""
        className=" h-[95vh] overflow-hidden w-full absolute top-0 z-d"
      />
      <div className="w-full h-full flex gap-6 items-center justify-center">
        {/*  <div className="hidden">
       <OwlCarousel className="owl-theme" loop margin={10} >
          <div className="item">
            <h4>1</h4>
          </div>
        </OwlCarousel>
       </div>*/}
        <div className="p-3 rounded-md bg-slate-600">
       
            <div className=" max-w-md p-2 h-auto">
              <p className=" font-medium text-sm">
              Konnect is a social media web app with only one objective to
              help connect people around the world with more features than ever
              </p>
              <div className="flex mt-4 items-center justify-between gap-6">
                        <Image src={user1} alt="" className=" h-10 w-10 rounded-full object-cover" />
                        <h2>Sara Glam</h2>
                        
              </div>
            </div>
         
        </div>
        <div className="p-3 rounded-md bg-slate-600">
       
            <div className=" max-w-md p-2 h-auto">
              <p className=" font-medium text-sm">
              Konnect is a social media web app with only one objective to
              help connect people around the world with more features than ever
              </p>
              <div className="flex mt-4 items-center justify-between gap-6">
                        <Image src={user1} alt="" className=" h-10 w-10 rounded-full object-cover" />
                        <h2>Sara Glam</h2>
                        
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};
