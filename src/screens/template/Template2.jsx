import User from "../../assets/user.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdOutlineDoubleArrow } from "react-icons/md";

const Template2 = () => {
  return (
    <>
      <div className="flex justify-center bg-black/80 py-4">
        <div className="flex flex-col w-[21cm] h-[29.7cm]  bg-white">
          <div className="h-[1.65cm] ml-12 bg-[#6a9999] w-60 "></div>
          <div className="flex h-48 w-full   bg-[#ebc8b9]">
            <div className="h-[28.4cm] ml-12 bg-[#6a9999] w-60 ">
              <div className="p-2 ">
                <img
                  className="  border-4  border-white rounded-[50%]"
                  src={User}
                  alt=""
                />
                <div className="mt-2 h-auto py-4 px-4 text-white">
                  <h2 className="font-mono font-bold text-xl tracking-wider">
                    PROFILE
                  </h2>
                  <p className="py-2 text-white/70 h-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur illo, dolorem ut sapiente reiciendis blanditiis
                    quam qui labore repellat reprehenderit laborum aspernatur
                    velit corrupti exercitationem eligendi amet tempore vero
                    quisquam? Lorem, ipsum
                  </p>
                </div>
                <div className="mt-2 h-auto py-4 px-4 text-white">
                  <h2 className="font-mono font-semibold text-xl">
                    Contact Me
                  </h2>
                  <div className="mt-4">
                    <div className=" py-2 flex h-auto ">
                      <FaPhoneAlt size={22} />
                      <p className="pl-4">+91 1234456789</p>
                    </div>
                    <div className="mt-2 py-2  flex h-auto">
                      <MdEmail size={22} />
                      <p className="pl-4">John@doe.com</p>
                    </div>
                    <div className="mt-2 py-2 flex h-auto">
                      <MdLocationPin size={22} />
                      <p className="pl-4">Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="mt-4 px-8 pt-10 text-4xl font-semibold">
                Stranger JJ
              </h2>
              <p className="italic text-xl px-8 py-2 ">Student</p>
            </div>
          </div>
          <div className="self-end w-[500px]  h-full">
            <div className=" mt-2 px-4 py-4">
              <div className="flex">
                <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
                <h3 className="text-xl font-semibold pl-3">EDUCATION</h3>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold pt-2">
                  Lovely Professional University
                </h3>
                <p className="tracking-wider pt-1">
                  Bachelors of Computer Application
                </p>
                <h3 className="font-semibold pt-4">Chandigarh University</h3>
                <p className="tracking-wider pt-1">
                  Masters of Computer Application
                </p>
              </div>
            </div>
            <div className="mt-2  px-4 py-4 h-auto">
              <div className="flex">
                <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
                <h3 className="text-xl font-semibold pl-3">Skills</h3>
              </div>
              <div className="mt-2 flex  h-auto w-[350px]  flex-wrap ">
                <p className="px-4 py-1 text-lg tracking-wide">Html</p>
                <p className="px-4 py-1 text-lg tracking-wide">Css</p>
                <p className="px-4 py-1 text-lg tracking-wide">Javascript</p>
                <p className="px-4 py-1 text-lg tracking-wide">ReactJS</p>
                <p className="px-4 py-1 text-lg tracking-wide">Express</p>
                <p className="px-4 py-1 text-lg tracking-wide">Git</p>
                <p className="px-4 py-1 text-lg tracking-wide">MongoDB</p>
              </div>
            </div>
            <div className=" mt-2 px-4 py-4">
              <div className="flex">
                <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
                <h3 className="text-xl font-semibold pl-3">Projects</h3>
              </div>
              <div className="mt-1">
                <h3 className="font-semibold pt-2">Paytm Clone</h3>
                <p className="tracking-wider pt-1 ">
                  This clone webpage has built by using html and tailwind css
                </p>
                <h3 className="font-semibold pt-4">Rode Clone</h3>
                <p className="tracking-wider pt-1">
                  This clone webpage has built by using html and tailwind css
                </p>
              </div>
            </div>
            <div className=" mt-2 px-4 py-4">
              <div className="flex">
                <MdOutlineDoubleArrow className="text-[#5a8f8f]" size={28} />
                <h3 className="text-xl font-semibold pl-3">Experience</h3>
              </div>
              <div className="mt-1">
                <h3 className="font-semibold pt-2">Data Analyst</h3>
                <p className="tracking-wider pt-1 ">
                  This clone webpage has built by using html and tailwind css
                  sasasass
                </p>
                <p className="pt-1 font-semibold">2019-2020</p>
                <h3 className="font-semibold pt-4">Rode analyst</h3>
                <p className="tracking-wider pt-1">
                  This clone webpage has built by usisssssssng html and tailwind
                  css
                </p>
                <p className="pt-1 font-semibold">2020-2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template2;
