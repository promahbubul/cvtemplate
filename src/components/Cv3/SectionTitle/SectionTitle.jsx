import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <>
      <h2 className="text-2xl  text-center text-cv3-black-900 leading-normal uppercase">
        {children}
      </h2>
      <div className="w-full h-[2px] bg-cv3-black-800"></div>
    </>
  );
};

export default SectionTitle;
