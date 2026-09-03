import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";

import type { SkillItem, WorkExperienceItem } from "../../app/db/queries";

const getWorkExperiences = vi.fn();
const getSkills = vi.fn();

vi.mock("../../app/db/queries", () => ({
  getWorkExperiences: (...a: unknown[]) => getWorkExperiences(...a),
  getSkills: (...a: unknown[]) => getSkills(...a),
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
];

const skills: SkillItem[] = [
  { id: 1, name: "Python", category: "Languages", sortOrder: 1 },
  { id: 2, name: "Go", category: "Languages", sortOrder: 2 },
];

beforeEach(() => {
  getWorkExperiences.mockResolvedValue(roles);
  getSkills.mockResolvedValue(skills);
});

test("loader fans out to both getters and returns their data", async () => {
  const { loader, meta } = await import("../../app/routes/resume");
  const db = { marker: true };
  const data = await loader({ context: { get: () => db } } as never);

  expect(getWorkExperiences).toHaveBeenCalledWith(db);
  expect(getSkills).toHaveBeenCalledWith(db);
  expect(data).toEqual({ workExperiences: roles, skills });
  expect(meta({} as never)).toEqual([{ title: "Résumé — Maxm Akins" }]);
});

test("resume renders every section with details and the PDF link", async () => {
  const { default: Resume } = await import("../../app/routes/resume");
  const Stub = createRoutesStub([
    {
      path: "/resume",
      Component: Resume,
      loader: () => ({ workExperiences: roles, skills }),
    },
  ]);
  render(<Stub initialEntries={["/resume"]} />);

  expect(
    await screen.findByRole("heading", { name: "Maxm Akins" }),
  ).toBeInTheDocument();
  for (const label of ["Experience", "Education", "Skills"]) {
    expect(screen.getByText(label)).toBeInTheDocument();
  }
  expect(
    screen.getByText(/Built an internal agentic chatbot/),
  ).toBeInTheDocument();
  expect(screen.getByText("University of Pittsburgh")).toBeInTheDocument();
  expect(
    screen.getByText("Littlestown Senior High School"),
  ).toBeInTheDocument();
  expect(screen.getByText("Languages")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Download PDF/ })).toHaveAttribute(
    "href",
    "/Maxm_Akins_Resume.pdf",
  );
  expect(screen.getByRole("img", { name: "Maxm Akins" })).toHaveAttribute(
    "src",
    "/headshot.jpg",
  );
});
