import type { ReactNode } from "react";
import {
  FaArrowRightToBracket,
  FaBars,
  FaBook,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { twJoin } from "tailwind-merge";
import Logo from "~/assets/images/cs12-logo.svg?react";
import Button from "~/components/Button";
import twMerge from "~/lib/tw-merge";
import { useGlobalStore } from "~/store/StoreProvider";
import MainThemeSwitch from "./MainThemeSwitch";

const PATH_ICONS: Record<string, ReactNode> = {
  "/": <FaBook size={16} />,
  "/user-panel": <FaBars size={16} />,
};

function MainTopbar() {
  const sideBarOpen = useGlobalStore((state) => state.isSideBarOpen);
  const toggleIsSideBarOpen = useGlobalStore(
    (state) => state.toggleIsSideBarOpen,
  );

  const { pathname } = useLocation();
  const matchedIcon = PATH_ICONS[pathname];

  return (
    <header
      className={twJoin(
        "h-17.5 rounded-xl bg-crust mt-8",
        "flex items-center px-4 [&>button]:bg-base",
        "gap-3.5 [&>*]:shrink-0 lg:px-7.5",
        "[&>button]:text-overlay-1 relative",
        "z-11 ",
      )}
    >
      <Logo />

      <nav className="hidden text-body-sm mr-3.5 lg:block blur-xs">
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

      <span className="">
        {matchedIcon && (
          <Button
            variant="none"
            onPress={() => toggleIsSideBarOpen()}
            className={twMerge(
              "p-3 rounded-lg lg:hidden select-none ",
              sideBarOpen && "bg-sapphire text-crust",
            )}
          >
            {matchedIcon}
          </Button>
        )}
        <Button variant="none" className="p-3 rounded-lg cursor-default">
          <FaMagnifyingGlass size={16} />
        </Button>
        <Button variant="none" className="p-3 rounded-lg cursor-default">
          <FaArrowRightToBracket size={16} />
        </Button>
      </span>
      <span className="blur-xs select-none">
        <MainThemeSwitch />
      </span>
    </header>
  );
}

export default MainTopbar;
