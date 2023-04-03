import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Footer from "../components/homeComponent/Footer";
import { useUserStore } from "../store/user.store";

const BuildResumeForm = () => {
  const nav = useNavigate();
  const date = new Date();
  const formdata = {
    name: "",
    designation: "",
    about: "",
    contactNumber: "",
    email: "",
    website: "",
    Address: "",
    github: "",
    linkedin: "",
    ug: "",
    ugName: "",
    cg1: "",
    cg1Name: "",
    cg2: "",
    cg2Name: "",
    projTitle1: "",
    projTitle1About: "",
    projTitle2: "",
    projTitle2About: "",
    projTitle3: "",
    projTitle3About: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    expComp1: "",
    expComp1Dur: "",
    expComp11Dur: "",
    expComp1About: "",
    expComp2: "",
    expComp2Dur: "",
    expComp22Dur: "",
    expComp2About: "",
    expComp3: "",
    expComp3Dur: "",
    expComp33Dur: "",
    expComp3About: "",
    timestamp: date
      .toLocaleString("en-IN", { hour12: true })
      .toString()
      .replace("GMT+0530 (India Standard Time)", ""),
  };
  const [formDataState, setformDataState] = useState(formdata);
  const user = useUserStore((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDataState);
    // e.currentTarget.reset();
    savedSubmittedFormData();
  };

  const savedSubmittedFormData = () => {
    if (!user) {
      return toast.error("Log in required");
    }
    const data = localStorage.getItem(user.email);
    // console.log(user);
    try {
      if (data === null) {
        localStorage.setItem(user.email, JSON.stringify([formDataState]));
      } else {
        // console.log("elese executed");
        localStorage.setItem(
          user.email,
          JSON.stringify([formDataState, ...JSON.parse(data)])
        );
        toast.success("Form data saved successfully");
        nav("/auth/data");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "unable to save data");
    }
  };

  return (
    <>
      <div className="container mx-auto   bg-black/80 w-auto sm:w-full rounded-lg">
        <div className="flex flex-col   w-full sm:w-full  px-12 sm:px-12 py-1 sm:py-4 h-auto ">
          <div>
            <h2 className="w-full p-4 text-white font-semibold text-3xl sm:text-4xl   mx-12">
              Resume Form
            </h2>
            <p className="text-white pl-0 sm:pl-16">
              Fill the Information and get your resume.{" "}
            </p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-8 py-2 sm:py-4">
              <h2 className="text-white/90 font-sans tracking-wider pl-6 underline text-underline pb-4 ">
                Personal Info :
              </h2>
              <div className=" w-full  flex flex-wrap items-center justify-between">
                <div className=" flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px]">
                  <label className="font-semibold text-white/90 py-2 ">
                    Full Name <abbr title="required">* </abbr>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      id=""
                      placeholder="Ex: John Doe"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4 "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ name: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Designation <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="designation"
                      id=""
                      placeholder="Ex: Designer"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ designation: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4  w-auto sm:w-[1000px]">
                  <label className="font-semibold text-white/90 py-2">
                    About <abbr title="required">* </abbr>
                  </label>
                  <textarea
                    name="about"
                    maxLength="500"
                    className="w-[280px] sm:w-[800px] h-28 bg-grey-lighter text-grey-darker rounded-lg py-2 px-4 "
                    placeholder="Explain about yourself"
                    onInput={(e) => {
                      setformDataState({
                        ...formDataState,
                        ...{ about: e.target.value },
                      });
                    }}
                  />
                </div>
              </div>

              {/* Contact info area starts */}
              <h2 className="mt-8 text-white/90 font-sans tracking-wider pl-6 underline text-underline pb-4 ">
                Contact Info :
              </h2>
              <div className=" w-full   flex flex-wrap items-center justify-between">
                <div className=" flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px]">
                  <label className="font-semibold text-white/90 py-2 ">
                    Contact-No. <abbr title="required">* </abbr>
                  </label>
                  <div>
                    <input
                      type="number"
                      name="contactNumber"
                      id=""
                      placeholder="Ex: +91 1023456789"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4 "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ contactNumber: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Email <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Ex: johnddoe@xyz.com"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ email: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Website <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="website"
                      id=""
                      placeholder="Ex: www.johndoe.com"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ website: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Address <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="address"
                      id=""
                      placeholder="Ex: AshokNagar, Delhi, India"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ Address: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Github <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="github"
                      id=""
                      placeholder="Ex: www.github.com/johndoe23"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ github: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    linkedin <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="linkedin"
                      id=""
                      placeholder="Ex: www.linkedin.com/johndoe"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ linkedin: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Education starts */}
              <h2 className="mt-8 text-white/90 font-sans tracking-wider pl-6 underline text-underline pb-4 ">
                Education Info :
              </h2>
              <div className=" w-full   flex flex-wrap items-center justify-between">
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Undergraduate/school
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="underGraduate"
                      id=""
                      placeholder="Ex: Jc College "
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ ug: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Degree/Course Name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="underGraduate"
                      id=""
                      placeholder="Ex: Diploma in Design"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ ugName: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className=" flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px]">
                  <label className="font-semibold text-white/90 py-2 ">
                    College/University <abbr title="required">* </abbr>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="collegeName"
                      id=""
                      placeholder="Ex: Delhi University"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4 "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ cg1: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Degree/Course Name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="degreeName"
                      id=""
                      placeholder="Ex: Bachelor of computer application"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ cg1Name: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    College/University <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="universityName"
                      id=""
                      placeholder="Ex: Lovely Professional University"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ cg2: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Degree/Course Name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="courseName"
                      id=""
                      placeholder="Ex: Master of computer application"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ cg2Name: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects section */}
              <h2 className="mt-8 text-white/90 font-sans tracking-wider pl-6 underline text-underline pb-4 ">
                About Your Projects :
              </h2>
              <div className=" w-full   flex flex-wrap items-center justify-between">
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Project Title
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="projectTitle1"
                      id=""
                      placeholder="Project title here "
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ projTitle1: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[700px] ">
                  <label className="font-semibold text-white/90 py-2">
                    About Project
                  </label>
                  <textarea
                    name="aboutProject1"
                    maxLength="150"
                    className="w-[280px] sm:w-[500px] h-28 bg-grey-lighter text-grey-darker rounded-lg py-2 px-4 "
                    placeholder="Explain about your project"
                    onInput={(e) => {
                      setformDataState({
                        ...formDataState,
                        ...{ projTitle1About: e.target.value },
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Project Title 2
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="projectTitle2"
                      id=""
                      placeholder="Project title here "
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ projTitle2: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[700px]  ">
                  <label className="font-semibold text-white/90 py-2">
                    About Project
                  </label>
                  <textarea
                    name="aboutProject2"
                    maxLength="150"
                    className="w-[280px] sm:w-[500px] h-28 bg-grey-lighter text-grey-darker rounded-lg py-2 px-4 "
                    placeholder="Explain about your project"
                    onInput={(e) => {
                      setformDataState({
                        ...formDataState,
                        ...{ projTitle2About: e.target.value },
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Project Title 3
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="projectTitle3"
                      id=""
                      placeholder="Project title here "
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ projTitle3: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[700px] ">
                  <label className="font-semibold text-white/90 py-2">
                    About Project
                  </label>
                  <textarea
                    name="aboutProject3"
                    maxLength="150"
                    className="w-[280px] sm:w-[500px] h-28 bg-grey-lighter text-grey-darker rounded-lg py-2 px-4 "
                    placeholder="Explain about your project"
                    onInput={(e) => {
                      setformDataState({
                        ...formDataState,
                        ...{ projTitle3About: e.target.value },
                      });
                    }}
                  />
                </div>
              </div>

              {/* Skills Section starts */}
              <h2 className="mt-8 text-white/90 font-sans tracking-wider pl-6 underline text-underline pb-4 ">
                About Your skills :
              </h2>
              <div className=" w-full   flex flex-wrap items-center justify-between">
                <div className=" flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px]">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill <abbr title="required">* </abbr>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="skill1"
                      id=""
                      placeholder="Ex: Html"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4 "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ skill1: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    skill 2 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill2"
                      id=""
                      placeholder="Ex: Css"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ skill2: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 3 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill3"
                      id=""
                      placeholder="Ex: Git"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ skill3: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 4 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill4"
                      id=""
                      placeholder="Your skill here"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ skill4: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 5 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill5"
                      id=""
                      placeholder="Your skill here"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ skill5: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 6 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill6"
                      id=""
                      placeholder="Your skill here"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                      onInput={(e) => {
                        setformDataState({
                          ...formDataState,
                          ...{ skill6: e.target.value },
                        });
                      }}
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience section starts */}
              <h2 className="mt-8 text-white/90 font-sans tracking-wider pl-6 underline text-underline pb-4 ">
                Your Experience :
              </h2>
              <div className=" w-full   flex flex-wrap items-center justify-between">
                <div className="flex flex-col flex-wrap justify-center items-center">
                  <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                    <label className="font-semibold text-white/90 py-2 ">
                      Position & Company
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="experienceTitle1"
                        id=""
                        placeholder="Ex: Internship | company.co "
                        className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp1: e.target.value },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between flex-grow items-center w-full p-4 ">
                    <h2 className="text-center sm:text-left pl-4 text-white">
                      Duration -
                    </h2>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto  px-4 sm:px-0 py-2 sm:py-0 ">
                      <label className="text-white">From :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp1Dur: e.target.value },
                          });
                        }}
                      />
                    </div>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto px-4 sm:px-0 py-2 sm:py-0">
                      <label className="text-white">To :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp11Dur: e.target.value },
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[700px] ">
                  <label className="font-semibold text-white/90 py-2">
                    Describe Experince
                  </label>
                  <textarea
                    name="aboutExperience1"
                    maxLength="150"
                    className="w-[280px] sm:w-[500px] h-28 bg-grey-lighter text-grey-darker rounded-lg py-2 px-4 "
                    placeholder="Describe here"
                    onInput={(e) => {
                      setformDataState({
                        ...formDataState,
                        ...{ expComp1About: e.target.value },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col flex-wrap justify-center items-center">
                  <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                    <label className="font-semibold text-white/90 py-2 ">
                      Position & Company
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="experienceTitle2"
                        id=""
                        placeholder="Ex: Senior Analyst | company.co "
                        className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp2: e.target.value },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between flex-grow items-center w-full p-4 ">
                    <h2 className="text-center sm:text-left pl-4 text-white">
                      Duration -
                    </h2>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto  px-4 sm:px-0 py-2 sm:py-0 ">
                      <label className="text-white">From :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp2Dur: e.target.value },
                          });
                        }}
                      />
                    </div>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto px-4 sm:px-0 py-2 sm:py-0">
                      <label className="text-white">To :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp22Dur: e.target.value },
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[700px] ">
                  <label className="font-semibold text-white/90 py-2">
                    Describe Experince
                  </label>
                  <textarea
                    name="aboutExperience2"
                    maxLength="150"
                    className="w-[280px] sm:w-[500px] h-28 bg-grey-lighter text-grey-darker rounded-lg py-2 px-4 "
                    placeholder="Describe here"
                    onInput={(e) => {
                      setformDataState({
                        ...formDataState,
                        ...{ expComp2About: e.target.value },
                      });
                    }}
                  />
                </div>
                <div className="flex flex-col flex-wrap justify-center items-center">
                  <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                    <label className="font-semibold text-white/90 py-2 ">
                      Position & Company
                    </label>
                    <div className="">
                      <input
                        type="text"
                        name="experienceTitle3"
                        id=""
                        placeholder="Ex: Senior Analyst| company.co "
                        className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp3: e.target.value },
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between flex-grow items-center w-full p-4 ">
                    <h2 className="text-center sm:text-left pl-4 text-white">
                      Duration -
                    </h2>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto  px-4 sm:px-0 py-2 sm:py-0 ">
                      <label className="text-white">From :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp3Dur: e.target.value },
                          });
                        }}
                      />
                    </div>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto px-4 sm:px-0 py-2 sm:py-0">
                      <label className="text-white">To :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
                        onInput={(e) => {
                          setformDataState({
                            ...formDataState,
                            ...{ expComp33Dur: e.target.value },
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[700px] ">
                  <label className="font-semibold text-white/90 py-2">
                    Describe Experince
                  </label>
                  <textarea
                    name="aboutExperience3"
                    maxLength="150"
                    className="w-[280px] sm:w-[500px] h-28 bg-grey-lighter text-grey-darker rounded-lg py-2 px-4 "
                    placeholder="Describe here"
                    onInput={(e) => {
                      setformDataState({
                        ...formDataState,
                        ...{ expComp3About: e.target.value },
                      });
                    }}
                  />
                </div>
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
                Save & Preview
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" h-[145px] sm:h-[200px] relative ">
        <Footer className="" />
      </div>
    </>
  );
};

export default BuildResumeForm;
