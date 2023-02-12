import React, { useState } from "react";
import { useNavigate } from "react-router";
import Image from "../assets/anime.jpg";
import Footer from "../components/homeComponent/Footer";
import { signin } from "../services/authHandler";
import { useUserStore } from "../store/user.store";

function Signin() {
  const addUser = useUserStore((state) => state.addUser);
  const nav = useNavigate();
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required! ";
    }
    return errors;
  };

  const handleInput = async (e) => {
    e.preventDefault();
    setFormError(validate(formValues));

    //hande Form Validation submission
    if (Object.keys(formError).length === 0) {
      // console.log(formValues.email, formValues.password);
      // console.log(formValues);
      const result = await signin({
        email: formValues.email,
        password: formValues.password,
      });
      if (result) {
        addUser({ email: result.data.email, _id: result.data._id });
        nav("/");
      }
    }
  };

  return (
    <>
      <div className="w-[100%] sm:w-full flex flex-col sm:flex-row justify-center items-center bg-black/80 py-12 sm:py-0 h-auto sm:h-screen ">
        <div className="flex flex-col sm:flex-row  h-auto sm:h-[550px] bg-black/10 w-auto sm:w-[930px] rounded-lg ">
          <div className="flex flex-col  w-full sm:w-auto  px-12 sm:px-12 py-1 sm:py-4 h-auto sm:h-[450px] ">
            <h2 className="w-full p-4 text-white font-semibold text-4xl sm:text-5xl   text-center">
              Sign In
            </h2>
            <form action="" onSubmit={handleInput}>
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-center py-2 sm:py-4 sm:mt-4 ">
                <label className="font-semibold text-white/90 py-2">
                  Email <abbr title="required">* </abbr>
                </label>
                <div>
                  <input
                    className="w-[280px] sm:w-[320px] bg-grey-lighter text-grey-darker border border-gray-400  rounded-lg h-10 px-4 ml-0 sm:ml-40"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email"
                  />
                  <p className="text-red-900 text-base font-semibold text-center ">
                    {formError.email}
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
                    value={formValues.password}
                    onChange={handleChange}
                    name="password"
                    id=""
                    placeholder="Enter Password"
                  />
                  <p className="text-red-900 text-base font-semibold text-center ">
                    {formError.password}
                  </p>
                </div>
              </div>
              <div className="py-6 mt-4">
                <p className="text-white font-semibold text-center">
                  forget Password reset :{" "}
                  <span className="text-red-300 hover:underline cursor-pointer">
                    here
                  </span>
                </p>
              </div>
              <div className="flex justify-center items-center w-full h-24  px-8 gap-5 ">
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
                  Log in
                </button>
              </div>
            </form>
          </div>
          <div className=" ">
            <img
              className="hidden sm:block w-[300px] h-[550px] rounded-r-lg"
              src={Image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <Footer />
      </div>
    </>
  );
}

export default Signin;
