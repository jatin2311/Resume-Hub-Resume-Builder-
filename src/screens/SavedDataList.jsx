import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useUserStore } from "../store/user.store";

const SavedDataList = () => {
  const user = useUserStore((state) => state.user);
  const [data, setData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem(user.email);
    if (!data) {
      return toast.error("No Saved Data Found or User is not logged in");
    }
    setData(JSON.parse(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen min-w-full flex justify-start items-center flex-col sm:p-20 gap-10">
      <h1 className="text-4xl text-[#758283] font-serif ">
        Previous Saved Data
      </h1>
      <div className="sm:min-h-[600px] sm:min-w-[550px] min-h-screen min-w-full bg-gradient-to-r from-[#e7e5e4] to-[#758283] rounded-2xl shadow-2xl text-[#ffffff] font-serif p-1">
        {data.map((e, i) => {
          return (
            <>
              <div
                className="bg-[#242b2e67] flex justify-start items-center p-5 rounded-xl overflow-scroll"
                key={i}
              >
                <details className="flex flex-grow ">
                  <summary>
                    <span className="text-[#242B2E]">Name: </span> {e.name}{" "}
                  </summary>
                  <p className="mt-1">
                    <span className="text-[#242B2E]">Designation:</span>{" "}
                    {e.designation}
                  </p>
                  <p>
                    <span className="text-[#242B2E]">About: </span> {e.about}
                  </p>
                  <p>
                    <span className="text-[#242B2E]">ContactNumber:</span>{" "}
                    {e.contactNumber}
                  </p>
                  <p>
                    <span className="text-[#242B2E]">Email:</span> {e.email}
                  </p>
                  <p>
                    <span className="text-[#242B2E]">Website:</span> {e.website}
                  </p>
                </details>
                <div className="self-start  p-1 px-3">{e.timestamp}</div>
                <button
                  className="transition-all ease-out delay-100 bg-black p-1 px-3 rounded-md hover:bg-[#A77B06] duration-200 self-start"
                  onClick={() => {
                    nav("/auth/build", { state: { data: e } });
                  }}
                >
                  Select
                </button>
              </div>
              <div className="h-2"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SavedDataList;
