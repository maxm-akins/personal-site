import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import App, { ErrorBoundary } from "../../app/root";
import Home from "../../app/routes/home";

const Stub = createRoutesStub([
  {
    Component: App,
    ErrorBoundary,
    children: [{ index: true, Component: Home }],
  },
]);

test("/ renders the holding page heading", async () => {
  render(<Stub initialEntries={["/"]} />);
  expect(
    await screen.findByRole("heading", { name: "New site in progress" }),
  ).toBeInTheDocument();
});

test("unknown path hits the 404 boundary", async () => {
  render(<Stub initialEntries={["/does-not-exist"]} />);
  expect(await screen.findByText(/could not be found/i)).toBeInTheDocument();
});
