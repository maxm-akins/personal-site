import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("meta title", async () => {
  const { meta } = await import("../../app/routes/about");
  expect(meta({} as never)).toEqual([{ title: "Under the hood — Maxm Akins" }]);
});

test("renders the heading and all three build-notes sections", async () => {
  const { default: About } = await import("../../app/routes/about");
  const Stub = createRoutesStub([{ path: "/about", Component: About }]);
  render(<Stub initialEntries={["/about"]} />);

  expect(
    await screen.findByRole("heading", { name: "How this site is built" }),
  ).toBeInTheDocument();
  for (const label of ["The stack", "Why these choices", "AI disclosure"]) {
    expect(screen.getByText(label)).toBeInTheDocument();
  }
  expect(screen.getByText(/leveraged, not given free rein/)).toBeInTheDocument();
});
