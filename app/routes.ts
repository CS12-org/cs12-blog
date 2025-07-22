import { layout, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  layout("layout/Main.tsx", [
    route("/", "routes/FeaturesPage.tsx"),
    route("/user-panel", "routes/UserPanel.tsx"),
    route("/*", "routes/NotFoundPage.tsx"),
  ]),

  route("/login", "routes/Login.tsx"),
  route("/signup", "routes/SignUp.tsx"),
  route("/api/theme", "routes/api/theme.ts"),
] satisfies RouteConfig;
