import { Outlet } from "react-router";
import MainFooter from "./MainFooter";
import MainTopbar from "./MainTopbar";
import MainBottombar from "./MainBottombar";
import { useState } from "react";

function Main() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="px-6">
      <div className="max-w-sm lg:max-w-235 mx-auto space-y-5 pb-5">
        <MainTopbar
          mobileSidebarOpen={mobileSidebarOpen}
          onMobileSidebarChange={setMobileSidebarOpen}
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
