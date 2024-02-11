import React from "react";

const Title = ({ children, className }) => {
  return <h3 className={`${className} text-lg font-medium `}>{children}</h3>;
};

export default Title;
