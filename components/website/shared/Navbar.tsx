"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logos/logo1.png";
import Link from "next/link";
import NavItems from "./NavItem";
import Navmenu from "../Data/NavbarData";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [navtoggle, setnavtoggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function togglefunction() {
    setnavtoggle(!navtoggle);
  }
  return (
    <div
      className={` ${
        isScrolled
          ? "bg-zinc-950 top-0 fixed z-50 w-full  transition-colors delay-500 ease-in-out duration-500"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[95%] relative w-full mx-auto h-auto ">
        <div className="w-full gap-10 h-auto p-2 flex items-center justify-between">
          <button
            className="p-2 items-center md:hidden ds:flex flex-col gap-2 h-auto"
            onClick={togglefunction}
          >
            <span className="block w-6 h-[1px] rounded-3xl bg-white"></span>
            <span className="block w-6 h-[1px] rounded-3xl bg-white"></span>
          </button>
          <div className="logo_container">
            <Link href="/">
              <Image src={logo} alt="logo_image" className="w-14 h-14" />
            </Link>
          </div>
          <nav
            className={`${
              navtoggle
                ? "ds:flex md:flex absolute top-0 right-0 smooth"
                : "ds:hidden smooth md:block"
            }`}
          >
            <NavItems links={Navmenu} />
          </nav>
          <div className="btn_section">
            <button className=" sm:h-20 sm:w-20 ds:h-14 ds:w-14 rounded-full hover:bg-slate-600 smooth border-2 flex items-center flex-col justify-center border-slate-600  p-3">
              <div className="flex items-center ">
                <p className="ds:text-[9px] sm:text-xs">Get </p>
                <ArrowUp size="16" />
              </div>
              <p className="ds:text-[9px] sm:text-xs">Started</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
