import create from "zustand";

// all array contains array of an objects given below

const formStore = (set) => ({
  formData: [], // main data obj
  // name: "",
  // designation: "",
  // about: "",
  //
  // contact: [],

  // email: "",
  // phoneNumber: "",

  //
  // link: [],

  // linkName: "",
  // linkUrl: "",
  // address: "",

  //
  // education: [],

  // eduName1: "",
  // instName1: "",
  // duration1: "",
  // eduName2: "",
  // instName2: "",
  // duration2: "",

  //
  // skills: [],

  // skillsName1: "",
  // skillsName2: "",
  // skillsName3: "",
  // skillsName4: "",

  //
  // project: [],

  // projectName1: "",
  // aboutProject1: "",
  // projectName2: "",
  // aboutProject2: "",
  // projectName3: "",
  // aboutProject3: "",

  //
  // experience: [],

  // expName1: "",
  // aboutExpPost1: "",
  // expDuration1: "",

  //
  // achievement: [],

  // achName1: "",
  // abtAch1: "",
  // achDuration1: "",
  // achName2: "",
  // abtAch2: "",
  // achDuration2: "",

  //

  setFormData: (e) => {
    set((state) => ({
      formData: e,
    }));
  },
  // setName: (e) => {
  //   set((state) => ({
  //     name: e,
  //   }));
  // },

  // setDesignation: (e) => {
  //   set((state) => ({
  //     designation: e,
  //   }));
  // },

  // setAbout: (e) => {
  //   set((state) => ({
  //     about: e,
  //   }));
  // },

  // setContact: (e) => {
  //   if (e.email && e.phoneNumber && e.address && e.link.length === 0) {
  //     set((state) => ({
  //       contact: [e, ...state.contact],
  //     }));
  //   } else {
  //     console.log("Insufficient Data 404");
  //   }
  // },
  // setEducation: (e) => {
  //   if (e.eduName && e.instName && e.duration) {
  //     set((state) => ({
  //       education: [...state.education, e],
  //     }));
  //   } else {
  //     console.log("Insufficient Data 404");
  //   }
  // },

  // setSkills: (e) => {
  //   if (e.skillsName) {
  //     set((state) => ({
  //       skills: [...state.skills, e],
  //     }));
  //   } else {
  //     console.log("Insufficient Data 404");
  //   }
  // },
});

export const useFormStore = create(formStore);
