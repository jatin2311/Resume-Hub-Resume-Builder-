import React from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiOutlineUser,
  AiFillFire,
} from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { FcGraduationCap } from "react-icons/fc";
import { SlBadge } from "react-icons/sl";
export const Template3 = (props) => {
  const data = props.data;

  return (
    <div className="bg-[rgb(204,204,204)]  w-[21cm] h-[29.7cm]">
      <div className="bg-white  mx-0 my-auto shadow-2xl w-[21cm] absolute ">
        {/* left-section-start */}

        <div className="bg-[#2978ab] w-[40%] p-7 text-white h-[29.7cm] absolute z-0">
          <img
            src={
              localStorage.getItem("image") || require("../../assets/man.png")
            }
            alt=""
            className="rounded-full"
          />
          {/* Name and designation start*/}
          <div className="mt-7">
            <h3 className="text-[30px]  min-w-fit">{data.name}</h3>
            <h4 className="text-[18px] font-semibold tracking-wider ">
              {data.designation}
            </h4>
          </div>
          {/* Name and designation end*/}

          {/* contact and link section start */}
          <div className="mt-10 gap-1 flex flex-col">
            {/* link-start */}
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiFillLinkedin /> {data.linkedin}
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiFillMail /> {data.email}
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiOutlineUser /> {data.contactNumber}
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiFillFire />
              {data.github}
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <FaDotCircle /> {data.website}
            </div>
            {/* link1-end */}
          </div>

          {/* Relavant Skills */}
          <div className="">
            <h3 className="text-[18px] font-semibold tracking-wider mt-10 mb-7 ">
              RELEVANT SKILLS
            </h3>
            <div className="ml-3">
              <li>{data.skill1}</li>
              <li>{data.skill2}</li>
              <li>{data.skill3}</li>
              <li>{data.skill4}</li>
              <li>{data.skill5}</li>
              <li>{data.skill6}</li>
            </div>
          </div>
        </div>
        {/* contact and link section end */}
        {/* left-section-end */}

        {/* right-section-start */}
        {/* Detail Section Start*/}

        <div className=" absolute w-[60%] left-[40%] bg-white h-[29.7cm]  z-0 text-[#1d1d1d]">
          {/* Heading-start */}
          <div className="w-[90%] bg-[#dfeffa] p-3 float-right mt-9 font-semibold tracking-wide text-[#1d1d1e]">
            PROJECTS
          </div>
          {/* Heading-end */}

          {/* sub-heading-with-icons-start */}
          <div className=" top-28 left-12  absolute w-40 flex min-w-fit gap-10">
            <ImAirplane className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.projTitle1}</h2>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}

          {/* list-of-abouts-start */}
          <li className=" absolute w-[300px] top-36 left-[140px] ">
            {data.projTitle1About}
          </li>

          {/* list-of-abouts-end */}

          {/* sub-heading-with-icons-start */}
          <div className=" absolute bottom-[825px] left-12  w-40 flex min-w-fit gap-10">
            <ImAirplane className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.projTitle2}</h2>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}

          {/* list-of-abouts-start */}
          <li className=" absolute w-[300px] top-72 left-[140px] ">
            {data.projTitle2About}
          </li>

          {/* list-of-abouts-end */}
          {/* sub-heading-with-icons-start */}
          <div className=" absolute bottom-[695px] left-12  w-40 flex min-w-fit gap-10">
            <ImAirplane className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.projTitle3}</h2>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}

          {/* list-of-abouts-start */}
          <li className=" absolute w-[300px] top-[420px] left-[140px] ">
            {data.projTitle3About}
          </li>

          {/* list-of-abouts-end */}

          {/* Heading-start */}
          <div className="w-[90%] bg-[#dfeffa] p-3 float-right mt-9 font-semibold tracking-wide text-[#1d1d1e] absolute top-[500px] right-0">
            EDUCATION HISTORY
          </div>
          {/* Heading-end */}
          {/* sub-heading-with-icons-start */}
          <div className=" top-[600px] left-12  absolute w-40 flex min-w-fit gap-10">
            <FcGraduationCap className="left-4 " size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.ugName}</h2>
              <h3>{data.ug} </h3>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}

          {/* sub-heading-with-icons-start */}
          <div className=" top-[660px] left-12  absolute w-40 flex min-w-fit gap-10">
            <FcGraduationCap className="left-4 " size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.cg1Name}</h2>
              <h3>{data.cg1} </h3>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}

          {/* sub-heading-with-icons-start */}
          <div className=" top-[720px] left-12  absolute w-40 flex min-w-fit gap-10">
            <FcGraduationCap className="left-4 " size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.cg2Name}</h2>
              <h3>{data.cg2} </h3>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}

          {/* Heading-start */}
          <div className="w-[90%] bg-[#dfeffa] p-3 float-right mt-9 font-semibold tracking-wide text-[#1d1d1e] absolute top-[760px] right-0">
            RELEVANT EXPERIENCE/INTERNSHIP
          </div>
          {/* Heading-end */}

          {/* certificate-list-with-icons-start */}
          {/* sub-heading-with-icons-start */}
          <div className=" top-[860px] left-12  absolute w-40 flex min-w-fit gap-10">
            <SlBadge className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.expComp1}</h2>
              <h3>{data.expComp1About}</h3>
              <h3>
                {data.expComp1Dur}-{data.expComp11Dur}
              </h3>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}
          {/* sub-heading-with-icons-start */}
          <div className=" top-[990px] left-12  absolute w-40 flex min-w-fit gap-10">
            <SlBadge className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">{data.expComp2}</h2>
              <h3>{data.expComp2About}</h3>
              <h3>
                {data.expComp2Dur}-{data.expComp22Dur}
              </h3>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}
          {/* certificate-list-with-icons-end */}
        </div>
        {/* Detail Section End*/}
        {/* right-section-end */}
      </div>
    </div>
  );
};
