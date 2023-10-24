"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
interface HeaderProps {
  children: React.ReactNode;
  className: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleForward = () => {};
  const handleBack = () => {};

  const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        "h-fi bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      Header
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="text-white flex items-center justify-between bg-black rounded-lg hover:opacity-50 hover:scale-110 transition"
            onClick={handleBack}
          >
            <RxCaretLeft size={36} />
          </button>
          <button
            className="text-white flex items-center justify-between bg-black rounded-lg hover:opacity-50 hover:scale-110 transition"
            onClick={handleForward}
          >
            <RxCaretRight size={36} />
          </button>
        </div>
        <div className="flex md:hidden gap-2 items-center">
          <button className="flex item-center-justify-between bg-white rounded-full p-2">
            <HiHome className="text-black" size={25} />
          </button>
          <button className="flex item-center-justify-between bg-white rounded-full p-2">
            <BiSearch className="text-black" size={25} />
          </button>
        </div>
        <div className="flex  justify-between gap-x-4 items-center">
            <>
            {/* <div> */}
                <Button></Button>
                <Button></Button>
            {/* </div> */}
            </>
        </div>
      </div>
    </div>
  );
};

export default Header;
