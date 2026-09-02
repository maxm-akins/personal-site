import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/shell.tsx", [
    route("projects", "routes/projects.tsx"),
    route("resume", "routes/resume.tsx"),
    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
