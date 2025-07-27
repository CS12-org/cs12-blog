import type { ReactNode } from "react";
import { FaBars, FaBook, FaBookOpen } from "react-icons/fa6";
import { createStore } from "zustand/vanilla";

export type GlobalState = {
  isSideBarOpen: boolean;
  mobileSidebarIcons: Record<string, ReactNode>;
};

export type GlobalActions = {
  toggleIsSideBarOpen: VoidFunction;
  getSidebarIconByPath: (pathname: string) => ReactNode | null;
};

export type GlobalStore = GlobalState & GlobalActions;

export const createGlobalStore = () => {
  return createStore<GlobalStore>()((set, get) => ({
    isSideBarOpen: false,
    mobileSidebarIcons: {
      "/user-panel": <FaBars size={16} />,
      "/": <FaBook size={16} />,
    },

    toggleIsSideBarOpen: () =>
      set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),

    getSidebarIconByPath: (pathname: string) => {
      const icons = get().mobileSidebarIcons;
      const match = Object.keys(icons).find((key) => key === pathname);
      return match ? icons[match] : null;
    },
  }));
};
