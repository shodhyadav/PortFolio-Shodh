export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  repo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "HRMS Pro",
    category: "Full Stack",
    description:
      "An enterprise Human Resource Management platform for employee, attendance and payroll workflows, built with a modern TypeScript and React interface over REST services.",
    tags: ["React", "TypeScript", "REST API", "Dashboard"],
    repo: "https://github.com/shodhyadav/HRMS-PRO",
    featured: true,
  },
  {
    title: "AI Research Agent",
    category: "Agentic AI",
    description:
      "An autonomous agent that plans, searches the web and synthesizes findings into structured research reports using large language models.",
    tags: ["Python", "LLM", "Agents", "Automation"],
    repo: "https://github.com/shodhyadav/AI-Research-Agent",
    featured: true,
  },
  {
    title: "AI Software Engineer",
    category: "Agentic AI",
    description:
      "An AI coding agent that reads requirements and generates, edits and reasons about code across an entire project workspace.",
    tags: ["Python", "Gen-AI", "Tooling"],
    repo: "https://github.com/shodhyadav/AI-Software-Engineer",
    featured: true,
  },
  {
    title: "JSON to EDI",
    category: "Integration",
    description:
      "A transformation engine that converts JSON payloads into EDI documents for enterprise B2B data exchange and partner integrations.",
    tags: ["JavaScript", "EDI", "Integration"],
    repo: "https://github.com/shodhyadav/Json2edi",
  },
  {
    title: "AI with MuleSoft",
    category: "Integration",
    description:
      "Bringing AI capabilities into MuleSoft integration flows to enable intelligent, self-adapting enterprise automation.",
    tags: ["MuleSoft", "AI", "iPaaS"],
    repo: "https://github.com/shodhyadav/AI-With-Mulesoft",
  },
  {
    title: "Excel Automation",
    category: "Automation",
    description:
      "Automates repetitive spreadsheet workflows and reporting pipelines, replacing hours of manual effort with a single run.",
    tags: ["JavaScript", "Automation", "Reporting"],
    repo: "https://github.com/shodhyadav/Excel-Automation",
  },
];
