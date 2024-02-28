import React from "react";

const TabButton = ({ active, onClick, children }) => {
  const buttonClasses = active
    ? "text-white border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button
      onClick={onClick}
      className={`mr-3 font-semibold hover:text-white border-b border-blue-700 ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
