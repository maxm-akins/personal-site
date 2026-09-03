import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";

import type { ProjectItem } from "../../app/db/queries";

const getProjects = vi.fn();

vi.mock("../../app/db/queries", () => ({
  getProjects: (...a: unknown[]) => getProjects(...a),
}));

const projects: ProjectItem[] = [
  {
    id: 1,
    name: "Personal Website",
    link: "https://github.com/maxm-akins/personal-site",
    webLink: "https://maxmakins.com",
    details: "A richer alternative to a static résumé.",
    sortOrder: 1,
  },
];

beforeEach(() => {
  getProjects.mockResolvedValue(projects);
});

test("loader redirects to / (the tab is parked)", async () => {
  const { loader, meta } = await import("../../app/routes/projects");
  const res = await loader({ context: { get: () => ({}) } } as never).catch(
    (e) => e,
  );

  expect(res).toBeInstanceOf(Response);
  expect(res.status).toBe(302);
  expect(res.headers.get("Location")).toBe("/");
  expect(getProjects).not.toHaveBeenCalled();
  expect(meta({} as never)).toEqual([{ title: "Projects — Maxm Akins" }]);
});

test("the parked page still renders when given data (for restore)", async () => {
  const { default: Projects } = await import("../../app/routes/projects");
  const Stub = createRoutesStub([
    { path: "/projects", Component: Projects, loader: () => ({ projects }) },
  ]);
  render(<Stub initialEntries={["/projects"]} />);

  expect(
    await screen.findByRole("heading", { name: "Things I've built" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Selected work")).toBeInTheDocument();
  expect(screen.getByText("Personal Website")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "live" })).toHaveAttribute(
    "href",
    "https://maxmakins.com",
  );
});
