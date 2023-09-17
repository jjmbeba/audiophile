import React from "react";

type Props = {
  includes: {
    item: string;
    quantity: number;
  }[];
};

const InTheBox = ({ includes }: Props) => {
  return (
    <div className="mt-[5.5rem]">
      <h2 className="text-[1.5rem] leading-[2.25rem] tracking-[0.05356rem] font-bold">
        IN THE BOX
      </h2>
      <ul className="mt-6 ">
        {includes.map(({ item, quantity }) => (
          <li key={item} className="flex items-center text-[0.9375rem] leading-[1.5625rem] relative">
            <span className="text-[#D87D4A] font-bold">{`${quantity}x`}</span>{" "}
            <span className="font-medium opacity-50 absolute left-10">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InTheBox;
