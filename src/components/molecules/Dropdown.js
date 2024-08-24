"use client";
import React, { useState } from "react";

export default function Dropdown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative ">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-lg shadow-sm px-4 py-2 bg-customBlue text-sm font-medium text-white focus:outline-none"
          onClick={toggleDropdown}
        >
          {label}
          <svg
            className={`ml-2 h-5 w-5 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 011.414 0L10 13.586l3.293-3.879a1 1 0 011.414 1.293l-4 4.293a1 1 0 01-1.414 0l-4-4.293a1 1 0 010-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="rounded-md " role="menu">
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm bg-transparent hover:bg-customGray text-customBlue rounded-lg text-center"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
