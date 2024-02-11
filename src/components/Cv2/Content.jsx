import React from "react";

const Content = ({ children, className }) => {
  return <p className={`${className} text-base capitalize`}>{children}</p>;
};

export default Content;
