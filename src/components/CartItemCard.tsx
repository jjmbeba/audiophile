"use client";

import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { trpc } from "../app/_trpc/client";
import { useCartStore } from "../store/cartStore";
type Props = {
  id: string;
  quantity: number;
};

const CartItemCard = ({ id, quantity }: Props) => {
  const [increaseQuantity, decreaseQuanity] = useCartStore((state) => [state.increaseItemQuantity, state.decreaseItemQuantity])
  const { data: product, isLoading } = trpc.getProductById.useQuery(id);

  if (!product) return;

  const removeLastWord = (str: string) => {
    return str.substring(0, str.lastIndexOf(" "));
  };

  const handleDecrease = () => {
    if(quantity>1){
        decreaseQuanity(id)
    }
  }

  if(isLoading){
    return (
        <div className="flex w-full gap-4">
            <Skeleton className="rounded-[0.5rem] w-16 h-16"/>
            <div className="mt-2 flex flex-col items-start flex-1 gap-4">
                <Skeleton className="h-3 w-3/5"/>
                <Skeleton className="h-3 w-4/5"/>
            </div>
        </div>
    )
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative w-16 h-16 mr-4">
          <Image
            className="rounded-[0.5rem]"
            src={product.image.mobile}
            alt={product.name}
            fill
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[0.9375rem] leading-[1.5625rem] font-bold text-black">
            {removeLastWord(product.name)}
          </span>
          <span>${product.price.toLocaleString("en-US")}</span>
        </div>
      </div>
      <div className="flex items-center text-[0.8125rem] leading-normal tracking-[0.0625rem] font-bold bg-[#F1F1F1]">
        <span
          onClick={handleDecrease}
          className="text-black/25 pl-[0.92rem] pr-[0.95rem] py-[0.44rem] cursor-pointer"
        >
          -
        </span>
        <span className="opacity-100">{quantity}</span>
        <span
          onClick={() => increaseQuantity(id)}
          className="text-black/25 pr-[0.92rem] pl-[0.95rem] py-[0.44rem] cursor-pointer"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default CartItemCard;
