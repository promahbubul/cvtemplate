import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h2
      className={` text-xl font-bold uppercase border-l-[6px] border-l-[#FECB00] py-1 pl-3 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
