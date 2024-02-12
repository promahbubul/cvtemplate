import React from "react";
import { avatar } from "../../assets/Images/Images";
import SectionTitle from "../../components/Cv3/SectionTitle/SectionTitle";
import {
  PiMonitorFill,
  MdEmail,
  ImHome,
  IoIosMail,
  FaPhoneVolume,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "../../assets/Icons/Icons";
import Title from "../../components/Cv3/SectionTitle/Title";
import Subtitle from "../../components/Cv3/SectionTitle/Subtitle";
import Content from "../../components/Cv3/SectionTitle/Content";

const Cv3 = () => {
  return (
    <div className="max-w-4xl font-lato m-5 bg-white shadow-2xl h-full    flex flex-row gap-16 mx-auto">
      {/* LEFT */}
      <section className="bg-gray-100 w-5/12  flex flex-col justify-between h-auto- pt-16 pb-14 px-8">
        {/* LEFT TOP */}
        <div className=" ">
          {/* PROFILE PIC */}
          <div className="text-center">
            <img
              src={avatar}
              alt=""
              className=" rounded-full shadow-2xl shadow-gray-400 w-36 h-36 text-center mx-auto"
            />
          </div>
          <h1 className="text-cv3-black-900 text-4xl font-lato mt-8 leading-tight uppercase text-center ">
            SARA <br /> WALTON
          </h1>
          <div className="w-full h-[2px] bg-cv3-black-800"></div>
          <h3 className="text-cv3-black-800 text-center mt-5 text-xl">
            INDUSTRIAL DESIGNER
          </h3>
          {/* CONTACT */}
          <div className="mt-8 text-center ">
            <SectionTitle>CONTACT</SectionTitle>
            {/* INFORMATION CONTAINER */}
            <div className="px-5 flex flex-col gap-2  mt-5 ">
              {/* INFO 1 */}
              <div className="flex flex-row gap-4 items-center ">
                <FaPhoneVolume className="text-cv3-black-900 text-xl" />
                <p className="text-gray-700">+2 434-232-534234</p>
              </div>
              {/* INFO 2 */}
              <div className="flex flex-row gap-4 items-center text-base">
                <MdEmail className="text-cv3-black-900 text-xl" />
                <p className=" text-gray-600 lowercase">safawalton@gmail.com</p>
              </div>
              {/* INFO 3 */}
              <div className="flex flex-row gap-4 items-center text-base">
                <PiMonitorFill className="text-cv3-black-900 text-xl" />
                <p className=" text-gray-600">safawalton.com</p>
              </div>
              {/* INFO 4 */}
              <div className="flex flex-row gap-4 items-center text-base">
                <ImHome className="text-cv3-black-900 text-xl" />
                <p className=" text-gray-600">Main street # 32</p>
              </div>
            </div>
          </div>
          {/* PROFILE */}
          <div className="mt-8 text-center ">
            <SectionTitle>PROFILE</SectionTitle>
            {/* INFORMATION CONTAINER */}
            <p className="text-base text-gray-600 text-left mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              commodi nostrum, quia vero dolorum impedit. Iusto, sapiente!
              Voluptatum ipsum qui obcaecati. Optio, corrupti unde alias
              cupiditate animi ducimus saepe repudiandae at consectetur facilis
              in exercitationem expedita aliquid? Mollitia, accusamus
              perspiciatis.
            </p>
          </div>
        </div>
        {/* LEFT BOTTOM */}
        <div className="w-full h-10  flex flex-row gap-5 items-center">
          <FaTwitter className="text-2xl text-cv3-black-900" />
          <FaFacebookF className="text-2xl text-cv3-black-900" />
          <FaLinkedinIn className="text-2xl text-cv3-black-900" />
          <p className="text-lg font-medium text-cv3-black-900">sarawalton92</p>
        </div>
      </section>
      {/* RIGHT */}
      <section className="bg-white w-7/12 h-full py-10 pb-14 pt-16  pr-16 ">
        {/* JOB */}
        <SectionTitle>WORK EXPERIENCE</SectionTitle>
        <div className="">
          {/* JOB 1 */}
          <div className=" pl-10 mt-8">
            <Title>Art Director</Title>
            <Subtitle>Conpamy name | 2020</Subtitle>
            <Content className={"mt-5"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              cupiditate culpa doloremque consequuntur, magnam iure aut sapiente
              quasi ducimus maiores?
            </Content>
          </div>
          {/* JOB 2 */}
          <div className=" pl-10 mt-8">
            <Title>Art Director</Title>
            <Subtitle>Conpamy name | 2020</Subtitle>
            <Content className={"mt-5"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              cupiditate culpa doloremque consequuntur, magnam iure aut sapiente
              quasi ducimus maiores?
            </Content>
          </div>
          {/* JOB 3 */}
          <div className=" pl-10 mt-8">
            <Title>Art Director</Title>
            <Subtitle>Conpamy name | 2020</Subtitle>
            <Content className={"mt-5"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              cupiditate culpa doloremque consequuntur, magnam iure aut sapiente
              quasi ducimus maiores?
            </Content>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="mt-8">
          <SectionTitle>EDUCATION</SectionTitle>
          {/* JOB 1 */}
          <div className=" pl-10 mt-8">
            <Title>Master Degree</Title>
            <Subtitle>University Name | 2020-2021</Subtitle>
            <Content className={"mt-5"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              cupiditate culpa doloremque consequuntur, magnam iure aut sapiente
              quasi ducimus maiores?
            </Content>
          </div>
          {/* JOB 2 */}
          <div className=" pl-10 mt-8">
            <Title>Master Degree</Title>
            <Subtitle>University Name | 2020-2021</Subtitle>
            <Content className={"mt-5"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              cupiditate culpa doloremque consequuntur, magnam iure aut sapiente
              quasi ducimus maiores?
            </Content>
          </div>
          {/* JOB 3 */}
          <div className=" pl-10 mt-8">
            <Title>Master Degree</Title>
            <Subtitle>University Name | 2020-2021</Subtitle>
            <Content className={"mt-5"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              cupiditate culpa doloremque consequuntur, magnam iure aut sapiente
              quasi ducimus maiores?
            </Content>
          </div>
        </div>
        {/* LANGUAGES */}
        <div className="mt-8">
          <SectionTitle>LANGUAGES</SectionTitle>
          <div className="mt-8">
            {/* LANGUAGE 1 */}
            <div className=" pl-10 flex flex-row ">
              <Title>English</Title>
              <Subtitle>- Native</Subtitle>
            </div>
            {/* LANGUAGE 2 */}
            <div className=" pl-10 flex flex-row ">
              <Title>Spanish</Title>
              <Subtitle>- Professional</Subtitle>
            </div>
            {/* LANGUAGE 3 */}
            <div className=" pl-10 flex flex-row ">
              <Title>Italian</Title>
              <Subtitle>- Basic</Subtitle>
            </div>
            {/* LANGUAGE 3 */}
            <div className=" pl-10 flex flex-row ">
              <Title>Mandarin</Title>
              <Subtitle>- Basic</Subtitle>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cv3;
