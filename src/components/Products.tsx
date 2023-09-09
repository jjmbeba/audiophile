import React from "react";
import ZX9Mobile from "@/public/home/mobile/image-speaker-zx9.png";
import Image from "next/image";
import Button from "./Button";
import YX1Mobile from "@/public/home/mobile/image-earphones-yx1.jpg";
import YX1Tablet from "@/public/home/tablet/image-earphones-yx1.jpg"
import YX1Desktop from "@/public/home/desktop/image-earphones-yx1.jpg"

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="px-[1.5rem] pb-[7.5rem] md:px-10 lg:px-[10.3rem] lg:pr-[7.8rem]">
      <div className="bg-[#D87D4A] text-white rounded-[0.5rem] py-[3.44rem] lg:py-0 lg:pt-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[8.64rem]">
        <Image
          className="w-[10.7655rem] md:w-[12.32575rem] lg:w-[25.63963rem]"
          src={ZX9Mobile}
          alt="zx9-speaker-image"
        />
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h3 className="px-[2.25rem] md:px-0 md:max-w-[16.3125rem] text-[2.25rem] md:text-[3.5rem] leading-[2.5rem] md:leading-[3.625rem] tracking-[0.08038rem] md:tracking-[0.125rem] font-bold">
            ZX9 SPEAKER
          </h3>
          <p className="mt-6 md:max-w-[21.8125rem] text-[0.9375rem] leading-[1.5625rem] font-medium opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button className="mt-6" background={"black"} />
        </div>
      </div>
      <div className="relative mt-6 pl-6 md:pl-[3.97rem] lg:pl-[6rem] bg-zx7-mobile md:bg-zx7-tablet lg:bg-zx7-desktop bg-cover bg-center py-[6rem] rounded-[0.5rem] bg-[#F1F1F1]">
        <h3 className="text-[1.75rem] leading-normal tracking-[0.125rem] font-bold z-10 relative">
          ZX7 SPEAKER
        </h3>
        <Button className="mt-8 z-10 relative" background={"transparent"} />
      </div>
      <div className="mt-6 md:mt-8 md:flex items-center justify-between ">
        <Image className="rounded-[0.5rem] md:hidden" src={YX1Mobile} alt="YX1-Mobile" />
        <Image className="hidden md:inline-block lg:hidden rounded-[0.5rem]  md:w-[21.1875rem] md:h-[20rem]" src={YX1Tablet} alt="YX1-Tablet" />
        <Image className="hidden lg:inline-block rounded-[0.5rem] w-[43rem] h-[20rem]" src={YX1Desktop} alt="YX1-Desktop" />
        <div className="mt-6 md:mt-0 bg-[#F1F1F1] rounded-[0.5rem] pl-6 md:pl-[2.56rem] md:pr-[3.31rem] py-[2.56rem] md:py-[6rem] lg:w-[43rem]">
          <h3 className="text-[1.75rem] leading-normal tracking-[0.125rem] font-bold z-10 relative">
            YX1 EARPHONES
          </h3>
          <Button className="mt-8 z-10 relative" background={"transparent"} />
        </div>
      </div>
    </div>
  );
};

export default Products;
