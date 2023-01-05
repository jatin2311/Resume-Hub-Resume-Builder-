import create from "zustand";

// all array contains array of an objects given below

const formStore = (set) => ({
  formData: [], // main data obj
  name: "",
  designation: "",
  about: "",
  contact: [],
  email: "",
  phoneNumber: "",
  link: [],
  linkName: "",
  linkUrl: "",
  address: "",
  education: [],
  eduName: "",
  instName: "",
  duration: "",
  skills: [],
  skillsName: "",
  project: [],
  projectName: "",
  aboutProject: "",
  experience: [],
  expName: "",
  aboutExpPost: "",
  expDuration: "",
  achievement: [],
  achName: "",
  abtAch: "",
  achDuration: "",

  setName: (e) => {
    set((state) => ({
      name: e,
    }));
  },

  setDesignation: (e) => {
    set((state) => ({
      designation: e,
    }));
  },

  setAbout: (e) => {
    set((state) => ({
      about: e,
    }));
  },

  setContact: (e) => {
    if (e.email && e.phoneNumber && e.address && e.link.length === 0) {
      set((state) => ({
        contact: [e, ...state.contact],
      }));
    } else {
      console.log("Insufficient Data 404");
    }
  },
  setEducation: (e) => {
    if (e.eduName && e.instName && e.duration) {
      set((state) => ({
        education: [...state.education, e],
      }));
    } else {
      console.log("Insufficient Data 404");
    }
  },

  setSkills: (e) => {
    if (e.skillsName) {
      set((state) => ({
        skills: [...state.skills, e],
      }));
    } else {
      console.log("Insufficient Data 404");
    }
  },
});

export const useFormStore = create(formStore);
