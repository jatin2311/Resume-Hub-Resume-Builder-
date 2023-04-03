import create from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
import { persist } from "zustand/middleware";
import { useLoadingStore } from "./loading.store";
const setLoading = useLoadingStore.getState().setLoading;
const userStore = (set) => ({
  user: {},

  addUser: (d) => {
    set((state) => ({
      user: d,
    }));
  },
  logOutUser: async () => {
    try {
      setLoading(true);
      const data = await axios.get("/logout");
      toast.success(data.data.msg);
      set((state) => ({
        user: {},
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "Something went wrong");
    }
  },
});

export const useUserStore = create(
  persist(userStore, {
    name: "userDataStore",
    getStorage: () => sessionStorage,
  })
);
