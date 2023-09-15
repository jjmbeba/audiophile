import Image from "next/image";
import React from "react";
import AddToCart from "./AddToCart";

type Props = {
  name: string;
  images: {
        desktop: string;
        mobile: string;
        tablet: string;
      };
  description: string;
  price: number;
  id:string;
};

const SpecificProductCard = ({id, name, images, description, price }: Props) => {
  return (
    <div className="mt-6">
      <div className="relative w-[20rem] h-[20rem]">
        <Image
          className="rounded-[0.5rem]"
          src={images?.mobile!}
          alt={name!}
          fill
        />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="mt-8 text-[0.875rem] leading-normal tracking-[0.625rem] text-[#D87D4A]">
          NEW PRODUCT
        </h3>
        <h2 className="max-w-[17rem] text-[1.75rem] leading-normal tracking-[0.0625rem] uppercase font-bold">
          {name}
        </h2>
        <p className="text-[0.9375rem] leading-[1.5625rem] opacity-50">
          {description}
        </p>
        <p className="text-[1.125rem] leading-normal tracking-[0.08038rem] font-bold">
          ${price}
        </p>
        <AddToCart/>
      </div>
    </div>
  );
};

export default SpecificProductCard;
