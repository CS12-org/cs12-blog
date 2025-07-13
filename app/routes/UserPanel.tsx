import UserPanelList from "~/components/UserPanel/UserPanelList";
import Profile from "../assets/images/user-profile.png";
import PlusSign from "~/assets/images/plus-sign.svg?react";
import ThemeSetting from "~/components/UserPanel/ThemeSetting";
import MyCheckbox, {
  MyCheckboxGroup,
} from "~/components/UserPanel/SettingCheckbox";
import MyRadioGroup from "~/components/UserPanel/ThemeSetting";
import { Radio } from "react-aria-components";
import { MyTextField } from "~/components/UserPanel/TextFeild";
import Button from "~/components/Button";
import Cs12Logo from "~/components/Global/Icons/cs12-logo";

function UserPanel() {
  return (
    <div className="flex gap-x-5 w-full ">
      <UserPanelList />
      <main className="flex flex-col gap-4 w-full text-subtext-1">
        <div className="flex justify-between items-center">
          <h1 className="font-extrabold text-xl">اطلاعات اولیه پروفایل</h1>
          <Button className="bg-sapphire text-sm h-[36px] w-[39px] text-crust rounded">
            ثبت
          </Button>
        </div>
        <div className="bg-crust p-2 rounded-xl flex flex-col w-full  ">
          <div className="grid grid-cols-6 grid-rows-1 content-center items-center ">
            <Cs12Logo />
            <img
              src={Profile}
              className="w-18 h-18 row-start-1 mr-[20px] justify-self-start rounded-tr-[40px] rounded-bl-[40px] rounded-tl-3xl rounded-br-3xl"
            />

            <div className="col-start-3 col-end-7 flex flex-col gap-y-2">
              <h1 className="p-2 w-full rounded-md content-center bg-mantle h-13 text-xl font-extrabold">
                سارا امیری
              </h1>
              <form className="w-full">
                <MyTextField
                  name="توضیح کوتاه از فرد"
                  placeholder="توضیح کوتاهی از خود بنویسید. در حد 200 کارکتر"
                  className="w-full"
                />
              </form>
              {/* <input
                placeholder="توضیح کوتاهی از خود بنویسید. در حد 200 کارکتر"
                className="p-2 w-full  rounded-md bg-mantle h-9 text-xs"
              /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2.5 bg-crust p-5 rounded-xl">
          <h1 className="text-xs font-bold">
            تنظیمات رنگ قسمت سمت راست پروفایل :
          </h1>
          <div className="flex flex-wrap gap-[5px]">
            <MyRadioGroup
              name="theme-color"
              options={[
                {
                  label: "lavender",
                  bgColorClass: "bg-lavender",
                  value: "lavender",
                },
                { label: "maroon", bgColorClass: "bg-maroon", value: "maroon" },
                { label: "teal", bgColorClass: "bg-teal", value: "teal" },
                { label: "peach", bgColorClass: "bg-peach", value: "peach" },
                { label: "sky", bgColorClass: "bg-sky", value: "sky" },
                { label: "mauve", bgColorClass: "bg-mauve", value: "mauve" },
                { label: "pink", bgColorClass: "bg-pink", value: "pink" },
                {
                  label: "flamingo",
                  bgColorClass: "bg-flamingo",
                  value: "flamingo",
                },
              ]}
            />
          </div>
        </div>
        <div className=" flex flex-col w-full gap-2">
          <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl">
            <Button className="h-8 w-8 bg-mantle flex justify-center items-center rounded-md">
              <PlusSign />
            </Button>
            <h3 className="bg-mantle p-2 w-full rounded-md bg-mantle h-9 text-xs">
              زبان ها و تکنولوژی هایی که بلد هستید رو وارد کنید. (به زبان
              انگلیسی) :‌ مثال c programming language{" "}
            </h3>
          </div>
          <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl">
            <Button className="h-8 w-8 bg-mantle flex justify-center items-center rounded-md">
              <PlusSign />
            </Button>
            <h3 className="bg-mantle p-2 w-full rounded-md bg-mantle h-9 text-xs">
              لینک سوشال میدیا هایی که دارید رو اینجا بزارید.
            </h3>
          </div>
          <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl w-full">
            <form className="w-full">
              <MyTextField
                name="نظر در مورد سایت"
                placeholder="نظرتون رو در مورد این سایت بنویسید. (بعد از ۲۰ روز در این قسمت امکان نوشتن هست) "
                className="w-full"
              />
            </form>

            {/* <input
              className="bg-mantle p-2 w-full rounded-md bg-mantle h-9 text-xs"
              placeholder="نظرتون رو در مورد این سایت بنویسید. (بعد از ۲۰ روز در این قسمت امکان نوشتن هست) "
            /> */}
          </div>
        </div>

        <h1 className="font-extrabold text-xl">تنظیمات</h1>
        <MyCheckboxGroup className="bg-crust rounded-xl p-2 w-full flex flex-col gap-y-2.5 ">
          <MyCheckbox value="sss">
            آیا ۱۰ تا از آخرین نظراتتون در صفحه پروفایلتون توسط دیگران دیده شود؟
          </MyCheckbox>
          <MyCheckbox value="sss1">
            آیا قسمت زبان هایی که بلدید در صفحه پروفایلتون توسط دیگران دیده شود؟
          </MyCheckbox>
          <MyCheckbox value="sss2">
            آیا قسمت هایلایت ها و یادداشت های شیر شده توسط شما در قسمت
            پروفایلتون قابل مشاهده باشد؟
          </MyCheckbox>
          <MyCheckbox value="sss3">
            آیا قسمت سوشال مدیای شما در پروفایلتون قابل مشاهده توسط دیگران باشد؟
          </MyCheckbox>
          <MyCheckbox value="sss4">
            آیا تصویر پروفایل شما برای دیگران قابل مشاهده باشد؟
          </MyCheckbox>
          <MyCheckbox value="ss5">
            آیا امتیاز و جایگاه شما در چالش های هفتگی قابل مشاهده باشد؟
          </MyCheckbox>
          <MyCheckbox value="sss6">
            آیا صفحه پروفایل برای شما ساخته شود؟
          </MyCheckbox>
        </MyCheckboxGroup>

        <h1 className="font-extrabold text-xl">درخواست ها</h1>
        <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl">
          <div className="bg-mantle p-2 w-full rounded-md h-9 text-xs">
            شما یک کاربر عادی هستید برای تبدیل شدن به منتور درخواست بدید.{" "}
          </div>
        </div>
        <h1 className="font-extrabold text-xl"> تنظیمات اولیه</h1>
        <form className="flex flex-col gap-2.5">
          <div className="grid grid-cols-4 gap-2.5 bg-crust p-2 rounded-xl">
            <div className="col-start-1 col-end-3">
              <MyTextField name="نام کاربری" placeholder="نام کاربری" />
            </div>
            <div className="col-start-3 col-end-5">
              <MyTextField name="رمز عبور" placeholder="رمز عبور" />
            </div>
            <div className="col-span-4">
              <MyTextField name="ایمیل" placeholder="ایمیل" />
            </div>
            <div className="col-span-4">
              <Button className="bg-crust border border-red border-2 w-full p-2 h-9 text-red text-xs">
                تغییر رمز عبور
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-9 gap-2.5 text-xs font-bold text-crust">
            <div className="col-span-6">
              <Button className="bg-sapphire w-full p-2 h-9  ">ثبت</Button>
            </div>
            <div className="col-span-3">
              <Button className="bg-maroon w-full p-2 h-9  ">
                بازگشت به تنظیمات پیشفرض
              </Button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
export default UserPanel;
