import React from "react";
import Content from "../Content";

const SoftwareSkill = ({ children }) => {
  return (
    <div className="flex flex-col col-span-6 gap-2 w-full box-border">
      <Content>{children}</Content>
      <div className="bg-[#CCCCCC] w-full h-2">
        <div className="bg-[#FECB00] w-8/12 h-full"></div>
      </div>
    </div>
  );
};

export default SoftwareSkill;
