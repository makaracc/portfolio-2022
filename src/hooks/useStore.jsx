import create from "zustand";

export const useStore = create((set) => ({
  path: "/",
  setPath: (path) => {
    console.log(path);
    return set({ path });
  },
}));
