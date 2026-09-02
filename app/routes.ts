import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/holding.tsx"),
  layout("routes/shell.tsx", [
    route("home", "routes/home.tsx"),
    route("projects", "routes/projects.tsx"),
    route("resume", "routes/resume.tsx"),
    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
