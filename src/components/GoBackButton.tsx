"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const GoBackButton = (props: Props) => {
  const router = useRouter();

  const handlePreviousNavigation = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handlePreviousNavigation}
      className="text-[0.9375rem] font-medium leading-[1.5625rem] opacity-50 cursor-pointer"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
