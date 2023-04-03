import React from "react";
import Intro from "../../assets/intro.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className=" mt-2 flex flex-col sm:flex-row justify-between items-center py-10 px-6 sm:px-12   mx-auto  h-auto w-auto">
        <div className="p-0 xl:p-8 xl:mx-10 ">
          <h1 className="text-center md:text-left text-5xl xl:text-7xl font-normal p-4 ">
            Free Online Resume Builder
          </h1>
          <p className="text-xl  w-auto xl:w-[650px]  p-2 font-medium mt-6 sm:mt-0 xl:mt-6 text-center text-stone-600">
            With Resume's Hub free resume builder, applying for your dream job
            is easy and fast. Choose from Some of free, designer-made templates
            and customize them within a few clicks.
          </p>
          <div className="flex justify-center items-center">
            <Link to="/templates">
              <button className="mt-4 xl:mt-10 w-64  h-12 rounded-lg mx-auto   mb-4 bg-indigo-600 px-4 py-2 font-semibold text-white/80 text-xl hover:underline hover:uppercase hover:text-white">
                View templates
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 w-[350px] sm:w-[100rem] xl:w-[700px] mx-2 sm:mx-20  ">
          <img
            className="rounded-lg w-[700px] h-[250px] sm:h-[300px] xl:h-[450px] "
            src={Intro}
            alt=""
          />
        </div>
      </div>
      <h3 className="text-center font-semibold text-lg p-4 ">
        View Templates and Build your own resume : 🖤
      </h3>
    </>
  );
};

export default Main;
