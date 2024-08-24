"use client";
import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className={`flex justify-between w-full px-4 py-2 text-left text-black bg-white ${
          isOpen ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={toggleAccordion}
      >
        <span className="font-bold">{title}</span>
        <div className="bg-customBlue px-3 text-white">-</div>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-black bg-white rounded-b-md">
          {content}
        </div>
      )}
    </div>
  );
}
