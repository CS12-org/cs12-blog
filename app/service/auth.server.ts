import { createCookieSessionStorage } from "react-router";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import axios from "~/lib/axios";
import config from "~/lib/config";

type User = {
  id: number;
  jwt: string;
  name: string;
  email: string;
};

type RegisterResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

type SignupOptions = {
  email: string;
  username: string;
  password: string;
};

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    name: "__session",
    secrets: [config.SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export const authenticator = new Authenticator<User>();

export async function signup(options: SignupOptions): Promise<User> {
  const res = await axios.post<RegisterResponse>("/auth/local/register", {
    email: options.email,
    username: options.username,
    password: options.password,
  });

  return {
    jwt: res.data.jwt,
    id: res.data.user.id,
    email: res.data.user.email,
    name: res.data.user.username,
  };
}

async function login(email: string, password: string): Promise<User> {
  return { email, id: 0, name: "", jwt: "" };
}

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    if (!email || !password) throw new Error("Email and password are required");
    return await login(email, password);
  }),
  "user-pass",
);
