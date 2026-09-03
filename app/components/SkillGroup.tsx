import type { SkillItem } from "../db/queries";

export function groupByCategory(
  skills: SkillItem[],
): { category: string; skills: SkillItem[] }[] {
  const groups: { category: string; skills: SkillItem[] }[] = [];
  for (const skill of skills) {
    const category = skill.category ?? "Other";
    let group = groups.find((g) => g.category === category);
    if (!group) {
      group = { category, skills: [] };
      groups.push(group);
    }
    group.skills.push(skill);
  }
  return groups;
}

export function SkillGroup({
  category,
  skills,
}: {
  category: string;
  skills: SkillItem[];
}) {
  return (
    <li className="skill-group">
      <h3 className="lbl skill-category">{category}</h3>
      <div className="skill-names">{skills.map((s) => s.name).join(" · ")}</div>
    </li>
  );
}
