import { useNavigate } from "react-router";
import { Link } from "react-router";
import { twJoin } from "tailwind-merge";
import SamanCharacter from "~/assets/images/SM.svg?url";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh flex flex-col items-center">
      <form className="relative flex flex-col items-stretch my-auto bg-crust rounded-2xl p-5 w-full max-w-sm">
        <img
          src={SamanCharacter}
          alt="animated character"
          className={twJoin(
            "animate-fade-up animate-duration-1000 animate-delay-500",
            "absolute bottom-full left-1/2 -translate-x-1/2 w-25 -z-1"
          )}
        />
        <h1
          className={twJoin(
            "font-bold text-4xl mb-7 text-center",
            "flex gap-2 justify-center"
          )}
        >
          <span className="text-rosewater animate-fade">و</span>
          <span className="text-pink animate-fade animate-delay-200">ر</span>
          <span className="text-mauve animate-fade animate-delay-400">و</span>
          <span className="text-peach animate-fade animate-delay-600">د</span>
        </h1>

        <input
          placeholder="نام کاربری یا ایمیل"
          className="bg-surface-0 mb-4 rounded-md px-2.5 py-2"
        />
        <input
          placeholder="رمز عبور"
          className="bg-surface-0 mb-4 rounded-md px-2.5 py-2"
        />

        <Link
          rel="nofollow"
          to="/forgot-password"
          className="text-lavender underline rounded-md"
        >
          رمز عبورم رو فراموش کردم!
        </Link>

        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            className="bg-lavender text-crust py-2 rounded-md grow"
          >
            ورود به سایت
          </button>
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="border border-solid border-lavender py-2 rounded-md px-4"
          >
            ثبت نام
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
