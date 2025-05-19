import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/login", "routes/Login.tsx"),
  route("/signup", "routes/SignUp.tsx"),
] satisfies RouteConfig;
