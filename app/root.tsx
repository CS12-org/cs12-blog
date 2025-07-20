import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";
import TailwindCss from "~/assets/styles/main.css?url";
import session from "./.server/session";

import type { Route } from "./+types/root";
import { Main } from "./layout/Main";
import NotFoundPage from "./routes/NotFoundPage";

export async function loader(args: Route.LoaderArgs) {
  const { request } = args;
  const cookies = request.headers.get("Cookie");
  const currentSession = await session.getSession(cookies);
  const theme = currentSession.data.theme;

  return { theme: theme ?? "dark" };
}

export const links: Route.LinksFunction = () => [
  {
    as: "style",
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@33.003/misc/UI/Vazirmatn-UI-font-face.css",
  },
  {
    as: "style",
    rel: "stylesheet",
    href: TailwindCss,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>("root");

  return (
    <html className={loaderData?.theme ?? "dark"} lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
    return (
      <Main>
        <NotFoundPage />
      </Main>
    );
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
