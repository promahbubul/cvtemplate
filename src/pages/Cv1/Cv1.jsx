import React from "react";
import { avatar } from "../../assets/Images/Images";
import SectionHeading from "../../components/Cv1/SectionHeading";
import {
  IoIosMail,
  IoMdPhonePortrait,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "../../assets/Icons/Icons";
import Title from "../../components/Cv1/Title";
import SubTitle from "../../components/Cv1/SubTitle";
import JobPosition from "../../components/Cv1/JobPosition";

const Cv1 = () => {
  return (
    <div className="max-w-4xl bg-white shadow-2xl border   pb-14 mx-auto relative m-5">
      <div className="absolute h-4 w-5/12 bg-[#00959c]"></div>
      <div className="absolute h-3/6 w-4 top-0 right-0 bg-[#00959c]"></div>
      <div className="absolute h-4 w-8/12 bottom-0 left-0 bg-[#00959c]"></div>
      <div className="">
        {/* HEADER */}
        <section className="px-14 mt-14 flex flex-row justify-between items-center text-[#464646] ">
          <img
            src={avatar}
            alt=""
            className="w-36 h-36 rounded-full p-3 border-2 border-[#00959c]"
          />
          {/* profile info */}
          <div className="bg-[#e7f3f3] p-3 flex flex-row gap-3 h-max justify-between">
            <div className="w-1 h-auto bg-[#00959c]"></div>
            <div className="">
              <h1 className="text-5xl font-extrabold capitalize">
                NAME <span className="font-normal">SURNAME</span>
              </h1>
              <p className="text-3xl font-light capitalize">PROFESSION</p>
            </div>
          </div>
        </section>
        {/* MAIN */}
        <main className="px-14 mt-5">
          {/* BIO INFO */}
          <section className=" flex flex-row gap-5">
            {/* CONTACT */}
            <div className="w-5/12 gap-5 flex flex-row items-end">
              <div className="w-0.5  h-20 bg-[#00959c]"></div>
              <div className="flex flex-col gap-3">
                <SectionHeading>CONTACT</SectionHeading>
                <div className="flex flex-row items-center gap-2">
                  <IoMdPhonePortrait className="text-[#00959c] text-4xl" />
                  <div className="text-gray-600 font-medium leading-5">
                    <p className="">Phone</p>
                    <p className="">+2 434-232534234</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <IoIosMail className="text-[#00959c] text-4xl" />
                  <div className="text-gray-600 font-medium leading-5">
                    <p className="">Email</p>
                    <p className="">travisanderson@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ABOUT */}
            <div className="w-7/12 flex flex-row gap-5 items-end">
              <div className="w-5">
                <div className="w-0.5  h-20 bg-[#00959c]"></div>
              </div>
              <div className="flex flex-col gap-3">
                <SectionHeading>ABOUT ME</SectionHeading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  natus vitae aperiam obcaecati amet nemo sed velit libero, quae
                  saepe, nostrum consequuntur perferendis laboriosam blanditiis
                  quas maxime repellendus
                </p>
              </div>
            </div>
            {/* BORDER */}
          </section>
          <div className="w-full h-0.5 mt-5 bg-[#00959c]"></div>
          <section className="mt-5 flex flex-row gap-5">
            {/* LEFT */}
            <div className="w-5/12 ">
              {/* SOCIAL MEDIA */}
              <div className=" flex flex-row gap-5 items-baseline">
                {/* BORDER STYLES */}
                <div className="flex flex-col items-center ">
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-10 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-12 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-12 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-10 w-0.5"></div>
                </div>
                <div className="">
                  <SectionHeading>SOCIAL MEDIA</SectionHeading>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="flex flex-row items-center gap-3">
                      <FaFacebookF className="text-3xl text-cv1" />
                      <div className="flex flex-col text-gray-600 font-medium leading-5">
                        <span className="">Facebook</span>
                        <span className="">@yourfacebook</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <FaTwitter className="text-3xl text-cv1" />
                      <div className="flex flex-col text-gray-600 font-medium leading-5">
                        <span className="">Twitter</span>
                        <span className="">@yourtwitter</span>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <FaInstagram className="text-3xl text-cv1" />
                      <div className="flex flex-col text-gray-600 font-medium leading-5">
                        <span className="">Facebook</span>
                        <span className="">@yourinstagram</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* BORDER */}
              <div className="w-full h-0.5 bg-cv1 my-5"></div>
              {/* LANGUAGES */}
              <div className="flex flex-row gap-5 items-baseline">
                {/* BORDER STYLES */}
                <div className="flex flex-col items-center ">
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-10 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-16 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-14 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-16 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-10 w-0.5"></div>
                </div>
                {/* CONTENT */}
                <div className="">
                  <SectionHeading>LANGUAGES</SectionHeading>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="">
                      <Title>ENGLISH</Title>
                      <SubTitle>NATIVE</SubTitle>
                    </div>
                    <div className="">
                      <Title>SPANISH</Title>
                      <SubTitle>NATIVE</SubTitle>
                    </div>
                    <div className="">
                      <Title>ITALIAN</Title>
                      <SubTitle>NATIVE</SubTitle>
                    </div>
                    <div className="">
                      <Title>MANDARIN</Title>
                      <SubTitle>NATIVE</SubTitle>
                    </div>
                  </div>
                </div>
              </div>
              {/* BORDER */}
              <div className="w-full h-0.5 bg-cv1 my-5"></div>
              {/* PRO SKILLS */}
              <div className="flex flex-row gap-5 items-baseline">
                {/* BORDER STYLES */}
                <div className="flex flex-col items-center ">
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-10 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-12 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-14 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-14 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-14 w-0.5"></div>
                  <div className="bg-[#00959c] w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 h-10 w-0.5"></div>
                </div>
                {/* CONTENT */}
                <div className="w-full">
                  <SectionHeading>PRO SKILLS</SectionHeading>
                  <div className="flex flex-col gap-3 mt-5 w-full ">
                    <div className=" w-full">
                      <Title>DRAWIJNG</Title>
                      <div className="bg-CV1-soft w-full h-3">
                        <div className="bg-cv1 h-full w-7/12 mt-2"></div>
                      </div>
                    </div>
                    <div className="">
                      <Title>PHOTO</Title>
                      <div className="bg-CV1-soft w-full h-3">
                        <div className="bg-cv1 h-full w-8/12 mt-2"></div>
                      </div>
                    </div>
                    <div className="">
                      <Title>COPYWRITE</Title>
                      <div className="bg-CV1-soft w-full h-3">
                        <div className="bg-cv1 h-full w-10/12 mt-2"></div>
                      </div>
                    </div>
                    <div className="">
                      <Title>COMUTARIZE</Title>
                      <div className="bg-CV1-soft w-full h-3">
                        <div className="bg-cv1 h-full w-10/12 mt-2"></div>
                      </div>
                    </div>
                    <div className="">
                      <Title>DESIGN</Title>
                      <div className="bg-CV1-soft w-full h-3">
                        <div className="bg-cv1 h-full w-5/12 mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="w-7/12 ">
              {/* EXPRIENCE */}
              <div className="flex flex-row gap-5 items-baseline">
                <div className="flex flex-col items-center justify-end">
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-10 rounded-full"></div>
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-40 rounded-full"></div>
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-40 rounded-full"></div>
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-24 rounded-full"></div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-5">
                  <SectionHeading>EXPRIENCE</SectionHeading>
                  {/* JOB POSITION 1 */}
                  <JobPosition
                    title={"JOB POSITION"}
                    subtitle={"COMPANY NAME 2020 | 2021"}
                    content={
                      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque        molestias, eum beatae itaque corporis facere amet eos illum iusto        inventore."
                    }
                  />
                  {/* JOB POSITION 2 */}
                  <JobPosition
                    title={"JOB POSITION"}
                    subtitle={"COMPANY NAME 2020 | 2021"}
                    content={
                      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque        molestias, eum beatae itaque corporis facere amet eos illum iusto        inventore."
                    }
                  />
                  {/* JOB POSITION 3 */}
                  <JobPosition
                    title={"JOB POSITION"}
                    subtitle={"COMPANY NAME 2020 | 2021"}
                    content={
                      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque        molestias, eum beatae itaque corporis facere amet eos illum iusto        inventore."
                    }
                  />
                </div>
              </div>
              {/* BORDER BOTTOM */}
              <div className="w-full h-0.5 bg-cv1 mt-5"></div>
              {/* EXPRIENCE */}
              <div className="flex flex-row gap-5 items-baseline">
                <div className="flex flex-col items-center justify-end">
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-10 rounded-full"></div>
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-40 rounded-full"></div>
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-40 rounded-full"></div>
                  <div className="bg-cv1 w-2 h-2 rounded-full"></div>
                  <div className="bg-cv1 w-0.5 h-24 rounded-full"></div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-5">
                  <SectionHeading>EXPRIENCE</SectionHeading>
                  {/* JOB POSITION 1 */}
                  <JobPosition
                    title={"MASTER DEGREE"}
                    subtitle={"UNIVERSITY NAME 2020 | 2021"}
                    content={
                      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque        molestias, eum beatae itaque corporis facere amet eos illum iusto        inventore."
                    }
                  />
                  {/* JOB POSITION 2 */}
                  <JobPosition
                    title={"MASTER DEGREE"}
                    subtitle={"UNIVERSITY NAME 2020 | 2021"}
                    content={
                      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque        molestias, eum beatae itaque corporis facere amet eos illum iusto        inventore."
                    }
                  />
                  {/* JOB POSITION 3 */}
                  <JobPosition
                    title={"MASTER DEGREE"}
                    subtitle={"UNIVERSITY NAME 2020 | 2021"}
                    content={
                      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque        molestias, eum beatae itaque corporis facere amet eos illum iusto        inventore."
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Cv1;
