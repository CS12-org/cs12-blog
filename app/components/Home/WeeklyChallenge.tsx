import { FaPersonRunning, FaRegClock } from "react-icons/fa6";
import { Link } from "react-router";
import { twJoin } from "tailwind-merge";

import Cs12ChallengeImg from "~/assets/images/cs12-challenge.png?url";
import Cs12ChallengeLogo from "~/assets/images/cs12challengelogo.png?url";

const COLORS = ["text-yellow", "text-peach", "text-lavender"];

const TAGS = ["چالش", "گیت", "چالش_هفتگی"];

function WeeklyChallenge() {
  return (
    <article className="rounded-xl bg-crust py-5">
      <header className="px-5 flex items-center gap-1 [&>*]:shrink-0 mb-2.5">
        <h3 className="text-body-sm text-subtext-0">چالش هفتگی</h3>
        <FaPersonRunning size={20} className="text-yellow" />
        <FaRegClock size={18} className="mr-auto text-lavender" />
      </header>

      <main className="px-6 lg:px-10">
        <Link to="#" className="w-full">
          <img
            alt="weekly challenge"
            src={Cs12ChallengeImg}
            className="w-full rounded-2xl mb-4.5"
          />
        </Link>

        <div className="flex items-center justify-between mb-4.5">
          <h4 className="text-label-sm lg:text-title-xs">
            <span className="text-red hidden lg:inline">توجه :</span>
            <span> چالش هفتگی شروع شد</span>
          </h4>

          <p className="text-sky text-label-sm lg:text-title-xs">
            ۷ روز مانده به اتمام چالش
          </p>
        </div>

        <div
          className={twJoin(
            "bg-base rounded-xl px-4 py-3",
            "flex items-start gap-2.5 border",
            "border-solid border-surface-0",
          )}>
          <img
            src={Cs12ChallengeLogo}
            alt="weekly challenge logo"
            className="size-11.5 rounded-md"
          />

          <div>
            <h2 className="text-title-sm mb-1">
              با ما در هفته اول چالش برنامه نویسی با گیت رو شروع کنید.
            </h2>

            <p className="text-subtext-1 text-body-sm mb-2">
              سه تا مقاله رو میخونی یه ریپو میاری بالا و از بست پرکتیس های توی
              مقاله استفاده میکنی و بومممم 💥 هم گیت رو یاد گرفتی هم یه جایزه
              میبری!
            </p>

            <ul className="flex items-start justify-start text-body-xs gap-2.5">
              {TAGS.map((tag, index) => (
                <li key={tag} className={COLORS[index % COLORS.length]}>
                  <Link to="#" className="hover:underline">
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="px-10 mt-4">
        <p className="text-title-sm">خوب کد بزنی!</p>
      </footer>
    </article>
  );
}

export default WeeklyChallenge;
