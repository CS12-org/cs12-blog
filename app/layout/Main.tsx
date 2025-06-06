import { Outlet } from "react-router";
import MainFooter from "./MainFooter";
import MainTopbar from "./MainTopbar";
import MainBottombar from "./MainBottombar";
import MainArticles from "./MainArticleGroups";
import { useState } from "react";
import { twJoin } from "tailwind-merge";

function Main() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="px-6">
      <div className="max-w-sm lg:max-w-235 mx-auto space-y-5">
        <MainTopbar
          mobileSidebarOpen={mobileSidebarOpen}
          onMobileSidebarChange={setMobileSidebarOpen}
        />
        <div
          className={twJoin(
            "flex lg:[&>*:nth-child(1)]:shrink-0",
            "lg:[&>*:nth-child(2)]:grow gap-5 items-start",
          )}>
          <MainArticles
            mobileSidebarOpen={mobileSidebarOpen}
            onMobileSidebarChange={setMobileSidebarOpen}
          />
          <Outlet />
        </div>
        <MainBottombar />
        <MainFooter />
      </div>
    </div>
  );
}

export default Main;
