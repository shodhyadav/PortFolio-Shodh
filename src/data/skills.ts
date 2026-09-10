export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "Groovy", "DWL"],
  },
  {
    title: "Frameworks & UI",
    skills: ["Spring Boot", "Angular", "React", "Next.js", "Bootstrap", "Tailwind"],
  },
  {
    title: "Integration",
    skills: ["Boomi", "MuleSoft", "Salesforce", "NetSuite", "REST", "EDI"],
  },
  {
    title: "Agentic AI",
    skills: ["Azure AI", "Copilot", "Gen-AI", "NLP", "Hugging Face"],
  },
  {
    title: "Data",
    skills: ["MySQL", "MS SQL Server", "MongoDB", "Power BI"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Git", "GitHub", "Linux", "CI/CD"],
  },
];
