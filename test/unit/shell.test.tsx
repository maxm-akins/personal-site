import { createRoutesStub } from "react-router";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import App, { ErrorBoundary } from "../../app/root";
import Holding from "../../app/routes/holding";
import Shell from "../../app/routes/shell";
import Projects from "../../app/routes/projects";
import Resume from "../../app/routes/resume";
import About from "../../app/routes/about";

const Stub = createRoutesStub([
  {
    Component: App,
    ErrorBoundary,
    children: [
      { index: true, Component: Holding },
      {
        Component: Shell,
        children: [
          {
            path: "projects",
            Component: Projects,
            loader: () => ({ projects: [] }),
          },
          {
            path: "resume",
            Component: Resume,
            loader: () => ({ workExperiences: [], skills: [] }),
          },
          { path: "about", Component: About },
        ],
      },
    ],
  },
]);

test("shell renders nav and footer", async () => {
  render(<Stub initialEntries={["/projects"]} />);
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Maxm Akins" })).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "Maxm Akins" }).closest("a"),
  ).toHaveAttribute("href", "/home");
});

test("current route is marked active in the nav", async () => {
  render(<Stub initialEntries={["/about"]} />);
  expect(await screen.findByRole("link", { current: "page" })).toHaveTextContent(
    "About",
  );
});

test.each([
  ["/projects", "Selected work"],
  ["/resume", "Experience"],
  ["/about", "Colophon"],
])("%s route renders its label inside the shell", async (path, label) => {
  render(<Stub initialEntries={[path]} />);
  expect(await screen.findByText(label)).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

test("/ renders the holding page with no nav", async () => {
  render(<Stub initialEntries={["/"]} />);
  expect(
    await screen.findByRole("heading", { name: "New site in progress" }),
  ).toBeInTheDocument();
  expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
});

test("footer sign-off shows only after the page is scrolled", async () => {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    writable: true,
    value: 0,
  });
  render(<Stub initialEntries={["/projects"]} />);
  const sign = await screen.findByText("Thanks for scrolling —");
  expect(sign).not.toBeVisible();

  window.scrollY = 40;
  fireEvent.scroll(window);
  expect(sign).toBeVisible();

  window.scrollY = 0;
});
