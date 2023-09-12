"use client"

import Image from "next/image";
import React,{HTMLProps} from "react";
import Menu from "@/public/hamburger-menu.svg";
import Logo from "@/public/logo.svg";
import Cart from "@/public/cart.svg";
import Navbar from "./Navbar";
import Link from "next/link";
import { cn } from "../lib/utils";

interface Props extends HTMLProps<HTMLDivElement> {};

const Header = ({className}: Props) => {
  return (
    <div className={cn(`relative z-10 px-6 md:px-0 md:mx-10 lg:mx-[10.35rem] py-8 lg:py-9 flex items-center justify-between border-b border-b-white/10 ${className}`)}>
      <div className="flex items-center gap-36">
      <div className="flex items-center md:gap-[2.63rem]">
        <Image src={Menu} alt="hamburger-menu" className="lg:hidden" />
        <Link href={"/"}>
          <Image src={Logo} className="hidden md:inline-block" alt="logo" />
        </Link>
      </div>
      <Navbar className="hidden lg:flex"/>
      </div>
      <Link href={"/"}>
        <Image src={Logo} className="md:hidden" alt="logo" />
      </Link>
      <Image src={Cart} alt="cart-icon" />
    </div>
  );
};

export default Header;
