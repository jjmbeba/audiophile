"use client";

import { Dispatch, SetStateAction, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { useCartStore } from "../store/cartStore";
import { useToast } from "./ui/use-toast";

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  id: string;
  name: string;
  price: number;
};

const AddToCart = ({ quantity, setQuantity, id, name, price }: Props) => {
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const [addToCart] = useCartStore((state) => [state.addToCart]);

  const {toast} = useToast();

  return (
    <div className="flex items-center gap-4 z-10">
      <div className="flex items-center text-[0.8125rem] leading-normal tracking-[0.0625rem] font-bold bg-[#F1F1F1]">
        <span
          onClick={handleDecrease}
          className="text-black/25 pl-[0.97rem] pr-[1.31rem] py-[0.94rem] cursor-pointer"
        >
          -
        </span>
        <span className="opacity-100">{quantity}</span>
        <span
          onClick={handleIncrease}
          className="text-black/25 pr-[0.97rem] pl-[1.31rem] py-[0.94rem] cursor-pointer"
        >
          +
        </span>
      </div>
      <AddToCartButton
        onClick={() => {
          addToCart({
            id,
            name,
            price,
            quantity
          })
          toast({
            title:'Added item to cart',
            description:'Friday, February 10, 2023 at 5:57 PM'
          })
        }}
        type="button"
        background={"orange"}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={quantity === 0}
      />
    </div>
  );
};

export default AddToCart;
