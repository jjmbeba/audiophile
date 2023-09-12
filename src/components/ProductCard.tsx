"use client"

import React,{HTMLProps} from "react";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";

interface Props extends HTMLProps<HTMLDivElement> {
  title:string;
  image:StaticImageData;
  description:string;
  slug:string;
  images:{
    desktop:string;
    tablet:string;
    mobile:string;
  };
};

const ProductCard = ({title, image, description, slug, images}: Props) => {

  const pathname = usePathname()

  return (
    <div className="px-6 md:px-10 lg:px-[10.31rem] lg:flex even:flex-row-reverse items-center gap-[7.81rem]">
      <div className="relative h-[22rem] lg:h-[35rem] lg:w-[33.75rem]">
      <Image className="rounded-[0.5rem] object-cover" fill src={images.mobile} alt="product-image" />

      </div>
      <div className="mt-8 md:mt-[3.25rem] flex flex-col items-center lg:items-start gap-6 md:gap-0 text-center lg:text-left">
        <h3 className="text-[#D87D4A] text-[0.875rem] leading-normal tracking-[0.625rem] opacity-[0.4964]">
          NEW PRODUCT
        </h3>
        <h2 className="md:mt-4 md:max-w-[34.75rem] text-[1.75rem] md:text-[2.5rem] leading-normal md:leading-[2.75rem] tracking-[0.0625rem] md:tracking-[0.08931rem] uppercase font-bold">
          {title}
        </h2>
        <p className="md:mt-8 md:max-w-[35.75rem] lg:max-w-[27.8125rem] text-[0.9375rem] leading-[1.5625rem] opacity-50">
          {description}
        </p>
        <Button link={`${pathname}/${slug}`} className="md:mt-6" background={'orange'}/>
      </div>
    </div>
  );
};

export default ProductCard;
