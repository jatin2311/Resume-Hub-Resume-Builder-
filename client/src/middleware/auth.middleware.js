import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Lottie from "lottie-react";
import animationData from "../assets/pageLoading.json";
export const AuthChecker = () => {
  const nav = useNavigate();
  const [data, setData] = useState(3);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/home", { withCredentials: true });
        setData(2);
        console.log(data.data.success);
      } catch (error) {
        setData(1);
      }
    })();
    // eslint-disable-next-line
  }, []);

  switch (data) {
    case 1:
      return (
        <>
          <div className="min-h-screen min-w-full bg-[#e7e5e4] flex justify-center items-center flex-col gap-20 text-white">
            <h1 className="text-black">Sign in require</h1>
            <button
              className="text-black border border-[#4f46e5] px-[80px] py-[10px] bg-[#9b95f5] rounded text-2xl"
              onClick={() => {
                nav("/", { replace: true });
              }}
            >
              Home
            </button>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <Outlet />
        </>
      );
    case 3:
      return (
        <>
          <div className="min-h-screen min-w-full bg-[#e7e5e4] flex justify-center items-center flex-col gap-20 text-white">
            <Lottie
              animationData={animationData}
              loop={true}
              className=" md:w-[500px]"
            />
          </div>
        </>
      );

    default:
      return (
        <>
          <div className="min-h-screen min-w-full bg-[#e7e5e4] flex justify-center items-center flex-col gap-20 text-white">
            <Lottie
              animationData={animationData}
              loop={true}
              className=" md:w-[500px]"
            />
          </div>
        </>
      );
  }
};
