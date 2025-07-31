import { Button, Text } from "react-aria-components";
import Close from "~/assets/images/close.svg?react";
import Comments from "~/assets/images/comments.svg?react";
import DecreaseArrow from "~/assets/images/decreaseArrow.svg?react";
import ExclamationMark from "~/assets/images/excalamation.svg?react";
import Profile from "~/assets/images/farhan.jpg?url";
import IncreaseArrow from "~/assets/images/increaseArrow.svg?react";
import PlusSign from "~/assets/images/plus-sign.svg?react";
import ThreeDotts from "~/assets/images/threeDotts.svg?react";
import Profile2 from "~/assets/images/user-profile.png?url";
import { TextInput } from "../UserPanel/TextFeild";

export default function ReviewSection() {
  return (
    <section className="text-text flex flex-col gap-[10px]">
      <header className="bg-crust text-subtext-0 rounded-[10px]  w-full p-[20px] font-extrabold text-[20px]">
        نقد و بررسی و نکات تکمیلی{" "}
      </header>
      <section className="flex flex-col  rounded-[10px] bg-crust gap-[15px]  py-[28px] px-[20px]">
        <header className="flex justify-between items-center">
          <div className="flex gap-[5px] items-center">
            <div className="bg-mantle  rounded-full w-[38px] h-[38px] flex justify-center items-center">
              {" "}
              <ExclamationMark fill="#ED8796" />{" "}
            </div>
            <Text className="text-maroon  font-extrabold text-[20px]">
              توجه !
            </Text>
          </div>
          <Button className="bg-base  flex items-center justify-center rounded-[4px] w-[23px] h-[23px] ">
            <Close />
          </Button>
        </header>
        <article className="flex flex-col gap-[15px] text-text text-[16px]">
          <p>
            منتور عزیز ، سپاس از این که این کامیونیتی رو همراهی میکنی چند نکته
            برای کمک به نوشتن هر چه بهتر و سودمند تر برای افراد حاضر در این
            کامیونیتی وجود داره که براتون لیستش میکنم.
          </p>
          <ul className="list-disc px-[20px]">
            <li>
              لطفا اگر از کلمات تخصصی ای استفاده میکنید . توضیحی برای اون کلمات
              در بخش کلمات تخصصی باز کنید که به شکل پاورقی استفاده بشوند.
            </li>
            <li>
              اگر تصویری دارید لطفا تصویر رو با استفاده از این لینک به حجم ۳
              مگابایت یا کمتر در بیاورید.
            </li>
            <li>اگر در تکمیل مقاله مطلبی دارید لطفا ذکر کنید</li>
            <li>
              اگر در رابطه با بخشی از مقاله صحبتی دارید لطفا اون بخش رو هایلایت
              کنید و سپس گزینه نقد و بررسی رو بزنید.
            </li>
            <li>
              لطفا سعی کنید تا میشود مطالبتان توضیحی باشد و صرفا فرسته ای از
              کلمات تخصصی و مطالب تخصصی نباشد.
            </li>
            <li>
              نقد ها و بررسی ها بدون تایید ما گذاشته میشوند پس سعی کنید با رعایت
              ادب نقد کنید سپاس.
            </li>
          </ul>
        </article>
      </section>

      <section className="text-[14px] bg-crust rounded-[10px] py-[30px] px-[60px]">
        <TextInput
          className="border-b-[1px] border-surface-0 placeholder:text-text text-text"
          name="نقد و نکات"
          placeholder="نقد و نکات تکمیلی را بنویسید"
        />
        <div>
          <Button className="h-[48px] w-[48px] bg-mantle flex justify-center items-center rounded-md">
            <PlusSign className="w-[28px] h-[28px]" />
          </Button>
          <TextInput
            className="border-b-[1px] border-surface-0 placeholder:text-text text-text"
            name="نقد و نکات"
            placeholder="نام کلمه یا عدد ریفرنس"
          />
          <TextInput
            className="border-b-[1px] border-surface-0 placeholder:text-text text-text"
            name="نقد و نکات"
            placeholder="توضیح کلمه تخصصی یا لینک ..."
          />
          <Button className="bg-blue w-full h-[52px] font-bold">
            ارسال نقد
          </Button>
        </div>
      </section>

      <section className="px-[60px] py-[30px] rounded-[10px] bg-crust">
        <div className="flex items-center p-[15px] rounded-[10px] bg-base gap-[10px]">
          <div className="bg-crust rounded-[10px] h-[48px] w-[48px] flex justify-center items-center">
            {" "}
            <ExclamationMark fill="#91D7E3" />{" "}
          </div>
          <p className="font-bold">
            برای گذاشتن نقد و بررسی باید در سایت با نقش
            <span className="text-maroon"> منتور </span>
            <span className="text-teal"> ورود </span>
            یا
            <span className="text-teal"> ثبت نام </span>
            کنید.
          </p>
        </div>
      </section>

      <article className=" w-full flex flex-col ">
        <header className="flex justify-between  rounded-tr-full rounded-br-full rounded-tl-[10px] p-[10px]  bg-crust">
          <div className="flex justify-center gap-[10px] items-center">
            <img
              src={Profile}
              alt="profile"
              className="rounded-full h-[25px] w-[25px]"
            />
            <Text className="text-[14px] font-bold">فرهان</Text>
            <Text className="font-bold text-sapphire text-[14px] bg-base px-[20px] rounded-[6px]">
              منتور
            </Text>
          </div>
          <section className="flex items-center gap-[10px] ">
            <span className="text-[12px]">2+</span>
            <Button className="bg-teal w-[28px] h-[28px] rounded-[5px] flex justify-center items-center">
              <IncreaseArrow />
            </Button>
            <Button className="bg-maroon flex justify-center items-center w-[28px] h-[28px] rounded-[5px]">
              <DecreaseArrow />
            </Button>
            <Button className="bg-  text-subtext-0">
              <ThreeDotts />
            </Button>
          </section>
        </header>

        <section className="text-[12px] bg-[#101122] mx-[40px] rounded-b-[10px]  gap-y-[15px] flex flex-col  ">
          <p className="p-[10px]">
            مقاله‌ای که به بررسی موضوع بش‌ (۰) پرداخته، به خوبی ابعاد مختلف این
            مفهوم را تحلیل کرده است. با این حال، برخی از نکات کلیدی نادیده گرفته
            شده‌اند که می‌توانستند به عمق بیشتری در بحث کمک کنند. به‌طور کلی، مقاله
            می‌تواند با ارائه مثال‌های عملی و مستندات بیشتر، جذاب‌تر و آموزنده‌تر
            شود. نقد مقاله در مورد بش
          </p>
          <section className="flex items-center justify-between border-b-[1px] border-t-[1px] border-surface-1 px-[10px] py-[11.5px]">
            <div className="flex ">
              <Button className="flex rounded-r-[10px] justify-center items-center bg-mantle gap-[6px] text-subtext-0 border-l-[1px] border-surface-1 p-[10px] text-text">
                <Comments />
                پاسخ ها
              </Button>
              <Button className="flex rounded-l-[10px] justify-center items-center gap-[6px] bg-mantle text-subtext-0  p-[10px] text-text">
                <div className="flex flex-col justify-center gap-[5px] text-subtext-0 ">
                  <IncreaseArrow className="w-[11px] h-[6px]   " />
                  <DecreaseArrow className="w-[11px] h-[6px]  " />
                </div>
                دیدن پاورقی ها
              </Button>
            </div>
            <div className="flex gap-x-[-50px]">
              <img
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 70%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle at center, black 70%, transparent 100%)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
                src={Profile}
                alt="profile"
                className=" h-[38px] w-[38px] rounded-full object-cover mx-[-20px] "
              />
              <img
                src={Profile2}
                alt="profile2"
                className=" h-[38px] w-[38px] object-cover rounded-full "
              />
            </div>
          </section>
          <ul className="px-[10px] pb-[20px]">
            <li>
              <span className="text-sapphire">0 : </span> بش یک زبان شل اسکریپتی
              در سیستم های یونیکس بیس هست که نمیدونم برای ارتباط با سیستم عامل و
              اینجور چیزا ساخته شده
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}
