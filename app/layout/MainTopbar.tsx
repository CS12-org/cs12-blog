import { Link } from "react-router";
import { twJoin } from "tailwind-merge";
import type { Dispatch, SetStateAction } from "react";
import {
  FaBook,
  FaMagnifyingGlass,
  FaArrowRightToBracket,
  FaSun,
} from "react-icons/fa6";

import Button from "~/components/Button";
import Logo from "~/assets/images/cs12-logo.svg?react";
import twMerge from "~/lib/tw-merge";
import MainThemeSwitch from "./MainThemeSwitch";

type Props = {
  mobileSidebarOpen: boolean;
  onMobileSidebarChange: Dispatch<SetStateAction<boolean>>;
};

function MainTopbar(props: Props) {
  const { onMobileSidebarChange, mobileSidebarOpen } = props;

  return (
    <header
      className={twJoin(
        "h-17.5 rounded-xl bg-crust mt-8",
        "flex items-center px-4 [&>button]:bg-base",
        "gap-3.5 [&>*]:shrink-0 lg:px-7.5",
        "[&>button]:text-overlay-1 relative",
        "z-11",
      )}>
      <Logo />

      <nav className="hidden text-body-sm mr-3.5 lg:block">
        <ul className="flex gap-7">
          <li>
            <Link to="#">خونه</Link>
          </li>
          <li>
            <Link to="#">تماس با ما</Link>
          </li>
          <li>
            <Link to="#">درباره ما</Link>
          </li>
          <li className="text-maroon">
            <Link to="#" rel="help">
              کمک!
            </Link>
          </li>
        </ul>
      </nav>

      <div role="separator" className="grow" />

      <Button
        variant="none"
        onPress={() => onMobileSidebarChange(prev => !prev)}
        className={twMerge(
          "p-3 rounded-lg lg:hidden",
          mobileSidebarOpen && "!bg-sapphire !text-crust",
        )}>
        <FaBook size={16} />
      </Button>
      <Button variant="none" className="p-3 rounded-lg">
        <FaMagnifyingGlass size={16} />
      </Button>
      <Button variant="none" className="p-3 rounded-lg">
        <FaArrowRightToBracket size={16} />
      </Button>
      <MainThemeSwitch />
    </header>
  );
}

export default MainTopbar;
