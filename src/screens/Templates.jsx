import React from "react";
import Intro from "../assets/resume.jpg";
import Temp1 from "../assets/imgRes/1.png";
import Temp2 from "../assets/imgRes/2.png";
import Temp3 from "../assets/imgRes/3.png";
import Temp4 from "../assets/imgRes/4.png";
import Temp5 from "../assets/imgRes/5.png";
import Footer from "../components/homeComponent/Footer";
import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row  items-center w-auto p-10 ">
          <div className="w-auto sm:w-1/2 px-2 sm:px-8 py-4 sm:py-12">
            <h1 className="text-4xl sm:text-6xl px-1 sm:px-4 font-semibold ">
              Build Your free resume
            </h1>
            <div className="sm:hidden py-4">
              <img className=" w-fit rounded-lg" src={Intro} alt="" />
            </div>
            <p className="font-semibold text-center sm:text-left text-lg sm:text-xl pl-0 sm:pl-10 py-4 sm:py-6">
              Select any templates Given Below!
            </p>
            <p className="tracking-wider text-lg sm:text-xl text-center py-2 px-2 sm:px-16 font-sans ">
              With Resume's Hub free resume builder, applying for your dream job
              is easy and fast. Choose from Some of free, designer-made
              templates and customize them within a few clicks. <br />
            </p>
            <p className="text-lg sm:text-xl text-center py-2 px-16 tracking-wide italic underline text-underline">
              Click on build resume fill form and get your resume done.
            </p>
            <div className="flex justify-center items-center">
              <Link to="/auth/buildResumeForm">
                <button className="mt-4 xl:mt-10 w-64  h-12 rounded-lg mx-auto   mb-4 bg-indigo-600 px-4 py-2 font-semibold text-white/80 text-xl hover:underline hover:uppercase hover:text-white">
                  Build my resume
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 py-8 hidden sm:flex justify-center items-center ">
            <img className="w-[600px] rounded-lg" src={Intro} alt="" />
          </div>
        </div>
        {/* temp samples */}
        <div className="">
          <h1 className="text-center sm:text-left container mx-auto font-semibold text-4xl text-black/80 py-4">
            Resume Templates
          </h1>
          <div className="flex flex-wrap justify-center items-center py-20 px-20 h-auto gap-20">
            <div className="w-[250px] ">
              <img
                className=" hover:transition hover:ease-in delay-150 hover:scale-125 sm:hover:scale-150 cursor-pointer rounded-lg"
                src={Temp1}
                alt=""
              />
            </div>
            <div className="w-[250px]">
              <img
                className=" hover:transition hover:ease-in delay-150 hover:scale-125 sm:hover:scale-150 cursor-pointer rounded-lg"
                src={Temp2}
                alt=""
              />
            </div>
            <div className="w-[250px]">
              <img
                className=" hover:transition hover:ease-in delay-150 hover:scale-125 sm:hover:scale-150 cursor-pointer h-auto rounded-lg"
                src={Temp3}
                alt=""
              />
            </div>
            <div className="w-[250px]">
              <img
                className=" hover:transition hover:ease-in delay-150 hover:scale-125 sm:hover:scale-150 cursor-pointer rounded-lg"
                src={Temp4}
                alt=""
              />
            </div>
            <div className="w-[250px]">
              <img
                className=" hover:transition hover:ease-in delay-150 hover:scale-125 sm:hover:scale-150 cursor-pointer rounded-lg"
                src={Temp5}
                alt=""
              />
            </div>
          </div>
          {/* temp samples end */}
        </div>
        <div className=" mt-10 h-[145px] sm:h-[200px] relative ">
          <Footer className="" />
        </div>
      </div>
    </>
  );
};

export default Templates;
