import { useState } from "react";
import { Outlet } from "react-router";
import MainBottombar from "./MainBottombar";
import MainFooter from "./MainFooter";
import MainTopbar from "./MainTopbar";

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
        {/* من این رو کامنت کردم چون باعث وجود یک ناو توی صفحات دیگه میشد.: farhan  */}
        {/* <MainBottombar /> */}
        <MainFooter />
      </div>
    </div>
  );
}

export default Main;
