import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { HTMLProps } from "react";
import { cn } from "../lib/utils";

interface Props extends HTMLProps<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

}

const buttonVariants = cva('uppercase px-[1.875rem] py-[0.9375rem] text-[0.8125rem] font-bold leading-normal tracking-[0.0625rem] cursor-pointer',{
    variants:{
        background:{
            orange:'bg-[#D87D4A] text-white',
            black:'bg-black text-white hover:bg-[#4C4C4C]',
            transparent:'bg-transparent border border-black text-black hover:bg-black hover:text-white'
        }
    }
})

const Button = ({ className, background }: Props) => {
  return (
    <Link href={""}>
      <button
        className={cn(buttonVariants({background, className}))}
      >
        see product
      </button>
    </Link>
  );
};

export default Button;
