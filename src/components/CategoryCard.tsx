import Image, { StaticImageData } from "next/image";
import React from "react";
import Arrow from "@/public/arrow-right.svg";
import Link from "next/link";

type Props = {
  name: string;
  src: StaticImageData;
  link: string;
};

const CategoryCard = ({ name, src, link }: Props) => {
  return (
    <div className="relative text-center font-bold uppercase">
      <div className="flex items-center justify-center">
        <Image
          className="absolute -top-[3.25rem] w-[9.1875rem] lg:w-[11.125rem]"
          src={src}
          alt="category-thumbnail"
        />
      </div>
      <div className="bg-[#F1F1F1] pb-[1.37rem] rounded-[0.5rem] md:px-16 lg:px-[7.78rem]">
        <h3 className="pt-[5.5rem] lg:pt-[7.25rem] text-[0.9375rem] lg:text-[1.125rem] leading-normal tracking-[0.06694rem] lg:tracking-[0.08038rem]">
          <Link href={link}>{name}</Link>
        </h3>
        <div className="mt-4 flex items-center justify-center gap-[0.83rem] cursor-pointer">
          <Link href={link}>
          <h4 className="opacity-50 text-[0.8125rem] leading-normal tracking-[0.0625rem]">
            shop
          </h4>
          </Link>
          <Link href={link}>
            <Image src={Arrow} alt="arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
