import React from "react";
import Intro from "../../assets/intro.jpg";

const Main = () => {
  return (
    <>
      <div className=" mt-2 flex flex-col sm:flex-row justify-center items-center py-10 px-6 sm:px-12   mx-auto  h-auto w-auto">
        <div className="  sm:mx-10">
          <h1 className="text-5xl sm:text-7xl font-normal p-4 ">
            Free Online Resume Builder
          </h1>
          <p className="text-xl w-auto sm:w-[650px] p-2 font-medium mt-6 text-center text-stone-600">
            With Resume's Hub free resume builder, applying for your dream job
            is easy and fast. Choose from Some of free, designer-made templates
            and customize them within a few clicks.
          </p>
          <button className="mt-10 w-64  h-12 rounded-lg mx-auto sm:ml-48 mb-4 bg-stone-500 p-2 font-semibold text-white text-xl">
            Build my resume
          </button>
        </div>
        <div className="w-[350px] sm:w-4/5 mx-2 sm:mx-20 ">
          <img className="rounded-lg w-auto" src={Intro} alt="" />
        </div>
      </div>
      <h3 className="text-center font-semibold text-lg p-4 ">
        View Templates and Build your own resume :
      </h3>
    </>
  );
};

export default Main;
