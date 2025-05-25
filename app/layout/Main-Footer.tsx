import { twJoin } from "tailwind-merge";
import { FaCopyright } from "react-icons/fa6";

import Logo from "~/assets/images/cs12-logo.svg?react";

function MainFooter() {
  return (
    <footer
      className={twJoin(
        "h-17.5 rounded-xl bg-crust flex",
        "justify-center lg:justify-between",
        "items-center px-4 lg:px-7.5"
      )}
    >
      <Logo className="hidden lg:block" />

      <p className="text-body-sm">
        کلیه حقوق مادی و معنوی سایت برای CS12 محفوظ است.
      </p>

      <span className="bg-base p-3 rounded-full mr-6 hidden lg:block">
        <FaCopyright size={16} />
      </span>
    </footer>
  );
}

export default MainFooter;
