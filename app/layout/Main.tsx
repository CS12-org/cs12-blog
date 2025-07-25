import { useState } from "react";
import { Outlet } from "react-router";
import { useGlobalStore } from "~/store/StoreProvider";
import MainBottombar from "./MainBottombar";
import MainFooter from "./MainFooter";
import MainTopbar from "./MainTopbar";

function Main() {
  const sideBarOpen = useGlobalStore((state) => state.isSideBarOpen);
  const toggleIsSideBarOpen = useGlobalStore(
    (state) => state.toggleIsSideBarOpen,
  );

  return (
    <div className="px-6">
      <div className="max-w-sm lg:max-w-235 mx-auto space-y-5 pb-5">
        <MainTopbar
          mobileSidebarOpen={sideBarOpen}
          onMobileSidebarChange={toggleIsSideBarOpen}
        />
        <main>
          <Outlet />
        </main>
        <MainBottombar />
        <MainFooter />
      </div>
    </div>
  );
}

export default Main;
