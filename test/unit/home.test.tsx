import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";

import type { WorkExperienceItem } from "../../app/db/queries";

const getWorkExperiences = vi.fn();

vi.mock("../../app/db/queries", () => ({
  getWorkExperiences: (...a: unknown[]) => getWorkExperiences(...a),
}));

const roles: WorkExperienceItem[] = [
  {
    id: 5,
    companyName: "Apple",
    companyLocation: "Austin, TX",
    title: "Software Engineer",
    startDate: "Jun 2025",
    endDate: "Present",
    details: ["Built an internal agentic chatbot for leadership."],
    sortOrder: 5,
  },
  {
    id: 4,
    companyName: "BNY",
    companyLocation: "Pittsburgh, PA",
    title: "Software Engineering Intern",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    details: ["Shipped production features across two teams."],
    sortOrder: 4,
  },
];

beforeEach(() => {
  getWorkExperiences.mockResolvedValue(roles);
});

test("loader returns only the current role", async () => {
  const { loader, meta } = await import("../../app/routes/home");
  const db = { marker: true };
  const data = await loader({ context: { get: () => db } } as never);

  expect(getWorkExperiences).toHaveBeenCalledWith(db);
  expect(data).toEqual({ currentRole: roles[0] });
  expect(meta({} as never)).toEqual([{ title: "Maxm Akins" }]);
});

test("home is a single hero: name, blurb, current role, résumé link — no sections", async () => {
  const { default: Home } = await import("../../app/routes/home");
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: Home,
      loader: () => ({ currentRole: roles[0] }),
    },
  ]);
  render(<Stub initialEntries={["/"]} />);

  expect(
    await screen.findByRole("heading", { name: "Maxm Akins" }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Hi, I'm Maxm\./)).toBeInTheDocument();
  expect(
    screen.getByText(/Software Engineer at Apple/),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/BS Computer Science, University of Pittsburgh/),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Read the résumé/ })).toHaveAttribute(
    "href",
    "/resume",
  );

  expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  for (const gone of ["Education", "Experience", "Skills", "Selected work"]) {
    expect(screen.queryByText(gone)).not.toBeInTheDocument();
  }
  expect(
    screen.queryByText(/Software Engineering Intern/),
  ).not.toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "GitHub" })).toBeNull();
});
