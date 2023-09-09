import React from "react";
import BestGearMobile from "@/public/shared/mobile/image-best-gear.jpg";
import BestGearTablet from "@/public/shared/tablet/image-best-gear.jpg";
import BestGearDesktop from "@/public/shared/desktop/image-best-gear.jpg";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="mx-6 md:mx-10 lg:mx-[10.3rem] lg:mr-[7.8rem] pb-[7.5rem] lg:flex flex-row-reverse items-center gap-[7.81rem]">
      <Image
        className="rounded-[0.5rem] md:hidden"
        src={BestGearMobile}
        alt="best-gear-image"
      />
      <Image
        className="rounded-[0.5rem] hidden md:inline-block lg:hidden"
        src={BestGearTablet}
        alt="best-gear-image"
      />
      <Image
        className="rounded-[0.5rem] hidden lg:inline-block"
        src={BestGearDesktop}
        alt="best-gear-image"
      />
      <div className="mt-10 flex flex-col items-center justify-center text-center lg:text-left">
        <h3 className="text-[1.75rem] md:text-[2.5rem] leading-normal md:leading-[2.75rem] tracking-[0.0625rem] md:tracking-[0.08931rem] font-bold uppercase md:max-w-[35.8125rem]">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h3>
        <p className="mt-8 text-[0.9375rem] leading-[1.5625rem] opacity-50 md:max-w-[35.8125rem]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default About;
