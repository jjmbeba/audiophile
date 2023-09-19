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
    <div className="mt-[5.5rem] md:mt-[7.5rem] lg:mt-40 md:flex items-center gap-[1.13rem] lg:gap-[1.87rem]">
      <div>
        <div className="relative w-[20.4375rem] md:w-[17.3125rem] lg:w-[27.8125rem] h-[10.875rem] lg:h-[17.5rem]">
          <Image
            className="rounded-[0.5rem] md:hidden"
            fill
            src={gallery.first.mobile}
            alt="gallery-first-image"
          />
          <Image
            className="rounded-[0.5rem] hidden md:block lg:hidden"
            fill
            src={gallery.first.tablet}
            alt="gallery-first-image"
          />
          <Image
            className="rounded-[0.5rem] hidden lg:block"
            fill
            src={gallery.first.desktop}
            alt="gallery-first-image"
          />
        </div>
        <div className="mt-5 lg:mt-8">
          <div className="relative w-[20.4375rem] md:w-[17.3125rem] lg:w-[27.8125rem] h-[10.875rem] lg:h-[17.5rem]">
            <Image
              className="rounded-[0.5rem] md:hidden"
              fill
              src={gallery.second.mobile}
              alt="gallery-second-image"
            />
            <Image
              className="rounded-[0.5rem] hidden md:block lg:hidden"
              fill
              src={gallery.second.tablet}
              alt="gallery-second-image"
            />
            <Image
            className="rounded-[0.5rem] hidden lg:block"
            fill
            src={gallery.second.desktop}
            alt="gallery-first-image"
          />
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-0 flex-1">
        <div className="relative w-[20.4375rem] md:w-[24.6875rem] lg:w-full h-[23rem] lg:h-[37rem]">
          <Image
            className="rounded-[0.5rem] md:hidden"
            fill
            src={gallery.third.mobile}
            alt="gallery-third-image"
          />
          <Image
            className="rounded-[0.5rem] hidden md:block lg:hidden"
            fill
            src={gallery.third.tablet}
            alt="gallery-third-image"
          />
          <Image
            className="rounded-[0.5rem] hidden lg:block"
            fill
            src={gallery.third.desktop}
            alt="gallery-first-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
