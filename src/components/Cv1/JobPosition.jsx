import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";

const JobPosition = ({ title, subtitle, content }) => {
  return (
    <div className="">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <p className="text-base text-gray-600 mt-3 text-justify font-normal ">
        {content}
      </p>
    </div>
  );
};

export default JobPosition;
