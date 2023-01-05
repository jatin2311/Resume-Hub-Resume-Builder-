import create from "zustand";

const userStore = (set) => ({
  user: {},

  addUser: (d) => {
    console.log(d);
    set((state) => ({
      user: d,
    }));
  },
  logOutUser: () => {
    set((state) => ({
      user: {},
    }));
  },
});

export const useUserStore = create(userStore);
