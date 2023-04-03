import User from "../../assets/user.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdOutlineDoubleArrow } from "react-icons/md";

const Template2 = (props) => {
  return (
    <div className="flex justify-center bg-black/80 py-4">
      <div className="flex flex-col w-[21cm] h-[29.7cm]  bg-white">
        <div className="h-[1.65cm] ml-12 bg-[#6a9999] w-64 "></div>
        <div className="flex h-48 w-full   bg-[#ebc8b9]">
          <div className="h-[28.4cm] ml-12 bg-[#6a9999] w-64  ">
            <div className="p-2 ">
              <img
                className="  border-4  border-white rounded-[50%] h-[250px] w-[250px]"
                src={localStorage.getItem("image") || User}
                alt=""
              />
              <div className="mt-2 h-auto py-4 px-4 text-white">
                <h2 className="font-mono font-bold text-xl tracking-wider">
                  PROFILE
                </h2>
                <p className="py-2 text-white/70 h-auto">{props.data.about}</p>
              </div>
              <div className="mt-2 h-auto py-4 px-2 text-white">
                <h2 className="font-mono font-semibold text-xl">Contact Me</h2>
                <div className="mt-4">
                  <div className=" py-2 flex h-auto ">
                    <FaPhoneAlt size={22} />
                    <p className="pl-4">{props.data.contactNumber}</p>
                  </div>
                  <div className="mt-2 py-2 flex flex-row h-auto ">
                    <MdEmail size={22} />
                    <p className="pl-4">{props.data.email}</p>
                  </div>
                  <div className="mt-2 py-2 flex h-auto">
                    <MdLocationPin size={22} />
                    <p className="pl-4">{props.data.Address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="mt-4 px-8 pt-10 text-4xl font-semibold">
              {props.data.name}
            </h2>
            <p className="italic text-xl px-8 py-2 ">
              {props.data.designation}
            </p>
          </div>
        </div>
        <div className="self-end w-[500px]  h-full">
          <div className=" mt-2 px-4 py-4">
            <div className="flex">
              <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
              <h3 className="text-xl font-semibold pl-3">EDUCATION</h3>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold pt-2">{props.data.ug}</h3>
              <p className="tracking-wider pt-1">{props.data.ugName}</p>
              <h3 className="font-semibold pt-4">{props.data.cg1}</h3>
              <p className="tracking-wider pt-1">{props.data.cg1Name}</p>
            </div>
          </div>
          <div className="mt-2  px-4 py-4 h-auto">
            <div className="flex">
              <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
              <h3 className="text-xl font-semibold pl-3">Skills</h3>
            </div>
            <div className="mt-2 flex  h-auto w-[350px]  flex-wrap ">
              <p className="px-4 py-1 text-lg tracking-wide">
                {props.data.skill1}
              </p>
              <p className="px-4 py-1 text-lg tracking-wide">
                {props.data.skill2}
              </p>
              <p className="px-4 py-1 text-lg tracking-wide">
                {props.data.skill3}
              </p>
              <p className="px-4 py-1 text-lg tracking-wide">
                {props.data.skill4}
              </p>
              <p className="px-4 py-1 text-lg tracking-wide">
                {props.data.skill5}
              </p>
              <p className="px-4 py-1 text-lg tracking-wide">
                {props.data.skill6}
              </p>
              <p className="px-4 py-1 text-lg tracking-wide">
                {" "}
                {props.data.skill7}
              </p>
            </div>
          </div>
          <div className=" mt-2 px-4 py-4">
            <div className="flex">
              <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
              <h3 className="text-xl font-semibold pl-3">Projects</h3>
            </div>
            <div className="mt-1">
              <h3 className="font-semibold pt-2">{props.data.projTitle1}</h3>
              <p className="tracking-wider pt-1 ">
                {props.data.projTitle1About}
              </p>
              <h3 className="font-semibold pt-4">{props.data.projTitle2}</h3>
              <p className="tracking-wider pt-1">
                {props.data.projTitle2About}
              </p>
            </div>
          </div>
          <div className=" mt-2 px-4 py-4">
            <div className="flex">
              <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
              <h3 className="text-xl font-semibold pl-3">Experience</h3>
            </div>
            <div className="mt-1 p-1">
              <h3 className="font-semibold pt-2">{props.data.expComp1}</h3>
              <p className="tracking-wider pt-1 ">{props.data.expComp1About}</p>
              <p className="pt-1 font-semibold">
                {props.data.expComp1Dur}-{props.data.expComp11Dur}
              </p>
              <h3 className="font-semibold pt-4">{props.data.expComp2}</h3>
              <p className="tracking-wider pt-1">{props.data.expComp2About}</p>
              <p className="pt-1 font-semibold">
                {props.data.expComp2Dur}-{props.data.expComp22Dur}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
