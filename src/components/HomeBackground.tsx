import React from "react";
import HeroMobile from "@/public/home/mobile/image-header.jpg";
import HeroTablet from "@/public/home/tablet/image-header.jpg";
import HeroDesktop from '@/public/home/desktop/image-hero.jpg'
import Image from "next/image";

type Props = {};

const HomeBackground = (props: Props) => {
  return (
    <>
      <Image
        className="absolute top-0 md:hidden"
        src={HeroMobile}
        alt="hero-image"
      />
      <Image
        className="absolute top-0 hidden md:inline-block lg:hidden"
        src={HeroTablet}
        alt="hero-image"
      />
      <Image
        className="absolute top-0 hidden lg:inline-block"
        src={HeroDesktop}
        alt="hero-image"
      />
    </>
  );
};

export default HomeBackground;
