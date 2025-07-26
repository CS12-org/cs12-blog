import { AxiosError } from "axios";
import { Input, TextField } from "react-aria-components";
import { data, Form, redirect, useNavigate } from "react-router";
import { twJoin } from "tailwind-merge";
import { ZodError, z } from "zod";
import FarhanCharacter from "~/assets/images/FR.svg?url";
import Button from "~/components/Button";
import { authenticator, sessionStorage, signup } from "~/service/auth.server";
import type { Route } from "./+types/SignUp";

const SignupSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(8),
});

export async function action(args: Route.ActionArgs) {
  const { request } = args;
  const headers = request.headers.get("cookie");

  try {
    const user = authenticator.authenticate("user-pass", request);
    const session = await sessionStorage.getSession(headers);

    session.set("user", user);

    return redirect("/", {
      headers: { "Set-Cookie": await sessionStorage.commitSession(session) },
    });
  } catch (error: unknown) {
    console.log(error);
    let res: null | object = null;
    if (error instanceof ZodError) res = error;
    if (error instanceof AxiosError) res = error.response?.data;
    return data(res, {
      status: 400,
      statusText: "Bad Request",
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function loader(args: Route.LoaderArgs) {
  const { request } = args;
  const headers = request.headers.get("cookie");
  const session = await sessionStorage.getSession(headers);
  const user = session.get("user");
  if (user) return redirect("/dashboard");
  return data(null);
}

function SignUp() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh flex flex-col items-center">
      <Form
        method="POST"
        className="relative flex flex-col items-stretch my-auto bg-crust rounded-2xl p-5 w-full max-w-sm"
      >
        <img
          src={FarhanCharacter}
          alt="animated character"
          className={twJoin(
            "animate-fade-up animate-duration-1000 animate-delay-500",
            "absolute bottom-full left-1/2 -translate-x-1/2 w-25 -z-1",
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

        <TextField>
          <Input
            name="email"
            placeholder="ایمیل"
            autoComplete="username"
            className="bg-surface-0 mb-4 rounded-md px-2.5 py-2 w-full"
          />
        </TextField>

        <TextField>
          <Input
            name="password"
            placeholder="رمز عبور"
            autoComplete="new-password"
            className="bg-surface-0 mb-4 rounded-md px-2.5 py-2 w-full"
          />
        </TextField>

        <TextField>
          <Input
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="تکرار رمز عبور"
            className="bg-surface-0 mb-4 rounded-md px-2.5 py-2 w-full"
          />
        </TextField>

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
      </Form>
    </main>
  );
}

export default SignUp;
