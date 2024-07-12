import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logos/logo1.png";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full  min-h-auto  z-30 abso right-0 left-0  bottom-0 py-5 bg-slate-600/45">
      <div className=" w-full mx-auto max-w-[95%] h-auto">
        <div className="w-full h-full">
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 gap-10">
            <div className="logo_container">
              <Link href="/">
                <Image src={logo} alt="logo_image" className="w-14 h-14" />
              </Link>
              <p className=" pt-3 text-sm font-medium leading-7">
                Konnect is a social media web app with only one objective to
                help connect people around the world with more features than
                ever
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold">Quick Links</h2>
              <ul className=" text-sm font-normal flex flex-col gap-3">
                <Link
                  href="/"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  About Us
                </Link>
                <Link
                  href="/Usage"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Usage
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Our Team
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold">Features</h2>
              <ul className=" text-sm font-normal flex flex-col gap-3">
                <Link
                  href="/"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Image and Video Sharing
                </Link>
                <Link
                  href="/About"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Anonymous post
                </Link>
                <Link
                  href="/Usage"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Data Exporting and importing
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Organizations
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Video Calls
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  File Sharing
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Voice messages and live feed
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold">Usage Pros And cons</h2>
              <ul className=" text-sm font-normal flex flex-col gap-3">
                <Link
                  href="/"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Data Shipping
                </Link>
                <Link
                  href="/About"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Privacy encoded
                </Link>
                <Link
                  href="/Usage"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Secured Authentication
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Cookies
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Easier and faster connections
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  End to End calls
                </Link>
                <Link
                  href="/Team"
                  className="font-medium hover:text-slate-600  rounded-md  smooth "
                >
                  Seamless and satisyfing features
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-7 border border-slate-600"></div>
        <div className="w-full flex items-center flex-wrap gap-6 justify-between">
          <div className="text-sm font-medium">
            &copy; {currentYear} Konnect. All rights reserved.
          </div>
          <Link href="#" className="text-sm font-medium">
            privacy and Policy Statement
          </Link>
        </div>
      </div>
    </div>
  );
};
