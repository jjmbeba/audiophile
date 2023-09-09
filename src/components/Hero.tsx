import React from "react";
import Button from "./Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative text-white pt-[6.75rem] md:pt-32 lg:pt-[8rem] lg:ml-40 pb-[6.4rem] md:pb-[9.65rem] lg:pb-[10rem] flex flex-col justify-center items-center lg:items-start">
      <h3 className="text-[0.875rem] leading-normal tracking-[0.625rem] opacity-[0.4964]">
        NEW PRODUCT
      </h3>
      <h1 className="lg:max-w-[24.75rem] mt-4 md:mt-6 text-center lg:text-left text-[2.25rem] md:text-[3.5rem] leading-[2.5rem] md:leading-[3.625rem] font-bold tracking-[0.080375rem] md:tracking-[0.125rem] uppercase">
        XX99 Mark II Headphones
      </h1>
      <p className="max-w-[20.5rem] md:max-w-[21.8125rem] mt-6 text-center lg:text-left text-[0.9375rem] font-medium leading-[1.5625rem] opacity-75">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button background={'orange'} className="mt-7 md:mt-10"/>
    </div>
  );
};

export default Hero;
