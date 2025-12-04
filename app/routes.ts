import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/concept", "routes/concept.tsx"),
  route("/menu", "routes/menu.tsx"),
  route("/chef", "routes/chef.tsx"),
  route("/news", "routes/news.tsx"),
] satisfies RouteConfig;
