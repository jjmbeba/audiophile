import React from "react";
import OthersCard from "./OthersCard";

type Props = {
  products: ({
    name: string;
    slug: string;
  } & {
    image: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
  })[];
};

const Others = ({ products }: Props) => {
  return (
    <div className="mt-[7.5rem]">
      <h2 className="text-[1.5rem] md:text-[2rem] leading-[2.25rem] tracking-[0.05356rem] md:tracking-[0.07144rem] font-bold text-center uppercase">
        you may also like
      </h2>
      <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center gap-14 md:gap-[0.69rem]">
        {products.map(({image, name, slug}) => (
            <OthersCard image={image} name={name} slug={slug}/>
        ))}
      </div>
    </div>
  );
};

export default Others;
