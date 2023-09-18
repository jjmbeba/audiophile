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
    <div className="mt-[5.5rem] md:mt-[7.5rem] md:flex items-center gap-[1.13rem]">
      <div>
        <div className="relative w-[20.4375rem] md:w-[17.3125rem] h-[10.875rem]">
          <Image
            className="rounded-[0.5rem] md:hidden"
            fill
            src={gallery.first.mobile}
            alt="gallery-first-image"
          />
          <Image
            className="rounded-[0.5rem] hidden md:block"
            fill
            src={gallery.first.tablet}
            alt="gallery-first-image"
          />
        </div>
        <div className="mt-5">
          <div className="relative w-[20.4375rem] md:w-[17.3125rem] h-[10.875rem]">
            <Image
              className="rounded-[0.5rem] md:hidden"
              fill
              src={gallery.second.mobile}
              alt="gallery-second-image"
            />
            <Image
              className="rounded-[0.5rem] hidden md:block"
              fill
              src={gallery.second.tablet}
              alt="gallery-second-image"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <div className="relative w-[20.4375rem] md:w-[24.6875rem] h-[23rem]">
          <Image
            className="rounded-[0.5rem] md:hidden"
            fill
            src={gallery.third.mobile}
            alt="gallery-third-image"
          />
          <Image
            className="rounded-[0.5rem] hidden md:block"
            fill
            src={gallery.third.tablet}
            alt="gallery-third-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
