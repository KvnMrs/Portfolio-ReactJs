import React from "react";

const Button = ({ children, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={
      "text-lg md:text-xl xl:text-2xl mx-2 text-white border-0 border-gray-200 bg-dark_blue  duration-500 ease-in-out lg:transform hover:bg-white hover:text-dark_blue py-1 px-4 lg:px-7 rounded-lg hover:shadow-2xl " +
      className
    }
  >
    {children}
  </button>
);
export default Button;
