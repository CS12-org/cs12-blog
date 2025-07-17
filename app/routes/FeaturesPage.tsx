import { FaRegClock } from "react-icons/fa6";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Dottcircle from "../assets/images/dottcircle.svg?react";
import Check from "../assets/images/check.svg?react";
function Features() {
  return (
    <main className="flex flex-col gap-y-3.5 text-xs lg:text-[16px] text-white">
      <section className="text-white w-full h-auto bg-crust rounded-xl px-7.5 py-4 flex flex-col content-center gap-y-2.5">
        <h1 className="font-extrabold text-xl lg:text-3xl">
          داستان این صفحه چیه؟
        </h1>
        <span className="">توضیح این صفحه</span>
      </section>
      <section className="text-white w-full h-auto bg-crust rounded-xl px-7.5 py-4 flex flex-col content-center gap-y-2.5">
        <h1 className="font-extrabold text-xl lg:text-3xl">صفحات</h1>
        <span className="">
          این وب اپ صفحات زیادی نداره اما برای هر کدوم فیچر های خاصی رو در نظر
          داریم و به همین خاطر هست که ممکنه برای پیاده سازی اکثر این فیچرا کمی
          زمان بیشتری صرف کنیم.
        </span>
      </section>
      <ul className="w-full h-auto flex flex-col bg-crust py-4 rounded-xl">
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>خانه</span>
          <FaRegClock className="h-5.5 w-5.5 text-yellow" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>ساین آپ / لاگین / تغییر رمز عبور</span>
          <Check className="ml-[-1px]" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base ">
          <span>تمپلیت پست ها</span>{" "}
          <FaRegClock className="h-5.5 w-5.5 text-yellow" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>یوزر پنل</span> <Check className="ml-[-1px]" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>یوزر پروفایل</span>{" "}
          <FaRegClock className="h-5.5 w-5.5 text-yellow" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>ارور پیج</span> <Check className="ml-[-1px]" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>صفحه چالش هفتگی</span> <Dottcircle className="ml-[-3px]" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>صفحه کتگوری ها</span> <Dottcircle className="ml-[-3px]" />
        </li>
      </ul>
      <section className="text-white w-full h-auto bg-crust rounded-xl px-7.5 py-4 flex flex-col content-center gap-y-2.5">
        <h1 className="font-extrabold text-xl lg:text-3xl">فیچر ها</h1>
        <span className="">
          ما سعی کردیم که توی سایت یه شبکه ای از هایلایت ها و صفحاتی که یوزر ها
          کامل میکنند بسازیم برای این قضیه فیچر های زیر رو در نظر گرفتیم.
        </span>
      </section>

      <ul className="w-full h-auto flex flex-col bg-crust py-4 rounded-xl font-bold">
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center items-center border-b-[1px] border-base">
          <div>
            <span>ساین آپ / لاگین / تغییر رمز عبور</span>
            <p className="text-overlay-2 font-normal">یه توضیح</p>
          </div>
          <FaRegClock className="h-5.5 w-5.5 text-yellow" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>تمپلیت پست ها</span>
          <Check className="ml-[-1px]" />
        </li>

        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>یوزر پنل</span> <Check className="ml-[-1px]" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>یوزر پروفایل</span>{" "}
          <FaRegClock className="h-5.5 w-5.5 text-yellow" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>ارور پیج</span> <Check className="ml-[-1px]" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>صفحه چالش هفتگی</span> <Dottcircle className="ml-[-3px]" />
        </li>
        <li className="flex justify-between bg-mantle h-auto px-7.5 py-2 content-center items-center border-b-[1px] border-base">
          <span>صفحه کتگوری ها</span> <Dottcircle className="ml-[-3px]" />
        </li>
      </ul>
    </main>
  );
}
export default Features;
