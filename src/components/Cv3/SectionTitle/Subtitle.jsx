import React from "react";

const Subtitle = ({ children, className }) => {
  return (
    <h4 className={`text-lg font-medium text-gray-600  ${className}`}>
      {children}
    </h4>
  );
};

export default Subtitle;
