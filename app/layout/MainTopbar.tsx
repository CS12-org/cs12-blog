import type { Dispatch, SetStateAction } from "react";
import {
  FaArrowRightToBracket,
  FaBook,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { Link } from "react-router";
import { twJoin } from "tailwind-merge";
import Logo from "~/assets/images/cs12-logo.svg?react";
import Button from "~/components/Button";
import twMerge from "~/lib/tw-merge";
import MainThemeSwitch from "./MainThemeSwitch";

type Props = {
  mobileSidebarOpen: boolean;
  onMobileSidebarChange: Dispatch<SetStateAction<boolean>>;
  isBlured?: boolean;
};

function MainTopbar(props: Props) {
  const { onMobileSidebarChange, mobileSidebarOpen, isBlured = false } = props;

  return (
    <header
      className={twJoin(
        "h-17.5 rounded-xl bg-crust mt-8",
        "flex items-center px-4",
        "gap-3.5 [&>*]:shrink-0 lg:px-7.5",
        "relative z-11 select-none",
      )}
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
      } as any}
    >
   
      <Logo />

 
      <div
        className={twJoin(
          "flex items-center grow gap-3.5",
          isBlured && "blur-[4px] pointer-events-none"
        )}
      >
        <nav className="hidden text-body-sm mr-3.5 lg:block">
          <ul className="flex gap-7">
            <li>
              <Link to="#" className="cursor-default select-none">
                جوخه
              </Link>
            </li>
            <li>
              <Link to="#" className="cursor-default select-none">
                بمان تا با
              </Link>
            </li>
            <li>
              <Link to="#" className="cursor-default select-none">
                دوباره
              </Link>
            </li>
            <li className="text-maroon">
              <Link to="#" rel="help" className="cursor-default select-none">
                کشک
              </Link>
            </li>
          </ul>
        </nav>

        <div aria-hidden className="grow" />

        <span>
          <Button
            variant="none"
            onPress={() => onMobileSidebarChange((prev) => !prev)}
            className={twMerge(
              "p-3 rounded-lg lg:hidden ",
              mobileSidebarOpen && "!bg-sapphire !text-crust"
            )}
          >
            <FaBook size={16} />
          </Button>
          <Button variant="none" className="p-3 rounded-lg cursor-default">
            <FaMagnifyingGlass size={16} />
          </Button>
          <Button variant="none" className="p-3 rounded-lg cursor-default">
            <FaArrowRightToBracket size={16} />
          </Button>
        </span>

        <span className="select-none">
          <MainThemeSwitch />
        </span>
      </div>
    </header>
  );
}

export default MainTopbar;
