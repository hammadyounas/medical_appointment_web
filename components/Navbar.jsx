"use client";

import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Button from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:p-10 sm:p-5 p-2 flex justify-between items-center">
      <div className="flex max-md:justify-between items-center w-full">
        <div className="flex items-center text-primary z-10">
          <Icon icon="jam:medical" className="sm:text-5xl text-3xl" />
          <h1 className="font-semibold sm:text-3xl text-xl">medCare</h1>
        </div>

        <div
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="z-10">
            <Button
              bg={"bg-primary"}
              text={"Appointment"}
              color={"text-white"}
            />
          </div>
          <Icon icon="mdi:menu" className="text-3xl cursor-pointer z-50" />
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row max-md:justify-between items-center lg:text-lg md:font-medium font-semibold absolute md:relative md:ml-14 max-md:h-[80vh] bg-white md:bg-transparent max-md:w-full top-10 left-0 md:top-0 p-5 md:p-0 shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col max-md:justify-center max-md:text-center md:flex-row space-y-5 md:space-y-0 md:space-x-5 z-10 max-md:mt-10">
            <li className="hover:text-primary hover:border-b border-primary cursor-pointer duration-500">
              <a href="#">About</a>
            </li>
            <li className="hover:text-primary hover:border-b border-primary cursor-pointer duration-500">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-primary hover:border-b border-primary cursor-pointer duration-500">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="z-10 max-md:hidden">
        <Button bg={"bg-white"} text={"Appointment"} color={"text-primary"} />
      </div>
    </nav>
  );
}
