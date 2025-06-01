import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { FaAnglesRight, FaFileCode, FaMicrochip } from "react-icons/fa6";

import Button from "~/components/Button";
import { twJoin } from "tailwind-merge";
import twMerge from "~/lib/tw-merge";

const groups = [
  {
    slug: "#coding",
    icon: FaFileCode,
    title: "برنامه نویسی",
  },
  {
    slug: "#",
    icon: FaMicrochip,
    title: "معماری کامپیوتر",
  },
];

function MainArticleGroups() {
  const headingId = useId();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      aria-labelledby={headingId}
      className={twMerge(
        "p-3 bg-crust w-65 rounded-xl",
        collapsed && "w-17",
        "transition-[width]"
      )}
    >
      <header className="flex items-center min-h-6.75">
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.h2
              exit={{ opacity: 0, width: 0 }}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              id={headingId}
              className="text-title-md truncate"
            >
              مطالب سایت
            </motion.h2>
          )}
        </AnimatePresence>

        <Button
          variant="none"
          onPress={() => setCollapsed((prev) => !prev)}
          className="bg-base p-1.5 rounded-lg mr-auto shrink-0"
        >
          <FaAnglesRight
            size={10}
            className={twJoin(collapsed ? "rotate-180" : "", "transition")}
          />
        </Button>
      </header>

      <div role="separator" className="-mx-3 h-px bg-surface-0 my-3" />

      <nav className="text-body-sm">
        <ul className="flex flex-col items-stretch gap-1.5">
          {groups.map((group) => (
            <li key={group.slug}>
              <Link
                to={group.slug}
                className="flex items-center justify-between bg-mantle p-2 rounded-md"
              >
                <AnimatePresence initial={false}>
                  {!collapsed && (
                    <motion.span
                      className="truncate"
                      exit={{ opacity: 0, width: 0 }}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                    >
                      {group.title}
                    </motion.span>
                  )}
                </AnimatePresence>
                <group.icon
                  size={16}
                  className="box-content p-1.5 rounded bg-base text-sky shrink-0"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default MainArticleGroups;
