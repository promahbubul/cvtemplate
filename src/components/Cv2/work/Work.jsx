import React from "react";
import SectionTitle from "../SectionTitle";
import Title from "../Title";
import Content from "../Content";

const Work = () => {
  return (
    <div className="flex flex-row gap-10 pl-10 mt-10">
      <h4 className="text-base text-[[#2D2D2D] w-3/12]">2012-2014</h4>
      <div className="w-9/12">
        <Title>JOB POSITION HERE</Title>
        <p className="text-base font-medium">Conpany Name / Californial USA</p>
        <Content className={"mt-3"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          illum perspiciatis blanditiis necessitatibus accusamus? Lorem ipsum
          dolor sit amet.
        </Content>
      </div>
    </div>
  );
};

export default Work;
