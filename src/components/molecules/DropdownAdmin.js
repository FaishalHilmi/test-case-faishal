"use client";
import React, { useState } from "react";

export default function DropwdownAdmin({ label, items, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative ">
      <div>
        <button
          type="button"
          className="bg-white hover:bg-customGray text-black flex items-center gap-2 py-2 px-6 w-full rounded-xl"
          onClick={toggleDropdown}
        >
          {icon ? <img src={icon} className="w-4 h-4" /> : ""}
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
                className="bg-white hover:bg-customGray text-black w-full rounded-xl"
                role="menuitem"
              >
                <span className="flex items-center gap-2 py-2 ps-10">
                  {item.icon ? <img src={item.icon} className="w-4 h-4" /> : ""}
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
