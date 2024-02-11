import React from "react";
import { avatar } from "../../assets/Images/Images";
import SectionTitle from "../../components/Cv2/SectionTitle";
import Title from "../../components/Cv2/Title";
import Content from "../../components/Cv2/Content";
import Work from "../../components/Cv2/work/Work";
import SoftwareSkill from "../../components/Cv2/SoftwareSkill/SoftwareSkill";

const Cv2 = () => {
  return (
    <div className="max-w-4xl m-5 bg-white shadow-2xl border flex flex-row mx-auto">
      {/* LEFT */}
      <section className="bg-[#1B1E2F] w-4/12 h-auto py-10">
        {/* PROFILE PIC */}
        <div className="text-center">
          <div className="inline-block rounded-full bg-[#FECB00] p-1">
            <img src={avatar} alt="" className=" rounded-full w-36 h-36" />
          </div>
        </div>
        <div className="mt-9">
          {/* EDUCATION */}
          <div className="">
            <SectionTitle
              className={
                "text-white bg-[#242537] border-b-[3px] border-b-[#393A4E]"
              }
            >
              Education
            </SectionTitle>
            {/* EDUCATION 1 */}
            <div className="ml-10 mt-5">
              <Title className={"text-white uppercase"}>ENTER YOUR MAJOR</Title>
              <Content className={"text-white"}>
                Name Of Your University
              </Content>
              <Content className={"text-white"}>2005 - 2009</Content>
            </div>
            {/* EDUCATION 2 */}
            <div className="ml-10 mt-5">
              <Title className={"text-white uppercase"}>ENTER YOUR MAJOR</Title>
              <Content className={"text-white"}>
                Name Of Your University
              </Content>
              <Content className={"text-white"}>2005 - 2009</Content>
            </div>
          </div>
          {/* CONTACT */}
          <div className="mt-8">
            <SectionTitle
              className={
                "text-white bg-[#242537] border-b-[3px] border-b-[#393A4E]"
              }
            >
              CONTACT
            </SectionTitle>
            {/* ADDRESS */}
            <div className="ml-10 mt-5">
              <Title className={"text-white capitalize"}>Address</Title>
              <Content className={"text-white"}>your street address</Content>
              <Content className={"text-white"}>
                SS Sterrt City/Zip Code - 456
              </Content>
            </div>
            {/* PHONE */}
            <div className="ml-10 mt-5">
              <Title className={"text-white capitalize"}>Phone</Title>
              <Content className={"text-white"}>+000 123 456 789</Content>
            </div>
            {/* EMAIL */}
            <div className="ml-10 mt-5">
              <Title className={"text-white capitalize"}>Email</Title>
              <Content className={"text-white"}>+000 123 456 789</Content>
            </div>
          </div>
          {/* REFRENCE */}
          <div className="mt-8">
            <SectionTitle
              className={
                "text-white bg-[#242537] border-b-[3px] border-b-[#393A4E]"
              }
            >
              REFRENCE
            </SectionTitle>
            {/* REFRENCE 2 */}
            <div className="ml-10 mt-5">
              <Title className={"text-white capitalize"}>Sara Taylors</Title>
              <Content className={"text-white"}>
                Director I Company Name
              </Content>
            </div>
            {/* REFRENCE 2 */}
            <div className="ml-10 mt-5">
              <Title className={"text-white capitalize"}>Mike Anderson</Title>
              <Content className={"text-white"}>
                Web Developer | Company
              </Content>
              <Content className={"text-white"}>T:+1234 56789</Content>
            </div>
          </div>
        </div>
      </section>
      {/* RIGHT */}
      <section className="bg-white w-8/12 h-full py-10">
        {/* PROFILE NAME */}
        <div className="bg-[#EBEBEB] border-l-[12px] pl-10 border-l-[#FECB00] py-10">
          <h1 className="text-[#2D2D2D]  uppercase text-4xl font-bold leading-tight">
            KAREN <span className="font-normal">RICARDS</span>
          </h1>
          <h3 className="uppercase text-xl font-normal">Profactional Title</h3>
        </div>
        {/* ABOUT ME */}
        <div className="mt-10 ">
          <SectionTitle className={"bg-[#F1F1F1] pl-10 text-[#2D2D2D]"}>
            ABOUT ME
          </SectionTitle>
          <Content className={"pl-10 text-[#4B4B4B] mt-5"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            assumenda eius impedit ratione iure. Facilis voluptatem tempore
            facere? Dolorum ratione ullam dicta
          </Content>
        </div>
        {/* WORK EXPERIENCE */}
        <div className="mt-10 ">
          <SectionTitle className={"bg-[#F1F1F1] pl-10 text-[#2D2D2D]"}>
            WORK EXPERIENCE
          </SectionTitle>
          <Work />
          <Work />
          <Work />
        </div>
        {/* SOFTWARE SKILL */}
        <div className="grid grid-cols-12 mt-10 overflow-hidden pl-40 mr-5 box-border  gap-10">
          {/* Item1 */}
          <SoftwareSkill>Adobe photoshop</SoftwareSkill>
          <SoftwareSkill>Microsft Word</SoftwareSkill>
          <SoftwareSkill>Adobe Illustrator</SoftwareSkill>
          <SoftwareSkill>Microsoft Powerpoint</SoftwareSkill>
          <SoftwareSkill>Adobe Indesign</SoftwareSkill>
          <SoftwareSkill>HMTL-5/CSS-3</SoftwareSkill>
        </div>
      </section>
    </div>
  );
};

export default Cv2;
