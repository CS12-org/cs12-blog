import { useNavigate } from "react-router";
import { twJoin } from "tailwind-merge";
import FarhanCharacter from "~/assets/images/FR.svg?url";
import Button from "~/components/Button";

function SignUp() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh flex flex-col items-center">
      <form className="relative flex flex-col items-stretch my-auto bg-crust rounded-2xl p-5 w-full max-w-sm">
        <img
          src={FarhanCharacter}
          alt="animated character"
          className={twJoin(
            "animate-fade-up animate-duration-1000 animate-delay-500",
            "absolute bottom-full left-1/2 -translate-x-1/2 w-25 -z-1"
          )}
        />
        <h1 className="font-bold text-4xl mb-7 text-center">
          <span className="text-rosewater animate-fade">ث</span>
          <span className="text-mauve animate-fade animate-delay-100">ب</span>
          <span className="text-yellow animate-fade animate-delay-200">ت</span>
          <span> </span>
          <span className="text-pink animate-fade animate-delay-300">ن</span>
          <span className="text-maroon animate-fade animate-delay-400">ا</span>
          <span className="text-mauve animate-fade animate-delay-500">م</span>
        </h1>

        <input
          placeholder="ایمیل"
          autoComplete="username"
          className="bg-surface-0 mb-4 rounded-md px-2.5 py-2"
        />
        <input
          placeholder="رمز عبور"
          autoComplete="new-password"
          className="bg-surface-0 mb-4 rounded-md px-2.5 py-2"
        />
        <input
          autoComplete="new-password"
          placeholder="تکرار رمز عبور"
          className="bg-surface-0 mb-4 rounded-md px-2.5 py-2"
        />

        <div className="mt-4 flex gap-2">
          <Button type="submit" className="py-2 grow">
            ثبت نام در سایت
          </Button>
          <Button
            type="button"
            variant="outline"
            className="py-2 px-4"
            onPress={() => navigate("/login")}
          >
            ورود
          </Button>
        </div>
      </form>
    </main>
  );
}

export default SignUp;
