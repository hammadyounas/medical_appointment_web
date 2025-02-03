"use client";

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function Dropdown({ options, label, onSelect, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0] || null); // Default to the first option

  useEffect(() => {
    if (onSelect) onSelect(selected);
  }, [selected, onSelect]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className={`relative w-full max-sm:text-sm ${className}`}>
      <button
        className="w-full bg-white text-primary border border-primary rounded-lg sm:py-2 sm:px-4 py-1 px-2 flex justify-between items-center shadow-sm hover:shadow-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          {selected.icon && <Icon icon={selected.icon} className="text-lg" />}
          {selected.label || label}
        </span>
        <Icon icon="tdesign:chevron-down" className="ml-2" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-primary rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => handleSelect(option)}
            >
              {option.icon && <Icon icon={option.icon} className="text-lg" />}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
