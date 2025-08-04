import { Tab, TabList, TabPanel, Tabs, Text } from "react-aria-components";
import CommentSection from "~/components/Posts/Sections/CommentSection";
import Highlights from "~/components/Posts/Sections/HighLightSection";
import ReviewSection from "~/components/Posts/Sections/ReviewSection";

export default function PostTabs() {
  return (
    <Tabs className="flex flex-col gap-y-[10px]">
      <TabList className="flex rounded-[10px] gap-x-[10px] p-[10px] bg-crust rouned-[10px]">
        <Tab
          id="highlights"
          className="bg-base cursor-pointer selected:bg-sapphire selected:text-crust h-[48px] w-[143px] text-[12px] font-bold flex justify-center items-center rounded-[5px]"
        >
          هایلایت ها{" "}
        </Tab>
        <Tab
          id="comments"
          className="bg-base cursor-pointer  selected:bg-sapphire selected:text-crust h-[48px] w-[143px] text-[12px] font-bold flex justify-center items-center rounded-[5px]"
        >
          نظرات
        </Tab>
        <Tab
          id="review"
          className="bg-base cursor-pointer selected:bg-sapphire selected:text-crust h-[48px] w-[143px] text-[12px] font-bold flex justify-center items-center rounded-[5px]"
        >
          نقد و بررسی
        </Tab>
      </TabList>
      <TabPanel id="highlights">
        <Highlights />
      </TabPanel>
      <TabPanel id="comments">
        <CommentSection />
      </TabPanel>
      <TabPanel id="review">
        <ReviewSection />
      </TabPanel>
    </Tabs>
  );
}
