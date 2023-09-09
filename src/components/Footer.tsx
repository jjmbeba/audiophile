import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import SocialLinks from "./SocialLinks";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();

  return (
    <div className='bg-black px-6 md:px-[2.5rem] lg:px-[10.31rem] pt-[3.25rem] md:pt-[3.75rem] lg:pt-[4.69rem] pb-[2.37rem] md:pb-[2.88rem] lg:pb-12 text-white relative before:absolute before:content-[""] before:top-0 before:left-1/2 md:before:left-[2.5rem] lg:before:left-[10.31rem] before:-translate-x-1/2 md:before:translate-x-0 before:w-[6.3125rem] before:h-[0.25rem] before:bg-[#D87D4A]'>
      <div className="lg:flex items-center justify-between">
        <Image className="mx-auto md:mx-0" src={Logo} alt="logo" />
        <Navbar className="text-center my-12 md:my-8 lg:my-0 flex flex-col md:flex-row gap-4 md:gap-[2.12rem]" />
      </div>
      <div className="lg:flex items-end justify-between">
        <p className="lg:mt-[2.25rem] lg:max-w-[33.75rem] text-[0.9375rem] leading-[1.5625rem] font-medium opacity-50 text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <SocialLinks className="hidden lg:flex"/>
      </div>
      <div className="mt-12 md:mt-20 lg:mt-14 flex flex-col md:flex-row md:justify-between gap-12">
        <p className="text-[0.9375rem] leading-[1.5625rem] opacity-50 text-center">
          Copyright {year}. All Rights Reserved
        </p>
        <SocialLinks className="lg:hidden" />
      </div>
    </div>
  );
};

export default Footer;
