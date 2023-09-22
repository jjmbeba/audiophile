import React from "react";
import { useCartStore } from "../store/cartStore";
import CartItemCard from "./CartItemCard";

type Props = {};

const CartItems = (props: Props) => {
  const [cartItems] = useCartStore((state) => [state.cartItems]);

  const totalPrice = cartItems.reduce((acc, item) => {
    const totalPriceOfItem = item.price * item.quantity;
    return acc + totalPriceOfItem;
  }, 0);

  return (
    <div className="mt-[1.94rem] flex flex-col gap-6">
      {cartItems.map(({ id, quantity }) => (
        <CartItemCard key={id} id={id} quantity={quantity} />
      ))}
      <div className="mt-8 flex items-center justify-between">
        <span className="text-[0.9375rem] leading-[1.5625rem] font-medium">
          TOTAL
        </span>
        <span className="text-[1.125rem] leading-normal font-bold text-black">
          ${totalPrice}
        </span>
      </div>
      <div className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer py-[0.94rem] text-[0.8125rem] text-center leading-normal tracking-[0.0625rem] font-bold text-white">
        CHECKOUT
      </div>
    </div>
  );
};

export default CartItems;
