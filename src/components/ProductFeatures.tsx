import React from "react";

type Props = {
    features:string;
};

const ProductFeatures = ({features}: Props) => {
  return (
    <div className="mt-[5.5rem] md:mt-[7.5rem]">
      <h2 className="text-[1.5rem] md:text-[2rem] leading-[2.25rem] tracking-[0.05356rem] md:tracking-[0.07144rem] font-bold">
        FEATURES
      </h2>
      <p className="mt-6 md:mt-8 text-[0.9375rem] leading-[1.5625rem] font-medium opacity-50">
        {features}
      </p>
    </div>
  );
};

export default ProductFeatures;
