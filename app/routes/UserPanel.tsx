import UserPanelList from "~/components/UserPanel/UserPanelList";
import Profile from "../assets/images/user-profile.png"
import PlusSign from "~/assets/images/plus-sign.svg?react";
import ThemeSetting from "~/components/UserPanel/ThemeSetting";

function UserPanel(){
    return(
        <div className="flex gap-x-5 w-full ">
            <UserPanelList/>
            <main className="flex flex-col gap-4 w-full text-subtext-1">
                  <div className="flex justify-between items-center">
            <h1 className="font-extrabold text-xl">اطلاعات اولیه پروفایل</h1>
            <button className="bg-sapphire text-sm h-[36px] w-[39px] text-crust rounded">ثبت</button>
            </div>
        <div className="bg-crust p-2 rounded-xl flex flex-col w-full  ">
          
       <div className="grid grid-cols-6 grid-rows-1 content-center items-center ">
        <div  className="bg-blue-200 w-18 h-18 row-start-1 "></div>
      <img src={Profile} className="w-18 h-18 row-start-1 mr-[20px] justify-self-start rounded-tr-[40px] rounded-bl-[40px] rounded-tl-3xl rounded-br-3xl" />

       <div className="col-start-3 col-end-7 flex flex-col gap-y-2">
       <h1 className="p-2 w-full rounded-md content-center bg-mantle h-13 text-xl font-extrabold">سارا امیری</h1>
       <input placeholder="توضیح کوتاهی از خود بنویسید. در حد 200 کارکتر" className="p-2 w-full  rounded-md bg-mantle h-9 text-xs" />
</div>
       </div>
      
        </div>
         <div className=" flex flex-col w-full gap-2">
            <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl">
          <button className="h-8 w-8 bg-mantle flex justify-center items-center rounded-md">
            <PlusSign/>
          </button>
          <h3 className="bg-mantle p-2 w-full rounded-md bg-mantle h-9 text-xs">زبان ها و تکنولوژی هایی که بلد هستید رو وارد کنید. (به زبان انگلیسی) :‌ مثال c programming language </h3>
</div>
     <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl">
          <button className="h-8 w-8 bg-mantle flex justify-center items-center rounded-md">
            <PlusSign/>
          </button>
          <h3 className="bg-mantle p-2 w-full rounded-md bg-mantle h-9 text-xs">لینک سوشال میدیا هایی که دارید رو اینجا بزارید.</h3>
</div>
   <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl">
  <input className="bg-mantle p-2 w-full rounded-md bg-mantle h-9 text-xs" placeholder="نظرتون رو در مورد این سایت بنویسید. (بعد از ۲۰ روز در این قسمت امکان نوشتن هست) " /> 
       </div>
        </div>
       <div className="flex flex-col gap-y-2.5 bg-crust p-5 rounded-xl">
        <h1 className="text-xs font-bold">تنظیمات رنگ قسمت سمت راست پروفایل :</h1>
        <div className="flex flex-wrap gap-[5px]">
      <ThemeSetting buttonText="lavender" bgColorClass="bg-lavender" />
       <ThemeSetting buttonText="maroon" bgColorClass="bg-maroon" />
        <ThemeSetting buttonText="teal" bgColorClass="bg-teal" />
         <ThemeSetting buttonText="peach" bgColorClass="bg-peach" />
          <ThemeSetting buttonText="sky" bgColorClass="bg-sky" />
           <ThemeSetting buttonText="mauve" bgColorClass="bg-mauve" />
            <ThemeSetting buttonText="pink" bgColorClass="bg-pink" />
             <ThemeSetting buttonText="flamingo" bgColorClass="bg-flamingo" />
        </div>
        </div>
          <h1 className="font-extrabold text-xl">درخواست ها</h1>
          <div className="flex items-center gap-x-2.5 bg-crust p-2 rounded-xl">
  <div className="bg-mantle p-2 w-full rounded-md bg-mantle h-9 text-xs" >شما یک کاربر عادی هستید برای تبدیل شدن به منتور درخواست بدید. </div>
       </div>
        </main>
        </div>
    );
 
}
export default UserPanel;