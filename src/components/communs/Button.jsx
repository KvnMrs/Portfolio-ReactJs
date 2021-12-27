import React from "react";

const Button = ({ children, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={
      "text-2xl mx-2 text-white border-0 border-gray-200 bg-dark_blue hover:bg-white hover:text-dark_blue py-1 px-7 rounded-2xl hover:shadow-xl " +
      className
    }
  >
    {children}
  </button>
);
export default Button;
