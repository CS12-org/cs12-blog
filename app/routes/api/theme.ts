import { data } from "react-router";

import session from "~/.server/session";
import type { Route } from "./+types/theme";

export async function action(args: Route.ActionArgs) {
  const { request } = args;
  const cookies = request.headers.get("Cookie");

  const currentSession = await session.getSession(cookies);

  try {
    const newTheme = await request.json();

    if (newTheme.theme !== "dark" && newTheme.theme !== "light")
      return data(null, { status: 422 });

    currentSession.set("theme", newTheme.theme);
    const setCookie = await session.commitSession(currentSession);

    return data(null, { headers: { "Set-Cookie": setCookie }, status: 200 });
  } catch (err) {
    return data(null, { status: 422 });
  }
}
