"use client";

import Dropdown from "../molecules/Dropdown";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { LinkButton } from "../atoms/Button";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link"; // Use Link for navigation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, changeLanguage } = useLanguage();
  const pathname = usePathname(); // Get the current route

  const languageOptions = [
    { label: "English", value: "en", icon: "twemoji:flag-united-kingdom" },
    { label: "French", value: "fr", icon: "twemoji:flag-france" },
    { label: "Arabic", value: "ar", icon: "twemoji:flag-saudi-arabia" },
  ];

  const t = translations[locale];

  const navbarLinks = [
    { label: t.navbar.about, href: "#" }, 
    { label: t.navbar.services, href: "#" },
    { label: t.navbar.contact, href: "#" },
    { label: t.navbar.doctors, href: "/doctors" },
  ];

  const handleSelect = (selectedOption) => {
    changeLanguage(selectedOption.value);
  };

  return (
    <nav className="lg:p-10 sm:p-5 p-2 flex justify-between items-center">
      <div className="flex max-md:justify-between items-center w-full">
        <div className="text-primary z-10">
          <Link href="/" className="flex items-center">
            <Icon icon="jam:medical" className="sm:text-5xl text-3xl" />
            <h1 className="font-semibold sm:text-3xl text-xl">medCare</h1>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <Dropdown
            options={languageOptions}
            label="Language"
            onSelect={(option) => handleSelect(option)}
          />
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
          } md:flex flex-col md:flex-row max-md:justify-between items-center lg:text-lg sm:text-sm md:font-medium font-semibold absolute md:relative md:ml-14 max-md:h-[80vh] bg-white md:bg-transparent max-md:w-full top-0 left-0 md:top-0 p-5 md:p-0 shadow-lg md:shadow-none`}
        >
          {navbarLinks.map((link, index) => (
            <ul
              key={index}
              className="flex flex-col max-md:justify-center max-md:text-center whitespace-nowrap md:flex-row space-y-5 md:space-y-0 md:space-x-5 max-md:mt-10"
            >
              <li
                className={`cursor-pointer duration-500 mr-5 ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "hover:text-primary hover:border-b hover:border-primary"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* Dropdown and Appointment Button */}
      <div className=" max-md:hidden flex items-center gap-2">
        <Dropdown
          options={languageOptions}
          label="Language"
          onSelect={(option) => handleSelect(option)}
        />
        <LinkButton
          bg={"bg-white"}
          text={t.navbar.appointment}
          color={"text-primary"}
          rounded="lg"
          href={"/appointment"}
          className={`whitespace-nowrap z-10 border border-primary hover:shadow-md hover:bg-primary hover:text-white`}
        />
      </div>
    </nav>
  );
}
