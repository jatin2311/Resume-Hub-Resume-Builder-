import create from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

const userStore = (set) => ({
  user: {},

  addUser: (d) => {
    console.log(d);
    set((state) => ({
      user: d,
    }));
  },
  logOutUser: async () => {
    try {
      const data = await axios.get("/logout");
      toast.success(data.data.msg);
      set((state) => ({
        user: {},
      }));
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  },
});

export const useUserStore = create(userStore);
