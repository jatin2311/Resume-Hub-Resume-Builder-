import React, { useState } from "react";
import Template2 from "./template/Template2";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { Template3 } from "./template/Template3";
import { useLocation } from "react-router";
const ResumePreviewScreen = () => {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const data = location.state.data;
  const selectedResumeComponent = [
    <Template2 data={data} />,
    <Template3 data={data} />,
  ];

  const clickHandler = (arg) => {
    if (arg === "next") {
      if (index === selectedResumeComponent.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        setIndex(selectedResumeComponent.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };

  if (window.innerWidth < 768) {
    return (
      <>
        <div className="min-w-full h-[50px] bg-gradient-to-r from-[#e7e5e4] text-center text-gray-800 font-serif">
          <span className="text-[#636365] font-bold">Note{"  "}:</span>
          Preview feature only work when website open in desktop
        </div>
        <div className="border flex flex-row justify-center items-center gap-4 p-10 flex-wrap">
          {/* Card-start */}
          <div className=" p-4 flex flex-col items-center justify-center w- w-[200px] h-[300px] gap-2">
            <img
              src={require("../assets/imgRes/2.png")}
              alt=""
              className="h-[200px] shadow-2xl"
            />
            <button className="border h-[50px] w-[150px] bg-green-500 uppercase text-white font-serif rounded">
              download
            </button>
          </div>
          {/* Card-end */}
          {/* Card-start */}
          <div className="border p-4 flex flex-col items-center justify-center w- w-[200px] h-[300px] gap-2">
            <img
              src={require("../assets/imgRes/4.png")}
              alt=""
              className="h-[200px] shadow-2xl"
            />
            <button className="border h-[50px] w-[150px] bg-green-500 uppercase text-white font-serif rounded">
              download
            </button>
          </div>
          {/* Card-end */}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen min-w-full bg-[#758283] justify-center items-center gap-10 p-3">
      <div className="self-center">{selectedResumeComponent[index]}</div>

      <div className="flex flex-row w-[21cm] gap-4">
        <button
          className="bg-[#5A20CB] text-white p-6 px-9 rounded-2xl flex items-center justify-center gap-2 transition-all ease-linear delay-300 hover:bg-[#5920cb88] hover:rounded-none duration-300 grow"
          onClick={() => {
            clickHandler("prev");
          }}
        >
          <AiFillFastBackward size={25} /> Previous
        </button>
        <button
          className="bg-[#5A20CB] text-white p-6 px-9 rounded-2xl flex items-center justify-center gap-2 transition-all ease-linear delay-300 hover:bg-[#5920cb88] hover:rounded-none duration-300 grow"
          onClick={() => {
            clickHandler("next");
          }}
        >
          Next <AiFillFastForward size={25} />
        </button>
      </div>
      <button className="bg-[#4DD637]  text-white p-6 px-9 rounded-2xl flex items-center justify-center gap-2 transition-all ease-linear delay-300 hover:bg-[#5920cb88] hover:rounded-none hover:text-black duration-300 grow w-[21cm]">
        Download
      </button>
    </div>
  );
};

export default ResumePreviewScreen;
