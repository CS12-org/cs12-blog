import { BiMessageAltDetail } from "react-icons/bi";
import { CiBookmark, CiPlay1 } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import Button from "~/components/Button";
import Hands from "../assets/images/hands-celebrate.svg";
import postImage from "../assets/images/postImage.png?url";
export default function PostPage() {
  return (
    <section className="text-white bg-crust w-full">
      <header className="flex flex-col gap-y-[10px]">
        <img
          src={postImage}
          alt="post"
          className=" rounded-tl-[10px] rounded-tr-[10px]"
        />
        <h1 className="font-extrabold text-5xl pb-[10px] px-[30px]">
          این یک پست هست
        </h1>
      </header>

      <section className="flex justify-between items-center px-[30px] bg-mantle py-[10px]">
        <div className="flex gap-[10px] ">
          <Button className="h-[48px] w-[48px] border-surface-0 border-[1px] bg-base rounded-[10px] flex justify-center items-center">
            <CiPlay1 className="text-overlay-1  h-[18px] w-[20px] font-extrabold" />
          </Button>
          <Button className="h-[48px] w-[48px] border-surface-0 border-[1px] bg-base rounded-[10px] flex justify-center items-center">
            <CiBookmark className="text-overlay-1  h-[18px] w-[20px] font-extrabold" />
          </Button>
          <span className="self-center text-sapphire font-extrabold">|</span>{" "}
          <Button className="h-[48px] w-[48px] border-surface-0 border-[1px] bg-base rounded-full flex justify-center items-center">
            <BiMessageAltDetail className="text-overlay-1  h-[18px] w-[20px] font-extrabold" />
          </Button>
        </div>
        <Button>MIT</Button>
      </section>

      <p className="px-[30px] py-[20px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>

      <section className="py-[10px]">
        <img src={postImage} alt="post" className=" w-full " />
        <div className="px-[30px] py-[10px] flex justify-between ">
          <Button className="h-[48px] w-[48px] border-surface-0 border-[1px] bg-base rounded-[10px] flex justify-center items-center">
            <IoShareSocialOutline className="text-overlay-1  h-[21px] w-[21px] font-extrabold" />
          </Button>
          <div className="flex gap-[6px]">
            <span className="self-center text-[12px] text-subtext-1 ">123</span>
            <Button className="bg- ">
              <img
                src={Hands}
                alt="clabbing hands"
                className="w-[25px] h-[28px]"
              />{" "}
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
