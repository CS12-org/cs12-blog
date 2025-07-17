import { FaRegClock } from "react-icons/fa6";
import Dottcircle from "../assets/images/dottcircle.svg?react";
import Check from "../assets/images/check.svg?react";
import type { Route } from './+types/FeaturesPage';

enum FeatureStatus {
  NOT_YET,
  PENDING,
  COMPLETED
};

const FeatureStatusIcon = {
  [FeatureStatus.COMPLETED]: <Check className="ml-[-1px]" />,
  [FeatureStatus.PENDING]: <FaRegClock className="h-5.5 w-5.5 text-yellow" />,
  [FeatureStatus.NOT_YET]: <Dottcircle className="ml-[-3px]" />,
} as const;

const pageFeatures = [
  {
    title: "مثلا یه تکست",
    status: FeatureStatus.COMPLETED
  },
  {
    title: "مثلا یه چیز دیگه",
    status: FeatureStatus.NOT_YET,
  },
  {
    title: "یه چیزی که داره پیاده سازی می‌شه",
    status: FeatureStatus.PENDING
  }
];

const coreFeatures = [
  {
    title: "مثلا یه تکست",
    status: FeatureStatus.COMPLETED,
    desc: "یک توضیح مثالی"
  },
  {
    title: "مثلا یه چیز دیگه",
    status: FeatureStatus.NOT_YET,
  },
  {
    title: "یه چیزی که داره پیاده سازی می‌شه",
    status: FeatureStatus.PENDING
  }
]

export const meta: Route.MetaFunction = () => [
  { title: "یک تایتل" },
  { name: "description", content: "some desc" }
]

function Features() {
  return (
    <main className="flex flex-col gap-y-3.5 text-body-xs lg:text-body-md">
      <section className="text-white w-full h-auto bg-crust rounded-xl px-7.5 py-4 flex flex-col content-center gap-y-2.5">
        <h2 className="text-headline-sm lg:text-headline-lg">
          داستان این صفحه چیه؟
        </h2>
        <p className="text-overlay-2">
          توضیح این صفحه
        </p>
      </section>
      <section className="text-white w-full h-auto bg-crust rounded-xl px-7.5 py-4 flex flex-col content-center gap-y-2.5">
        <h2 className="text-headline-sm lg:text-headline-lg">صفحات</h2>
        <p className="text-overlay-2">
          این وب اپ صفحات زیادی نداره اما برای هر کدوم فیچر های خاصی رو در نظر
          داریم و به همین خاطر هست که ممکنه برای پیاده سازی اکثر این فیچرا کمی
          زمان بیشتری صرف کنیم.
        </p>
      </section>
      <ul className="w-full h-auto flex flex-col bg-crust py-4 rounded-xl">
        {pageFeatures.map(item =>
        (<li key={item.title} className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <p>{item.title}</p>
          {FeatureStatusIcon[item.status]}
        </li>))}
      </ul>
      <section className="text-white w-full h-auto bg-crust rounded-xl px-7.5 py-4 flex flex-col content-center gap-y-2.5">
        <h2 className="text-headline-sm lg:text-headline-lg">فیچر ها</h2>
        <p className="text-overlay-2">
          ما سعی کردیم که توی سایت یه شبکه ای از هایلایت ها و صفحاتی که یوزر ها
          کامل میکنند بسازیم برای این قضیه فیچر های زیر رو در نظر گرفتیم.
        </p>
      </section>

      <ul className="w-full h-auto flex flex-col bg-crust py-4 rounded-xl font-bold">
        {coreFeatures.map(item => (
          <li key={item.title} className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
            <div>
              <p>{item.title}</p>
              {item.desc && <p className="text-overlay-2 font-normal">{item.desc}</p>}
            </div>
            {FeatureStatusIcon[item.status]}
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Features;
