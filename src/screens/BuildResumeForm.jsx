import React from "react";
import Footer from "../components/homeComponent/Footer";

const BuildResumeForm = () => {
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
          <form action="">
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
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 7 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill7"
                      id=""
                      placeholder="Your skill here"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 8 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill8"
                      id=""
                      placeholder="Your skill here"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 9 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill9"
                      id=""
                      placeholder="Your skill here"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
                    />
                    <p className="text-red-900 text-base font-semibold text-center">
                      {/* {formError.userName} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row p-4 w-auto sm:w-[600px] ">
                  <label className="font-semibold text-white/90 py-2 ">
                    Skill 10 <abbr title="required">* </abbr>
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="skill10"
                      id=""
                      placeholder="Your skill here"
                      className="w-[280px] sm:w-[400px] bg-grey-lighter text-grey-darker rounded-lg h-10 px-4  "
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
                      />
                    </div>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto px-4 sm:px-0 py-2 sm:py-0">
                      <label className="text-white">To :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
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
                      />
                    </div>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto px-4 sm:px-0 py-2 sm:py-0">
                      <label className="text-white">To :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
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
                      />
                    </div>
                    <div className="flex justify-between sm:justify-center items-center gap-4 w-full sm:w-auto px-4 sm:px-0 py-2 sm:py-0">
                      <label className="text-white">To :</label>
                      <input
                        className="px-2 h-10 w-24 rounded-lg"
                        type="number"
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
