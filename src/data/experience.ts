export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: "PowerSchool India",
    role: "Software Engineer",
    period: "Jun 2026 — Present",
    location: "India",
    highlights: [
      "Driving an enterprise modernization initiative, migrating business workflows from Boomi integration processes to Spring Boot microservices.",
      "Building Spring Boot REST APIs and modular business services that replace integration-layer logic behind an API-first architecture.",
      "Developing Angular interfaces for workflow management, configuration and operational monitoring.",
    ],
    stack: ["Spring Boot", "Angular", "Microservices", "Boomi", "REST"],
  },
  {
    company: "Infinite Computer Solutions",
    role: "Full Stack & Integration Developer",
    period: "Sep 2022 — May 2026",
    location: "Bangalore, India",
    highlights: [
      "Modernized legacy workflows by refactoring monolithic components into Spring Boot services, improving scalability and release agility.",
      "Delivered end-to-end features — Spring Boot REST APIs, optimized SQL and responsive Angular applications.",
      "Built reusable services and components that cut code duplication and accelerated delivery across modules.",
      "Optimized APIs, database interactions and asynchronous processing for business-critical workflows.",
      "Partnered with architects on microservices adoption, API versioning and enterprise integration patterns.",
    ],
    stack: ["Spring Boot", "Angular", "SQL", "Azure", "MuleSoft", "Boomi"],
  },
];
