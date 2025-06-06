import { twJoin } from "tailwind-merge";
import { FaSun } from "react-icons/fa6";

import Logo from "~/assets/images/cs12-logo.svg?react";
import Button from "~/components/Button";

const COPYRIGHT_TEXT = "کلیه حقوق مادی و معنوی سایت برای CS12 محفوظ است.";

function MainFooter() {
  return (
    <footer className="bg-crust rounded-xl">
      <div
        className={twJoin(
          "min-h-17.5 flex",
          "justify-between items-center",
          "px-4 lg:px-7.5 w-full",
        )}
      >
        <Logo />

        <p className="text-body-sm hidden lg:block">{COPYRIGHT_TEXT}</p>

        <Button
          variant="none"
          className="p-3 bg-base rounded-full text-overlay-1"
        >
          <FaSun size={16} />
        </Button>
      </div>

      <p className="text-body-sm lg:hidden px-4 pb-4 text-center">
        {COPYRIGHT_TEXT}
      </p>
    </footer>
  );
}

export default MainFooter;
