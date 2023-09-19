import React from "react";

type Props = {
  includes: {
    item: string;
    quantity: number;
  }[];
};

const InTheBox = ({ includes }: Props) => {
  return (
    <div className="mt-[5.5rem] md:mt-[7.5rem] md:flex lg:flex-col items-start gap-[10.625rem] lg:gap-8">
      <h2 className="text-[1.5rem] md:text-[2rem] leading-[2.25rem] tracking-[0.05356rem] md:tracking-[0.07144rem] font-bold">
        IN THE BOX
      </h2>
      <ul className="mt-6 md:mt-0">
        {includes.map(({ item, quantity }) => (
          <li key={item} className="flex items-center md:items-start text-[0.9375rem] leading-[1.5625rem] relative">
            <span className="text-[#D87D4A] font-bold">{`${quantity}x`}</span>{" "}
            <span className="font-medium opacity-50 absolute left-10 whitespace-nowrap">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InTheBox;
