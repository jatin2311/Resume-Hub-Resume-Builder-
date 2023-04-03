import create from "zustand";

const loadingState = (set) => ({
  loading: false,
  setLoading: (e) =>
    set((state) => ({
      loading: e,
    })),
});

export const useLoadingStore = create(loadingState);
