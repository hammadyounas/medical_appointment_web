"use client";

import Dropdown from "../molecules/Dropdown";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, changeLanguage } = useLanguage();

  const languageOptions = [
    { label: "English", value: "en", icon: "twemoji:flag-united-kingdom" },
    { label: "French", value: "fr", icon: "twemoji:flag-france" },
    { label: "Arabic", value: "ar", icon: "twemoji:flag-saudi-arabia" },
  ];

  const t = translations[locale];

  const handleSelect = (selectedOption) => {
    changeLanguage(selectedOption.value); // Update language when selected
  };

  return (
    <nav className="lg:p-10 sm:p-5 p-2 flex justify-between items-center">
      <div className="flex max-md:justify-between items-center w-full">
        <div className=" text-primary z-10">
          <a href="/" className="flex items-center">
            <Icon icon="jam:medical" className="sm:text-5xl text-3xl" />
            <h1 className="font-semibold sm:text-3xl text-xl">medCare</h1>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <Dropdown
            options={languageOptions}
            label="Language"
            onSelect={(option) => handleSelect(option)}
          />
          {/* <Button bg={"bg-primary"} text={"Appointment"} color={"text-white"} rounded="lg" /> */}
          <Icon
            icon="mdi:menu"
            className="text-3xl cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row max-md:justify-between items-center lg:text-lg md:font-medium font-semibold absolute md:relative md:ml-14 max-md:h-[80vh] bg-white md:bg-transparent max-md:w-full top-10 left-0 md:top-0 p-5 md:p-0 shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col max-md:justify-center max-md:text-center whitespace-nowrap md:flex-row space-y-5 md:space-y-0 md:space-x-5 max-md:mt-10">
            <li className="hover:text-primary hover:border-b border-primary cursor-pointer duration-500">
              <a href="#">{t.navbar.about}</a>
            </li>
            <li className="hover:text-primary hover:border-b border-primary cursor-pointer duration-500">
              <a href="#">{t.navbar.services}</a>
            </li>
            <li className="hover:text-primary hover:border-b border-primary cursor-pointer duration-500">
              <a href="#">{t.navbar.contact}</a>
            </li>
            <li className="hover:text-primary hover:border-b border-primary cursor-pointer duration-500">
              <a href="/doctors">{t.navbar.doctors}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown and Appointment Button */}
      <div className="z-10 max-md:hidden flex items-center gap-2">
        <Dropdown
          options={languageOptions}
          label="Language"
          onSelect={(option) => handleSelect(option)}
        />
        <Button
          bg={"bg-white"}
          text={t.navbar.appointment}
          color={"text-primary"}
          rounded="lg"
          className="whitespace-nowrap"
        />
      </div>
    </nav>
  );
}
