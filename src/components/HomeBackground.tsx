'use client'
import React from "react";
import HeroMobile from "@/public/home/mobile/image-header.jpg";
import HeroTablet from "@/public/home/tablet/image-header.jpg";
import HeroDesktop from "@/public/home/desktop/image-hero.jpg";
import Image from "next/image";
import { useMenuStore } from "../store/menuStore";
import {motion} from 'framer-motion'

type Props = {};

const HomeBackground = (props: Props) => {

  const [menuState] = useMenuStore((state) => [state.menuState])

  return (
    <>
      <motion.div variants={{
        open:{opacity:1},
        close:{opacity:0}
      }} animate={menuState ? 'open' : 'close'} initial={{opacity:0}} className="absolute top-0 left-0 bottom-0 w-screen bg-black/40 z-10 pointer-events-none" />
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
