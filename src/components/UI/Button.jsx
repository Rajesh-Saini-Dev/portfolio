import React from "react";

function Button({
  label = "Click Me",
  textColor = "text-gray-50 hover:text-gray-700",
  bgColor = "bg-gray-700 hover:bg-gray-50",
  size = "px-7 py-3 md:px-6 md:py-2",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${size} ${bgColor} ${textColor} text-lg rounded-md  transition ease-linear duration-500 border border-gray-500`}
    >
      {label}
    </button>
  );
}

export default Button;
