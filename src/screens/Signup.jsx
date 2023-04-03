import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Image from "../assets/anime.jpg";
import Footer from "../components/homeComponent/Footer";
import { signup } from "../services/authHandler";
import animationData from "../assets/loading.json";
import Lottie from "lottie-react";
import { useLoadingStore } from "../store/loading.store";
const Signup = () => {
  const nav = useNavigate();
  const initialValue = { userName: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confPassError, setConfPassError] = useState("");
  const [formError, setFormError] = useState({});
  const loading = useLoadingStore((state) => state.loading);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const checkValidation = (e) => {
    const confPass = e.target.value;
    setConfirmPassword(confPass);
    if (formValues.password !== confPass) {
      setConfPassError("Confirm Password should match with Password !");
    } else {
      setConfPassError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
      id: Math.ceil(Math.random() * 10000000000000),
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "Username is required! ";
    }
    if (!values.email) {
      errors.email = "email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required! ";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more that 8 charecters";
    } else if (values.password.length > 15) {
      errors.password = "password can not be more than 15 characters";
    }
    return errors;
  };

  const handleInput = async (e) => {
    e.preventDefault();
    setFormError(validate(formValues));

    //hande Form Validation submission
    if (Object.keys(formError).length === 0) {
      // console.log(formValues);
      const result = await signup({
        email: formValues.email,
        password: formValues.password,
      });
      console.log(result);
      if (result) {
        toast.success("Now login");

        nav("/signin");
      }
    }
  };

  return (
    <>
      <div className="w-[100%] sm:w-full flex flex-col sm:flex-row justify-center items-center bg-black/80 py-12 sm:py-0 h-auto sm:h-screen ">
        <div className="flex flex-col sm:flex-row  h-auto sm:h-[550px] bg-black/10 w-auto sm:w-[930px] rounded-lg ">
          <div className="flex flex-col  w-full sm:w-auto  px-12 sm:px-12 py-1 sm:py-4 h-auto sm:h-[450px] ">
            <h2 className="w-full p-4 text-white font-semibold text-4xl sm:text-5xl   text-center">
              Sign Up
            </h2>
            <form action="" onSubmit={handleInput}>
              <div className="mt-8 w-full flex flex-col sm:flex-row  items-start sm:items-center py-2 sm:py-4  justify-between">
                <label className="font-semibold text-white/90 py-2 ">
                  User Name <abbr title="required">* </abbr>
                </label>
                <div>
                  <input
                    type="text"
                    value={formValues.userName}
                    onChange={handleChange}
                    name="userName"
                    id=""
                    placeholder="Enter Username"
                    className="w-[280px] sm:w-[320px] bg-grey-lighter text-grey-darker border border-gray-400  rounded-lg h-10 px-4 ml-0 sm:ml-28 self-end"
                  />
                  <p className="text-red-900 text-base font-semibold text-center">
                    {formError.userName}
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
              <div className=" w-full flex flex-col sm:flex-row items-start sm:items-center py-2 sm:py-4 ">
                <label className="font-semibold w-44 text-white/90 py-2 ">
                  Confirm Password
                  <abbr title="required">* </abbr>
                </label>
                <div>
                  <input
                    className="w-[280px] sm:w-[320px] bg-grey-lighter text-grey-darker border border-gray-400  rounded-lg h-10 px-4 ml-0 sm:ml-8"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => checkValidation(e)}
                    name="ConfirmPassword"
                    id=""
                    placeholder="Enter Confirm Password"
                  />
                  <p className="text-red-900 text-center font-semibold text-base ">
                    {confPassError}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center w-full h-24  px-8 gap-5 mt-2">
                {loading ? (
                  <>
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      className="w-36"
                    />
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      name="submit"
                      className="border bg-red-50/10 border-white/20 px-8 py-2 rounded-3xl hover:uppercase hover:underline text-white font-semibold"
                    >
                      Save
                    </button>
                  </>
                )}
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
};

export default Signup;
