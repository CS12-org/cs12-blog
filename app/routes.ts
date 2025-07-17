import { layout, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  layout("layout/Main.tsx", [route("/", "routes/FeaturesPage.tsx")]),
] satisfies RouteConfig;
