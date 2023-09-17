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
    console.log(slug)
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-[20.4375rem] h-[7.5rem]">
        <Image
          className="rounded-[0.5rem]"
          fill
          src={image.mobile}
          alt={name}
        />
      </div>
      <h3 className="text-[1.5rem] leading-normal tracking-[0.10713rem] font-bold uppercase">
        {name}
      </h3>
      <Button link={`/${slug}`} background={'orange'}/>
    </div>
  );
};

export default OthersCard;
