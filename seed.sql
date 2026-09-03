-- Re-runnable résumé seed. `class` is left empty on purpose — courses come later.
-- npx wrangler d1 execute personal-site --file=seed.sql --local   (or --remote)

DELETE FROM work_experience;
DELETE FROM project;
DELETE FROM skill;

INSERT INTO work_experience (company_name, company_location, title, start_date, end_date, details, sort_order) VALUES
  ('Apple', 'Austin, TX', 'Software Engineer', 'Jun 2025', 'Present', '["Part of a pioneering effort to bring generative and agentic AI capabilities to both developers and business users across Apple, contributing to foundational tooling and adoption patterns now used organization-wide.","Owned end-to-end development of an internal agentic chatbot serving business users and leadership across 5 LOBs, consolidating several dashboard systems into a unified natural-language interface for time-sensitive analysis.","Led migration of a native macOS/iOS application to a web platform now used organization-wide, expanding access across the entire organization."]', 5),
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
  ('React Router', 'Frameworks & Runtimes', 9),
  ('Node.js', 'Frameworks & Runtimes', 10),
  ('Express', 'Frameworks & Runtimes', 11),
  ('Next.js', 'Frameworks & Runtimes', 12),
  ('React', 'Frameworks & Runtimes', 13),
  ('Angular', 'Frameworks & Runtimes', 14),
  ('FastAPI', 'Frameworks & Runtimes', 15),
  ('.NET', 'Frameworks & Runtimes', 16),
  ('Flutter', 'Frameworks & Runtimes', 17),
  ('Mongoose', 'Frameworks & Runtimes', 18),
  ('MCP (Model Context Protocol)', 'AI & Agentic Tooling', 19),
  ('Claude Code', 'AI & Agentic Tooling', 20),
  ('Agentic system design', 'AI & Agentic Tooling', 21),
  ('LLM tool-use integration', 'AI & Agentic Tooling', 22),
  ('AWS', 'Cloud & Data', 23),
  ('Google Cloud Platform', 'Cloud & Data', 24),
  ('DigitalOcean', 'Cloud & Data', 25),
  ('NoSQL', 'Cloud & Data', 26),
  ('SQL', 'Cloud & Data', 27),
  ('Kubernetes', 'Cloud & Data', 28),
  ('Agile/Scrum', 'Practices', 29),
  ('Git/GitHub/GitLab', 'Practices', 30),
  ('CI/CD', 'Practices', 31);
