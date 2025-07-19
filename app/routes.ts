import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("layout/Main.tsx", [route("/", "routes/Home.tsx")]),
  // TODO : uncomment this later
  // layout("layout/Main.tsx", [route("/", "routes/Home.tsx")]),

  route("/login", "routes/Login.tsx"),
  route("/signup", "routes/SignUp.tsx"),

  route("/api/theme", "routes/api/theme.ts"),
  route("/forgot-password", "routes/Forgotpassword.tsx"),
] satisfies RouteConfig;
