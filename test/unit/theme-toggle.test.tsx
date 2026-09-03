import { createRoutesStub } from "react-router";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test } from "vitest";

import Shell from "../../app/routes/shell";

const Stub = createRoutesStub([
  {
    Component: Shell,
    children: [{ path: "home", Component: () => <p>home</p> }],
  },
]);

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

afterEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

test("clicking the toggle flips data-theme and persists it", async () => {
  render(<Stub initialEntries={["/home"]} />);
  const button = await screen.findByRole("button");
  expect(button).toHaveTextContent("Light");
  expect(button).toHaveAttribute("aria-pressed", "false");

  fireEvent.click(button);
  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(localStorage.getItem("theme")).toBe("dark");
  expect(button).toHaveTextContent("Dark");
  expect(button).toHaveAttribute("aria-pressed", "true");

  fireEvent.click(button);
  expect(document.documentElement.dataset.theme).toBe("light");
  expect(localStorage.getItem("theme")).toBe("light");
});

test("initial label honors a stored theme", async () => {
  localStorage.setItem("theme", "dark");
  render(<Stub initialEntries={["/home"]} />);
  const button = await screen.findByRole("button");
  expect(button).toHaveTextContent("Dark");
  expect(button).toHaveAttribute("aria-pressed", "true");
});
