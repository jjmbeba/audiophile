import Image from "next/image";
import React from "react";

type Props = {
  gallery: {
    first: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    second: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    third: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
  };
};

const Gallery = ({ gallery }: Props) => {
  return (
    <div className="mt-[5.5rem]">
      <div className="relative w-[20.4375rem] h-[10.875rem]">
        <Image className="rounded-[0.5rem]" fill src={gallery.first.mobile} alt="gallery-first-image" />
      </div>
      <div className="mt-5">
        <div className="relative w-[20.4375rem] h-[10.875rem]">
            <Image className="rounded-[0.5rem]" fill src={gallery.second.mobile} alt="gallery-second-image"/>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative w-[20.4375rem] h-[23rem]">
            <Image className="rounded-[0.5rem]" fill src={gallery.third.mobile} alt="gallery-third-image"/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
