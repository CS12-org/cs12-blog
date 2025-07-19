import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
  layout("layout/Main.tsx", [route("/", "routes/FeaturesPage.tsx")]),
=======
>>>>>>> Stashed changes
  layout("layout/Main.tsx", [route("/", "routes/Home.tsx")]),

  route("/login", "routes/Login.tsx"),
  route("/signup", "routes/SignUp.tsx"),
<<<<<<< Updated upstream

  route("/api/theme", "routes/api/theme.ts"),
=======
  route("/forgot-password", "routes/forgotpassword.tsx"),
  route("/api/theme", "routes/api/theme.ts"),
>>>>>>> Stashed changes
>>>>>>> Stashed changes
] satisfies RouteConfig;
