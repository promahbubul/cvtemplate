import React from "react";

const Title = ({ children, className }) => {
  return (
    <h3
      className={`text-xl capitalize font-medium text-cv3-black-900  ${className}`}
    >
      {children}
    </h3>
  );
};

export default Title;
