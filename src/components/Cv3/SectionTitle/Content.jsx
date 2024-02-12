import React from "react";

const Content = ({ children, className }) => {
  return (
    <p className={`text-base font-medium text-gray-500 ${className}`}>
      {children}
    </p>
  );
};

export default Content;
