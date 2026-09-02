import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";

import type {
  ProjectItem,
  SkillItem,
  WorkExperienceItem,
} from "../../app/db/queries";

const getFeaturedProjects = vi.fn();
const getWorkExperiences = vi.fn();
const getSkills = vi.fn();
const getClasses = vi.fn();

vi.mock("../../app/db/queries", () => ({
  getFeaturedProjects: (...a: unknown[]) => getFeaturedProjects(...a),
  getWorkExperiences: (...a: unknown[]) => getWorkExperiences(...a),
  getSkills: (...a: unknown[]) => getSkills(...a),
  getClasses: (...a: unknown[]) => getClasses(...a),
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

const roles: WorkExperienceItem[] = [
  {
    id: 5,
    companyName: "Apple",
    companyLocation: "Austin, TX",
    title: "Software Engineer",
    startDate: "Jun 2025",
    endDate: "Present",
    details: [],
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

const skills: SkillItem[] = [
  { id: 1, name: "Python", category: "Languages", sortOrder: 1 },
  { id: 2, name: "Go", category: "Languages", sortOrder: 2 },
  { id: 3, name: "React", category: "Frameworks & Runtimes", sortOrder: 3 },
];

beforeEach(() => {
  getFeaturedProjects.mockResolvedValue(projects);
  getWorkExperiences.mockResolvedValue(roles);
  getSkills.mockResolvedValue(skills);
  getClasses.mockResolvedValue([]);
});

test("loader fans out to all four getters and returns their data", async () => {
  const { loader, meta } = await import("../../app/routes/home");
  const db = { marker: true };
  const data = await loader({ context: { get: () => db } } as never);

  expect(getFeaturedProjects).toHaveBeenCalledWith(db, 3);
  expect(getWorkExperiences).toHaveBeenCalledWith(db);
  expect(getSkills).toHaveBeenCalledWith(db);
  expect(getClasses).toHaveBeenCalledWith(db);
  expect(data).toEqual({
    featuredProjects: projects,
    workExperiences: roles,
    skills,
    classes: [],
  });
  expect(meta({} as never)).toEqual([{ title: "Maxm Akins" }]);
});

test("home renders every section from loader data", async () => {
  const { default: Home } = await import("../../app/routes/home");
  const Stub = createRoutesStub([
    {
      path: "/home",
      Component: Home,
      loader: () => ({
        featuredProjects: projects,
        workExperiences: roles,
        skills,
        classes: [],
      }),
    },
  ]);
  render(<Stub initialEntries={["/home"]} />);

  expect(
    await screen.findByRole("heading", { name: "Maxm Akins" }),
  ).toBeInTheDocument();
  for (const label of [
    "About",
    "Experience",
    "Selected work",
    "Education",
    "Skills",
  ]) {
    expect(screen.getByText(label)).toBeInTheDocument();
  }
  expect(
    screen.getByText(/Software Engineering Intern/),
  ).toBeInTheDocument();
  expect(
    screen.queryByText(/Shipped production features/),
  ).not.toBeInTheDocument();
  expect(screen.getByText("Personal Website")).toBeInTheDocument();
  expect(screen.getByText("University of Pittsburgh")).toBeInTheDocument();
  expect(screen.getByText("Languages")).toBeInTheDocument();
});
