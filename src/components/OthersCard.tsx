import Image from "next/image";
import React from "react";
import Button from "./Button";

type Props = {
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  slug: string;
  name: string;
};

const OthersCard = ({ name, slug, image }: Props) => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-0">
      <div className="relative w-[20.4375rem] md:w-[13.9375rem] lg:w-[19.2rem] h-[7.5rem] md:h-[19.875rem]">
        <Image
          className="rounded-[0.5rem] md:hidden"
          fill
          src={image.mobile}
          alt={name}
        />
        <Image
          className="rounded-[0.5rem] hidden md:block lg:hidden"
          fill
          src={image.tablet}
          alt={name}
        />
        <Image
          className="rounded-[0.5rem] hidden lg:block"
          fill
          src={image.desktop}
          alt={name}
        />
      </div>
      <h3 className="md:mt-10 md:mb-8 text-[1.5rem] leading-normal tracking-[0.10713rem] font-bold uppercase">
        {name}
      </h3>
      <Button link={`/${slug}`} background={'orange'}/>
    </div>
  );
};

export default OthersCard;
