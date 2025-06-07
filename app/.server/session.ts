import config from "~/lib/config";
import { createCookieSessionStorage } from "react-router";

export type SessionState = {
  theme: "dark" | "light";
};

const session = createCookieSessionStorage<SessionState>({
  cookie: {
    secure: true,
    httpOnly: true,
    name: "session",
    sameSite: "strict",
    maxAge: 30 * 60 * 60 * 24,
    secrets: [config.VITE_SECRET],
  },
});

export default session;
