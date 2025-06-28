import { useState } from "react";
import ArticleCategories from "~/components/Home/ArticleCategories";
import Post from "~/components/Home/Post";
import WeeklyChallenge from "~/components/Home/WeeklyChallenge";

function Home() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex items-start gap-5">
      <ArticleCategories
        mobileSidebarOpen={mobileSidebarOpen}
        onMobileSidebarChange={setMobileSidebarOpen}
      />

      <div className="grow overflow-hidden">
        <WeeklyChallenge />

        <div
          role="separator"
          className="h-[3px] bg-surface-0 my-5 rounded-full"
        />

        <ul className="flex flex-col items-stretch gap-5">
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
          <li>
            <Post />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
