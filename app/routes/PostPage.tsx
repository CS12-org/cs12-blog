import { BiMessageAltDetail } from "react-icons/bi";
import { CiBookmark, CiPlay1 } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import Button from "~/components/Button";
import LicenceMark from "~/components/Posts/LicenceMark";
import PostAuthor from "~/components/Posts/PostAuthor";
import PostNavigation from "~/components/Posts/PostNavigation";
import PostTabs from "~/components/Posts/PostTabs";
import Hands from "../assets/images/hands-celebrate.svg";
import postImage from "../assets/images/postImage.png?url";
export default function PostPage() {
  return (
    <section className="text-white  w-full flex flex-col gap-[10px] ">
      <section className="bg-crust mb-[20px] rounded-[10px]">
        <header className="flex flex-col  ">
          <img
            src={postImage}
            alt="post"
            className=" rounded-tl-[10px] rounded-tr-[10px]"
          />
          <h1 className="font-extrabold text-[18px]  lg:text-5xl px-[10px] py-[5px]  lg:px-[30px] lg:py-[25px] lg:pt-[15px] h-auto">
            این یک پست هست
          </h1>
        </header>

        <section className="flex justify-between items-center p-[10px] lg:px-[30px] bg-mantle lg:py-[10px] ">
          <div className="flex gap-[10px] ">
            <Button className="lg:h-[48px] lg:w-[48px] h-[30px] w-[30px] border-surface-0 border-[1px] bg-base rounded-[10px] flex justify-center items-center">
              <CiPlay1 className="text-overlay-1  lg:h-[18px] lg:w-[20px] h-[16px] w-[16px] font-extrabold" />
            </Button>
            <Button className="lg:h-[48px] lg:w-[48px] h-[30px] w-[30px] border-surface-0 border-[1px] bg-base rounded-[10px] flex justify-center items-center">
              <CiBookmark className="text-overlay-1 h-[16px] w-[18px]  lg:h-[18px] lg:w-[20px] font-extrabold" />
            </Button>
            <span className="self-center text-sapphire font-extrabold">|</span>{" "}
            <Button className="lg:h-[48px] lg:w-[48px] h-[30px] w-[30px] border-surface-0 border-[1px] bg-base rounded-full flex justify-center items-center">
              <BiMessageAltDetail className="text-overlay-1 h-[16px] w-[18px]  lg:h-[18px] lg:w-[20px] font-extrabold" />
            </Button>
          </div>
          <LicenceMark />
        </section>

        <article className="lg:px-[30px] p-[10px] lg:py-[20px] lg:text-[16px] text-[14px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ب استفاده
          از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </article>

        <section className="pt-[10px] ">
          <img src={postImage} alt="post" className=" w-full " />

          <div className="lg:px-[30px] px-[10px] py-[10px] flex justify-between ">
            <Button className="lg:h-[48px] lg:w-[48px] h-[30px] w-[30px] border-surface-0 border-[1px] bg-base rounded-[10px] flex justify-center items-center">
              <IoShareSocialOutline className="text-overlay-1 h-[15px] w-[15px] lg:h-[21px] lg:w-[21px] font-extrabold" />
            </Button>
            <div className="flex gap-[6px]">
              <span className="self-center text-[12px] text-subtext-1 ">
                123
              </span>
              <Button className="bg- ">
                <img
                  src={Hands}
                  alt="clabbing hands"
                  className="lg:w-[25px] lg:h-[28px] w-[18px] h-[21px] mx-[5px] lg:mx-[0px]"
                />{" "}
              </Button>
            </div>
          </div>
        </section>
      </section>

      <PostAuthor />
      <PostNavigation />
      <PostTabs />
    </section>
  );
}
