import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import BuildResumeForm from "../screens/BuildResumeForm";
import HomeScreen from "../screens/HomeScreen";

const authcheck = async () => {
  try {
    const data = await axios.get("/home");
    // console.log(data.data.success);
    return data;
  } catch (error) {
    // console.log("Catch Executed" + error.message);
    return false;
  }
};

export const AuthChecker = (props) => {
  const nav = useNavigate();
  const [data, setData] = useState("");
  const location = useLocation();
  useEffect(() => {
    (async () => {
      setData(await authcheck());
    })();
    console.log(location.pathname);
    // eslint-disable-next-line
  }, []);

  if (data === "") {
    <>
      <h1 className="min-h-screen min-w-full bg-[#e7e5e4] flex justify-center items-center flex-col gap-20 text-white">
        <div className="min-h-[300px] bg-[#e7e5e4] w-72 mx-auto flex justify-center items-center animate-bounce ">
          <div
            className="animate-bounce  h-52 bg-[#2827CC] w-52 flex items-center justify-center rounded-full"
            onClick={() => {
              nav("/", { replace: true });
            }}
          >
            Loading
          </div>
        </div>
      </h1>
    </>;
  }

  if (!data) {
    return (
      <>
        <div className="min-h-screen min-w-full bg-[#e7e5e4] flex justify-center items-center flex-col gap-20 text-white">
          <h1 className="text-black">Unauthorise Access not allowed</h1>
          <div className="min-h-[300px] bg-[#e7e5e4] w-72 mx-auto flex justify-center items-center animate-bounce ">
            <div
              className="animate-bounce  h-52 bg-[#b4161b] w-52 flex items-center justify-center rounded-full"
              onClick={() => {
                nav("/", { replace: true });
              }}
            >
              Click me to go home
            </div>
          </div>
        </div>
      </>
    );
  }

  switch (location.pathname) {
    case "/home":
      return <HomeScreen />;
    case "/buildResumeForm":
      return <BuildResumeForm />;
    default:
      break;
  }
};
