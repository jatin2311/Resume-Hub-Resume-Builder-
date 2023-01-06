import React from "react";

const BuildResumeForm = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col sm:flex-row  h-auto sm:h-[550px] bg-black/80 w-auto sm:w-[930px] rounded-lg ">
          <div className="flex flex-col  w-full sm:w-auto  px-12 sm:px-12 py-1 sm:py-4 h-auto sm:h-[450px] ">
            <h2 className="w-full p-4 text-white font-semibold text-4xl sm:text-5xl   text-center">
              ------------------------------------
            </h2>
            <form action="">
              <div className="mt-8 w-full flex flex-col sm:flex-row  items-start sm:items-center py-2 sm:py-4  justify-between">
                <label className="font-semibold text-white/90 py-2 ">
                  User Name <abbr title="required">* </abbr>
                </label>
                <div>
                  <input
                    type="text"
                    // value={formValues.userName}
                    // onChange={handleChange}
                    name="userName"
                    id=""
                    placeholder="Enter Username"
                    className="w-[280px] sm:w-[320px] bg-grey-lighter text-grey-darker border border-gray-400  rounded-lg h-10 px-4 ml-0 sm:ml-28 self-end"
                  />
                  <p className="text-red-900 text-base font-semibold text-center">
                    {/* {formError.userName} */}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center py-2 sm:py-4 ">
                <label className="font-semibold text-white/90 py-2">
                  Email <abbr title="required">* </abbr>
                </label>
                <div>
                  <input
                    className="w-[280px] sm:w-[320px] bg-grey-lighter text-grey-darker border border-gray-400  rounded-lg h-10 px-4 ml-0 sm:ml-40"
                    type="email"
                    // value={formValues.email}
                    // onChange={handleChange}
                    name="email"
                    placeholder="Enter your email"
                  />
                  <p className="text-red-900 text-base font-semibold text-center ">
                    {/* {formError.email} */}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center py-2 sm:py-4">
                <label className="font-semibold text-white/90 py-2">
                  Password <abbr title="required">* </abbr>
                </label>
                <div>
                  <input
                    className="w-[280px] sm:w-[320px] bg-grey-lighter text-grey-darker border border-gray-400  rounded-lg h-10 px-4 ml-0 sm:ml-32"
                    type="password"
                    // value={formValues.password}
                    // onChange={handleChange}
                    name="password"
                    id=""
                    placeholder="Enter Password"
                  />
                  <p className="text-red-900 text-base font-semibold text-center ">
                    {/* {formError.password} */}
                  </p>
                </div>
              </div>
              <div className=" w-full flex flex-col sm:flex-row items-start sm:items-center py-2 sm:py-4 ">
                <label className="font-semibold w-44 text-white/90 py-2 ">
                  Confirm Password
                  <abbr title="required">* </abbr>
                </label>
                <div>
                  <input
                    className="w-[280px] sm:w-[320px] bg-grey-lighter text-grey-darker border border-gray-400  rounded-lg h-10 px-4 ml-0 sm:ml-8"
                    type="password"
                    // value={confirmPassword}
                    // onChange={(e) => checkValidation(e)}
                    name="ConfirmPassword"
                    id=""
                    placeholder="Enter Confirm Password"
                  />
                  <p className="text-red-900 text-center font-semibold text-base ">
                    {/* {confPassError} */}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center w-full h-24  px-8 gap-5 mt-2">
                <button
                  type="cancel"
                  className="border bg-red-50/10 border-white/20 px-8 py-2 rounded-3xl  hover:uppercase hover:underline text-white font-semibold "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  name="submit"
                  className="border bg-red-50/10 border-white/20 px-8 py-2 rounded-3xl hover:uppercase hover:underline text-white font-semibold"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildResumeForm;
