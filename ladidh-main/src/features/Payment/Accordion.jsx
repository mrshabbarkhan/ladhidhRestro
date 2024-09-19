import React, { useRef, useState } from "react";

const Accordion = ({ title, content, icon, element }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Favorites_List rounded-xl my-5 px-2 transition-all ">
      <div
        className="w-full flex justify-between items-center py-2 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-sm font-semibold">
          <i className={icon}></i>
          {title}
        </span>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        ref={contentRef}
        className="transition-max-height duration-200 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="pb-2 text-gray-600">
          <p >{content || element}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
