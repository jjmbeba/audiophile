import Link from "next/link";
import React, { HTMLProps } from "react";
import { cn } from "../lib/utils";

interface Props extends HTMLProps<HTMLUListElement> {}

const links = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "HEADPHONES",
    link: "/headphones",
  },
  {
    title: "SPEAKERS",
    link: "/speakers",
  },
  {
    title: "EARPHONES",
    link: "/earphones",
  },
];

const Navbar = ({ className }: Props) => {
  return (
    <ul
      className={cn(`text-[0.8125rem] leading-[1.5625rem] tracking-[2px] font-bold items-center gap-[2.125rem] ${className}`)}
    >
      {links.map(({ title, link }) => (
        <Link href={link} key={title}>
          <li className="text-white hover:text-[#D87D4A]">{title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
