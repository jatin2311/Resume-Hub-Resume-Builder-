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
export const Template3 = () => {
  return (
    <div className="bg-[rgb(204,204,204)]  w-[21cm] h-[29.7cm]">
      <div className="bg-white  mx-0 my-auto shadow-2xl w-[21cm] absolute ">
        {/* left-section-start */}

        <div className="bg-[#2978ab] w-[40%] p-7 text-white h-[29.7cm] absolute z-0">
          <img src={require("../../assets/man.png")} alt="" className="" />
          {/* Name and designation start*/}
          <div className="mt-7">
            <h3 className="text-[30px]  min-w-fit">KIAN GRAHAM</h3>
            <h4 className="text-[18px] font-semibold tracking-wider ">
              FLIGHT ATTENDANT
            </h4>
          </div>
          {/* Name and designation end*/}

          {/* contact and link section start */}
          <div className="mt-10 gap-1 flex flex-col">
            {/* link-start */}
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiFillLinkedin /> linkedin.com/in/name
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiFillMail /> hello@reallygreatsite.com
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiOutlineUser /> +123-456-7890
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <AiFillFire /> mfaizk.me
            </div>
            <div className="flex items-center gap-1 min-w-fit font-light text-sm">
              <FaDotCircle /> click here for my portfolio
            </div>
            {/* link1-end */}
          </div>

          {/* Relavant Skills */}
          <div className="">
            <h3 className="text-[18px] font-semibold tracking-wider mt-10 mb-7 ">
              RELEVANT SKILLS
            </h3>
            <div className="ml-3">
              <li>First Aid & Emergency Care</li>
              <li>Fluency in French</li>
              <li>Quality Customer Service</li>
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
            WORK EXPERIENCE
          </div>
          {/* Heading-end */}

          {/* sub-heading-with-icons-start */}
          <div className=" top-28 left-12  absolute w-40 flex min-w-fit gap-10">
            <ImAirplane className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">Flight Attenddant</h2>
              <h3>Company name</h3>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}
          {/* Experience-duration-start */}
          <h3 className="min-w-fit  top-44 left-[125px] absolute">
            March 2022 to August 2025
          </h3>
          {/* Experience-duration-end */}
          {/* list-of-abouts-start */}
          <li className=" absolute w-[300px] top-52 left-[140px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            nulla eaque? Adipisci nisi ad natus repudiandae culpa nulla minus
            vero illum similique
          </li>
          <li className=" absolute w-[300px] top-[310px] left-[140px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            nulla eaque? Adipisci nisi ad natus repudiandae culpa nulla minus
            vero illum similique
          </li>
          <li className=" absolute w-[300px] top-[410px] left-[140px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            nulla eaque? Adipisci nisi ad natus repudiandae culpa nulla minus
            vero illum similique
          </li>
          {/* list-of-abouts-end */}
          {/* Heading-start */}
          <div className="w-[90%] bg-[#dfeffa] p-3 float-right mt-9 font-semibold tracking-wide text-[#1d1d1e] absolute top-[500px] right-0">
            EDUCATION HISTORY
          </div>
          {/* Heading-end */}
          {/* sub-heading-with-icons-start */}
          <div className=" top-[620px] left-12  absolute w-40 flex min-w-fit gap-10">
            <FcGraduationCap className="left-4 " size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">
                Bachelor of Science in Tourisme
              </h2>
              <h3>Institution: De Loureigh University </h3>
              <h3>Year of Graduation: 2020</h3>
              <li className="ml-4">Cum Launde</li>
              <li className="ml-4">Best Thesis</li>
              <li className="ml-4">President De Loureigh Debate club</li>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}

          {/* Heading-start */}
          <div className="w-[90%] bg-[#dfeffa] p-3 float-right mt-9 font-semibold tracking-wide text-[#1d1d1e] absolute top-[760px] right-0">
            CERTIFICATIONS
          </div>
          {/* Heading-end */}

          {/* certificate-list-with-icons-start */}
          {/* sub-heading-with-icons-start */}
          <div className=" top-[880px] left-12  absolute w-40 flex min-w-fit gap-10">
            <SlBadge className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">
                Flight Safety Traning
              </h2>
              <h3>Institute National Aviation Association</h3>
              <h3>2020</h3>
            </div>
          </div>
          {/* sub-heading-with-icons-end */}
          {/* sub-heading-with-icons-start */}
          <div className=" top-[980px] left-12  absolute w-40 flex min-w-fit gap-10">
            <SlBadge className="left-4" size={35} color="#2978ab" />
            <div>
              <h2 className="font-bold text-[#1d1d1d]">
                Flight Safety Traning
              </h2>
              <h3>Institute International Medical Agency</h3>
              <h3>2020</h3>
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
