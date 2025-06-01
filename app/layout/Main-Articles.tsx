import { useId } from "react";
import { FaAnglesRight, FaFileCode, FaMicrochip } from "react-icons/fa6";
import { Link } from "react-router";
import Button from "~/components/Button";

function MainArticles() {
  const headingId = useId();

  return (
    <aside
      aria-labelledby={headingId}
      className="p-3 bg-crust min-w-65 rounded-xl"
    >
      <header className="flex items-center justify-between">
        <h2 id={headingId} className="text-title-md">
          مطالب سایت
        </h2>

        <Button variant="none" className="bg-base p-1.5 rounded-lg">
          <FaAnglesRight size={10} />
        </Button>
      </header>

      <div role="separator" className="-mx-3 h-px bg-surface-0 my-3" />

      <nav className="text-body-sm">
        <ul className="flex flex-col items-stretch gap-1.5">
          <li>
            <Link
              to="#"
              className="flex items-center justify-between bg-mantle p-2 rounded-md"
            >
              <span>برنامه نویسی</span>
              <FaFileCode
                size={16}
                className="box-content p-1.5 rounded bg-base text-sky"
              />
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className="flex items-center justify-between bg-mantle p-2 rounded-md"
            >
              <span>معماری کامپیوتر</span>
              <FaMicrochip
                size={16}
                className="box-content p-1.5 rounded bg-base text-sky"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default MainArticles;
