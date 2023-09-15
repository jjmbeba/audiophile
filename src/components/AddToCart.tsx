"use client";

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

type Props = {};

const AddToCart = (props: Props) => {
  const [itemCount, setItemCount] = useState(1);

  const handleDecrease = () => {
    if(itemCount>0){
        setItemCount((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setItemCount((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-4 z-10">
      <div className="flex items-center text-[0.8125rem] leading-normal tracking-[0.0625rem] font-bold bg-[#F1F1F1]">
        <span onClick={handleDecrease} className="text-black/25 pl-[0.97rem] pr-[1.31rem] py-[0.94rem] cursor-pointer">-</span>
        <span className="opacity-100">{itemCount}</span>
        <span onClick={handleIncrease} className="text-black/25 pr-[0.97rem] pl-[1.31rem] py-[0.94rem] cursor-pointer">+</span>
      </div>
      <AddToCartButton type="button" background={"orange"} className="disabled:opacity-50 disabled:cursor-not-allowed" disabled={itemCount === 0}/>
    </div>
  );
};

export default AddToCart;
