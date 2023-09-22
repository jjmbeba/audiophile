"use client";

import Image from "next/image";
import React, { HTMLProps, useState } from "react";
import Logo from "@/public/logo.svg";
import Cart from "@/public/cart.svg";
import Navbar from "./Navbar";
import Link from "next/link";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import HeadphonesItem from "@/public/HeadphonesItem.svg";
import Categories from "./Categories";
import { useMenuStore } from "../store/menuStore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useCartStore } from "../store/cartStore";
import CartItemCard from "./CartItemCard";
import CartItems from "./CartItems";

interface Props extends HTMLProps<HTMLDivElement> {}

const Header = ({ className }: Props) => {
  const [menuState, toggleMenuState] = useMenuStore((state) => [
    state.menuState,
    state.toggleMenuState,
  ]);

  const [cartItems, removeAllCartItems] = useCartStore((state) => [
    state.cartItems,
    state.removeAllCartItems,
  ]);

  const displayVariants = {
    open: { opacity: 0 },
    close: { opacity: 1 },
  };

  return (
    <div
      className={cn(
        `relative z-20 px-6 md:px-0 md:mx-10 lg:mx-[10.35rem] py-8 lg:py-9 flex items-center justify-between border-b border-b-white/10 ${className}`
      )}
    >
      <div className="flex items-center gap-36">
        <div className="flex items-center md:gap-[2.63rem]">
          <div
            onClick={() => toggleMenuState()}
            className="flex flex-col gap-[0.1975rem] lg:hidden"
          >
            <motion.span
              variants={{
                open: { rotate: 45, y: "0.5rem" },
                close: { rotate: 0, y: 0 },
              }}
              animate={menuState ? "open" : "close"}
              transition={{ duration: 0.2 }}
              className={`w-4 h-[0.1875rem] bg-white`}
            ></motion.span>
            <motion.span
              transition={{ duration: 0 }}
              variants={displayVariants}
              animate={menuState ? "open" : "close"}
              className={`w-4 h-[0.1875rem] bg-white`}
            ></motion.span>
            <motion.span
              variants={{
                open: { rotate: -45, y: "-0.25rem" },
                close: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.2 }}
              animate={menuState ? "open" : "close"}
              className={`w-4 h-[0.1875rem] bg-white ${
                menuState && "md:-translate-y-[0.05rem]"
              }`}
            ></motion.span>
          </div>
          <Link href={"/"}>
            <Image src={Logo} className="hidden md:inline-block" alt="logo" />
          </Link>
        </div>
        <Navbar className="hidden lg:flex" />
      </div>
      <Link href={"/"}>
        <Image src={Logo} className="md:hidden" alt="logo" />
      </Link>
      <Dialog>
        <DialogTrigger>
          <Image src={Cart} alt="cart-icon" />
        </DialogTrigger>
        <DialogContent className="max-w-[20.4375rem] lg:max-w-[23.5625rem]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="text-[1.125rem] leading-normal tracking-[0.08038rem] uppercase font-bold">
                Cart ({cartItems.length})
              </span>
              <span
                onClick={removeAllCartItems}
                className="text-[0.9375rem] leading-[1.5625rem] underline opacity-50 font-medium hover:text-[#D87D4A] cursor-pointer"
              >
                Remove all
              </span>
            </DialogTitle>
            <DialogDescription>
              <CartItems />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <motion.div
        variants={{
          open: { opacity: 1 },
          close: { opacity: 0 },
        }}
        initial={{ opacity: 0 }}
        animate={menuState ? "open" : "close"}
        className={`absolute bottom-[0rem] left-0 md:-left-10 w-full bg-white lg:hidden ${
          !menuState && "hidden"
        }`}
      >
        <div className="z-10 relative left-0">
          <Categories className="pt-[5.25rem] absolute top-0 w-full bg-white rounded-b-[0.5rem] md:w-screen" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
