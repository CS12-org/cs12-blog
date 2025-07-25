import { createStore } from "zustand/vanilla";

export type GlobalState = {
  isSideBarOpen: boolean;
};

export type GlobalActions = {
  toggleIsSideBarOpen: VoidFunction;
};

export type GlobalStore = GlobalState & GlobalActions;

export const createGlobalStore = () => {
  return createStore<GlobalStore>()((set) => ({
    isSideBarOpen: false,
    toggleIsSideBarOpen: () =>
      set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
  }));
};
