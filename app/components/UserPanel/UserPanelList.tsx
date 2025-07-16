import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  useEffect,
  useId,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
 
import { FaAnglesRight, FaFileCode, FaMicrochip, FaX } from "react-icons/fa6";
import { RiUser3Fill } from "react-icons/ri";
import Button from "~/components/Button";
import { twJoin } from "tailwind-merge";
import twMerge from "~/lib/tw-merge";

type Props = {
  mobileSidebarOpen: boolean;
  onMobileSidebarChange: Dispatch<SetStateAction<boolean>>;
};

const groups = [
  {
    slug: "#",
    icon:  RiUser3Fill,
    title:"اطلاعات اولیه کاربر"
  },
  {
    slug: "#",
    icon:  RiUser3Fill,
    title: "پست های سیو شده",
  },
    {
    slug: "#",
    icon: FaMicrochip,
    title: "یادداشت ها و هایلایت ها",
  },
      {
    slug: "#",
    icon: FaMicrochip,
    title: "نظرات و پرسش و پاسخ",
  },
];

function UserPanelList(props: Props) {
  const { onMobileSidebarChange, mobileSidebarOpen } = props;

  const headingId = useId();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 1024) setCollapsed(false);
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const asideContents = (
    <>
      <header className="flex items-center min-h-6.75">
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.h2
              id={headingId}
              exit={{ opacity: 0, width: 0 }}
              className="text-title-md truncate"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}>
              مطالب سایت
            </motion.h2>
          )}
        </AnimatePresence>

        <Button
          variant="none"
          onPress={() => setCollapsed(prev => !prev)}
          className={twMerge(
            "bg-base p-1.5 rounded-lg mr-auto shrink-0",
            collapsed && "p-[17px] bg-mantle transition-all",
            "hidden lg:block",
          )}>
          <FaAnglesRight
            size={10}
            className={twJoin(collapsed ? "rotate-180" : "", "transition")}
          />
        </Button>

        <Button
          variant="none"
          onPress={() => onMobileSidebarChange(false)}
          className={twMerge(
            "bg-base p-1.5 rounded-lg mr-auto shrink-0",
            "block lg:hidden",
          )}>
          <FaX size={10} className="text-red" />
        </Button>
      </header>
      <div role="separator" className="-mx-3 h-px bg-surface-0 my-3" />
      <nav className="text-body-sm">
        <ul className="flex flex-col items-stretch gap-1.5">
          {groups.map(group => (
            <li key={group.slug}>
              <Link
                to={group.slug}
                className={twJoin(
                  "flex items-center justify-between bg-mantle p-2",
                  "hover:brightness-110 active:brightness-95 transition",
                  "rounded-md",
                )}>
                <AnimatePresence initial={false}>
                  {!collapsed && (
                    <motion.span
                      className="truncate"
                      exit={{ opacity: 0, width: 0 }}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}>
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
    </>
  );

  return (
    <>
      <AnimatePresence initial={false}>
        {mobileSidebarOpen && (
          <motion.div
            aria-hidden
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-9 bg-overlay-0/5 backdrop-blur-xs lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        aria-labelledby={headingId}
        className={twMerge(
          "p-3 bg-crust w-full rounded-xl",
          "transition-[width] hidden lg:block max-w-sm max-w-65",
          "sticky top-5",
          collapsed && "w-17",
        )}>
        {asideContents}
      </aside>

      <AnimatePresence initial={false}>
        {mobileSidebarOpen && (
          <motion.aside
            aria-labelledby={headingId}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "-1rem" }}
            initial={{ opacity: 0, translateY: "-1rem" }}
            className={twMerge(
              "fixed top-30.5 right-[calc((100%-384px)/2)]",
              "p-3 bg-crust w-full rounded-xl max-w-sm z-10",
              "lg:hidden",
            )}>
            {asideContents}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default UserPanelList;
