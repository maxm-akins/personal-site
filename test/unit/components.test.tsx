import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import type {
  ProjectItem,
  SkillItem,
  WorkExperienceItem,
} from "../../app/db/queries";
import { TimelineRow } from "../../app/components/TimelineRow";
import { ProjectCard } from "../../app/components/ProjectCard";
import { SkillGroup, groupByCategory } from "../../app/components/SkillGroup";

const role = (details: string[]): WorkExperienceItem => ({
  id: 1,
  companyName: "Apple",
  companyLocation: "Austin, TX",
  title: "Software Engineer",
  startDate: "Jun 2025",
  endDate: "Present",
  details,
  sortOrder: 5,
});

test("TimelineRow renders headers only by default", () => {
  const { container } = render(<TimelineRow item={role(["one", "two"])} />);
  expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();
  expect(container.querySelector("ul")).toBeNull();
});

test("TimelineRow renders a bullet per detail when showDetails is set", () => {
  render(<TimelineRow item={role(["one", "two"])} showDetails />);
  expect(screen.getAllByRole("listitem")).toHaveLength(2);
});

test("TimelineRow with showDetails and no details renders no list", () => {
  const { container } = render(<TimelineRow item={role([])} showDetails />);
  expect(container.querySelector("ul")).toBeNull();
});

const project = (webLink: string | null): ProjectItem => ({
  id: 1,
  name: "Personal Website",
  link: "https://github.com/maxm-akins/personal-site",
  webLink,
  details: "A richer alternative to a static résumé.",
  sortOrder: 1,
});

test("ProjectCard shows a live link when web_link is present", () => {
  render(<ProjectCard item={project("https://maxmakins.com")} />);
  expect(screen.getByRole("link", { name: "code" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "live" })).toHaveAttribute(
    "href",
    "https://maxmakins.com",
  );
});

test("ProjectCard omits the live link when web_link is null", () => {
  render(<ProjectCard item={project(null)} />);
  expect(screen.getByRole("link", { name: "code" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "live" })).toBeNull();
});

const skills: SkillItem[] = [
  { id: 1, name: "Python", category: "Languages", sortOrder: 1 },
  { id: 2, name: "Go", category: "Languages", sortOrder: 2 },
  { id: 3, name: "React", category: "Frameworks & Runtimes", sortOrder: 3 },
  { id: 4, name: "Git", category: "Practices", sortOrder: 4 },
  { id: 5, name: "Java", category: "Languages", sortOrder: 5 },
];

test("groupByCategory groups and preserves first-seen order", () => {
  const groups = groupByCategory(skills);
  expect(groups.map((g) => g.category)).toEqual([
    "Languages",
    "Frameworks & Runtimes",
    "Practices",
  ]);
  expect(groups[0].skills.map((s) => s.name)).toEqual(["Python", "Go", "Java"]);
});

test("SkillGroup lists every skill name", () => {
  render(<SkillGroup category="Languages" skills={skills.slice(0, 2)} />);
  expect(screen.getByText("Languages")).toBeInTheDocument();
  expect(screen.getByText("Python · Go")).toBeInTheDocument();
});
