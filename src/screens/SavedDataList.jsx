import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUserStore } from "../store/user.store";

const SavedDataList = () => {
  const user = useUserStore((state) => state.user);
  const [data, setData] = useState([]);
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
      <h1 className="text-4xl text-[#758283] font-serif ">Saved Data</h1>
      <div className="sm:min-h-[600px] sm:min-w-[550px] min-h-screen min-w-full bg-[#758283] opacity-60 rounded-sm shadow-2xl">
        {data.map((e, i) => {
          return <div key={i}>{e.name}</div>;
        })}
      </div>
    </div>
  );
};

export default SavedDataList;
