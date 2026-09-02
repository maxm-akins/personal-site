import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import App, { ErrorBoundary } from "../../app/root";
import Home from "../../app/routes/home";

const Stub = createRoutesStub([
  {
    Component: App,
    ErrorBoundary,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => ({
          work: [
            {
              id: 1,
              companyName: "Acme",
              companyLocation: "Remote",
              title: "Engineer",
              startDate: "2024",
              endDate: "Present",
              details: ["shipped things"],
              sortOrder: 1,
            },
          ],
          projects: [
            { id: 1, name: "Thing", link: null, webLink: null, details: "a thing", sortOrder: 1 },
          ],
          skills: [{ id: 1, name: "TypeScript", category: "Languages", sortOrder: 1 }],
        }),
      },
    ],
  },
]);

test("/ renders résumé data from the loader", async () => {
  render(<Stub initialEntries={["/"]} />);
  expect(
    await screen.findByRole("heading", { name: "Maxm Akins" }),
  ).toBeInTheDocument();
  expect(await screen.findByText(/Acme/)).toBeInTheDocument();
  expect(screen.getByText("shipped things")).toBeInTheDocument();
});

test("unknown path hits the 404 boundary", async () => {
  render(<Stub initialEntries={["/does-not-exist"]} />);
  expect(await screen.findByText(/could not be found/i)).toBeInTheDocument();
});
