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
      <h2 className="text-[1.5rem] leading-[2.25rem] tracking-[0.05356rem] font-bold text-center uppercase">
        you may also like
      </h2>
      <div className="mt-10 flex flex-col items-center gap-14">
        {products.map(({image, name, slug}) => (
            <OthersCard image={image} name={name} slug={slug}/>
        ))}
      </div>
    </div>
  );
};

export default Others;
