import { type Dispatch, type SetStateAction, useState } from "react";
import { Input, TextField } from "react-aria-components";
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
  const [focused, setFocused] = useState(false);

  return (
    <header
      className={twJoin(
        "h-17.5 rounded-xl bg-crust mt-8",
        "flex items-center px-4",
        "gap-3.5 [&>*]:shrink-0 lg:px-7.5",
        "relative z-11 select-none",
      )}
    >
      <Logo />

      <div
        className={twJoin(
          "flex items-center grow gap-3.5",
          isBlured && "blur-[4px] pointer-events-none",
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

        <span className="flex gap-x-4">
          <Button
            variant="none"
            onPress={() => onMobileSidebarChange((prev) => !prev)}
            className={twMerge(
              "p-3 rounded-lg lg:hidden",
              mobileSidebarOpen && "bg-sapphire text-crust",
            )}
          >
            <FaBook size={16} />
          </Button>
          <TextField className="relative w-10 h-10">
            <Input
              aria-label="سرچ بار"
              onBlur={() => setFocused(false)}
              onFocus={() => setFocused(true)}
              placeholder={focused ? "جستوجو کنید" : ""}
              className="w-10 h-10 rounded-lg bg-base absolute left-0 focus:p-2.5 placeholder:text-xs text-xs placeholder:text-text focus:outline-none focus:w-[245px]  lg:focus:w-[660px] transition-all duration-200 ease-in-out cursor-pointer"
            />
            <FaMagnifyingGlass
              size={16}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-none"
            />
          </TextField>

          <Button
            variant="none"
            aria-label="دکمه ورود"
            className="p-3 rounded-lg cursor-default bg-base"
          >
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
