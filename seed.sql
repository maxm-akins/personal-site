-- Re-runnable résumé seed. `class` is left empty on purpose — courses come later.
-- npx wrangler d1 execute personal-site --file=seed.sql --local   (or --remote)

DELETE FROM work_experience;
DELETE FROM project;
DELETE FROM skill;

INSERT INTO work_experience (company_name, company_location, title, start_date, end_date, details, sort_order) VALUES
  ('Apple', 'Austin, TX', 'Software Engineer', 'Jun 2025', 'Present', '[]', 5),
  ('BNY', 'Pittsburgh, PA', 'Software Engineering Intern', 'Jun 2024', 'Aug 2024', '["Shipped production features across two teams using C# .NET, SQL, JavaScript, and Python within an Agile development cycle.","Integrated firm-wide AI tooling into an existing application, delivering a feature that saved the business team ~10 hours per week; the impact drew attention from senior stakeholders, leading to an invitation to present the work to global leadership."]', 4),
  ('GrayMatter Systems', 'Warrendale, PA', 'Computer Science Intern', 'May 2022', 'Jun 2024', '["Designed and maintained a full MERN stack internal platform that standardizes administrative and financial processes, including secure authentication and authorization.","Led development of a partner company''s new product, which earned GrayMatter a featured role at the partner''s annual conference and exposure to hundreds of new business prospects.","Built and maintained the front end of an intra-company workflow application using HTML, CSS, and JavaScript."]', 3),
  ('FACET Lab', 'Pittsburgh, PA', 'Web Development Research Assistant', 'Aug 2022', 'Mar 2023', '["Ported an existing iOS application to a web platform delivering interactive English/Spanish literacy lessons."]', 2),
  ('FACET Lab', 'Pittsburgh, PA', 'Data Analytics Research Assistant', 'Dec 2021', 'May 2022', '["Analyzed large-scale student learning datasets in Python (Pandas, Matplotlib, scikit-learn) to surface behavioral patterns informing curriculum design."]', 1);

INSERT INTO project (name, link, web_link, details, sort_order) VALUES
  ('Personal Website', 'https://github.com/maxm-akins/personal-site', 'https://maxmakins.com', 'Designed and built a personal site as a richer alternative to a static resume; demonstrates frontend craftsmanship and deployment workflow.', 1);

INSERT INTO skill (name, category, sort_order) VALUES
  ('Python', 'Languages', 1),
  ('Java', 'Languages', 2),
  ('JavaScript/TypeScript', 'Languages', 3),
  ('Go', 'Languages', 4),
  ('C#', 'Languages', 5),
  ('C', 'Languages', 6),
  ('Dart', 'Languages', 7),
  ('HTML/CSS', 'Languages', 8),
  ('Node.js', 'Frameworks & Runtimes', 9),
  ('Express', 'Frameworks & Runtimes', 10),
  ('Next.js', 'Frameworks & Runtimes', 11),
  ('React', 'Frameworks & Runtimes', 12),
  ('Angular', 'Frameworks & Runtimes', 13),
  ('FastAPI', 'Frameworks & Runtimes', 14),
  ('.NET', 'Frameworks & Runtimes', 15),
  ('Flutter', 'Frameworks & Runtimes', 16),
  ('Mongoose', 'Frameworks & Runtimes', 17),
  ('MCP (Model Context Protocol)', 'AI & Agentic Tooling', 18),
  ('Claude Code', 'AI & Agentic Tooling', 19),
  ('Agentic system design', 'AI & Agentic Tooling', 20),
  ('LLM tool-use integration', 'AI & Agentic Tooling', 21),
  ('AWS', 'Cloud & Data', 22),
  ('Google Cloud Platform', 'Cloud & Data', 23),
  ('DigitalOcean', 'Cloud & Data', 24),
  ('NoSQL', 'Cloud & Data', 25),
  ('SQL', 'Cloud & Data', 26),
  ('Kubernetes', 'Cloud & Data', 27),
  ('Agile/Scrum', 'Practices', 28),
  ('Git/GitHub/GitLab', 'Practices', 29),
  ('CI/CD', 'Practices', 30);
