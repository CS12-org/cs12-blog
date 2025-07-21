import Button from "~/components/Button"
import twMerge from "~/lib/tw-merge";

type ThemeSettingProps = {
  buttonText: string;
  bgColorClass: string; 
};

function ThemeSetting({ buttonText, bgColorClass }: ThemeSettingProps) {
  return (
    <div className="flex bg-mantle  rounded-md">
      <div className={twMerge("h-3 w-3 m-2.5 rounded-bl rounded-tr", bgColorClass)}> </div>
    {/* <div className={`${bgColorClass} h-3 w-3 m-2.5 rounded-bl rounded-tr`}></div> */}
      <Button variant="none" className="m-2.5 text-xs ">{buttonText} </Button>
    </div>
  );
}

export default ThemeSetting;
