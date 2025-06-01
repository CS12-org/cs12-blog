import { Outlet } from "react-router";
import MainFooter from "./Main-Footer";
import MainTopbar from "./Main-Topbar";
import MainBottombar from "./Main-Bottombar";
import MainArticles from "./Main-ArticleGroups";

function Main() {
  return (
    <div className="px-6">
      <div className="max-w-sm lg:max-w-235 mx-auto space-y-5">
        <MainTopbar />
        <div className="flex [&>*:nth-child(1)]:shrink-0 [&>*:nth-child(2)]:grow gap-5 items-start overflow-hidden">
          <MainArticles />
          <Outlet />
        </div>
        <MainBottombar />
        <MainFooter />
      </div>
    </div>
  );
}

export default Main;
