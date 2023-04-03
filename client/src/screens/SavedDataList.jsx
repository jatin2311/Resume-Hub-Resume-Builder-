import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useUserStore } from "../store/user.store";
import { RxCross2 } from "react-icons/rx";
const SavedDataList = () => {
  const user = useUserStore((state) => state.user);
  const [file, setfile] = useState("");
  const [e, sete] = useState("");
  const [isPopEnable, setIsPopEnable] = useState(false);
  const [data, setData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem(user.email);
    if (!data) {
      toast.error("No Saved Data Found or User is not logged in");
    } else {
      setData(JSON.parse(data));
    }
    // eslint-disable-next-line
  }, []);
  const handleSubmit = async () => {
    setIsPopEnable(!isPopEnable);
    if (file === "") {
      toast.error("image need to be selected");
    }
    if (file !== "" && e !== "") {
      getBase64(file)
        .then((base64) => {
          localStorage.setItem("image", base64);
          nav("/auth/build", { state: { data: e } });
        })
        .catch((e) => {
          toast.error(e.message || "Oops something went wrong");
          setfile("");
        });
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen min-w-full flex justify-start items-center flex-col sm:p-20 gap-10 ">
      {isPopEnable ? (
        <>
          {/* Pop-Up-Menu-start  */}
          <div className="bg-[#32a5ad8f] absolute z-20 h-[150px] sm:w-[400px] w-[100%] top-1/2 flex items-center justify-center flex-col rounded-xl gap-1">
            <RxCross2
              size={25}
              className="relative left-[40%] "
              onClick={() => {
                setIsPopEnable(!isPopEnable);
              }}
            />
            <h1>Select Photo</h1>
            <input
              type="file"
              name="file"
              id="file"
              accept="image/png,image/jpeg"
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
            />
            <button
              className="text-white w-[200px] h-[30px] bg-green-500 mt-4 rounded-md"
              onClick={() => {
                handleSubmit();
              }}
            >
              Next
            </button>
          </div>
          {/* Pop-Up-Menu-end */}
        </>
      ) : (
        <></>
      )}
      <div> </div>
      <h1 className="text-4xl text-[#758283] font-serif transition-all ease-linear delay-150 duration-100">
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
                    sete(e);
                    handleSubmit();
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
