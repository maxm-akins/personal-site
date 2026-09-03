import { createRoutesStub } from "react-router";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import App, { ErrorBoundary } from "../../app/root";
import Holding from "../../app/routes/holding";
import Shell from "../../app/routes/shell";
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
  render(<Stub initialEntries={["/about"]} />);
  expect(await screen.findByRole("navigation")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Maxm Akins" })).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "Maxm Akins" }).closest("a"),
  ).toHaveAttribute("href", "/home");
});

test("the Projects tab is hidden", async () => {
  render(<Stub initialEntries={["/about"]} />);
  await screen.findByRole("navigation");
  expect(
    screen.queryByRole("link", { name: "Projects" }),
  ).not.toBeInTheDocument();
});

test("current route is marked active in the nav", async () => {
  render(<Stub initialEntries={["/about"]} />);
  expect(await screen.findByRole("link", { current: "page" })).toHaveTextContent(
    "Under the hood",
  );
});

test.each([
  ["/resume", "Experience"],
  ["/about", "The stack"],
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
  render(<Stub initialEntries={["/about"]} />);
  const sign = await screen.findByText("Thanks for scrolling ;)");
  expect(sign).not.toBeVisible();

  window.scrollY = 40;
  fireEvent.scroll(window);
  expect(sign).toBeVisible();

  window.scrollY = 0;
});
