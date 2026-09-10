export const profile = {
  name: "Shodh Yadav",
  firstName: "SHODH",
  lastName: "YADAV",
  roles: ["Full Stack Developer", "Integration Developer", "Agentic AI"],
  tagline: "SHODH YADAV • FULL STACK • INTEGRATION • AI",
  location: "Bangalore, India",
  email: "shodhyadav7@gmail.com",
  phone: "+91 8299702952",
  about:
    "I'm a Full Stack Developer and Integration Specialist with hands-on expertise building scalable web applications and enterprise integrations using Angular, Spring Boot, Boomi and Azure. I care about clean architecture, cloud-native development and shipping high-impact digital solutions.",
  aboutShort:
    "I architect enterprise integrations, build scalable full-stack platforms and craft intelligent automation that powers modern businesses.",
  socials: {
    github: "https://github.com/shodhyadav",
    linkedin: "https://www.linkedin.com/in/shodh-yadav-804818140/",
    email: "mailto:shodhyadav7@gmail.com",
    phone: "tel:+918299702952",
    resume: "/resume.pdf",
  },
  stats: [
    { value: "4+", label: "Years Building" },
    { value: "20+", label: "Projects Shipped" },
    { value: "5+", label: "Certifications" },
    { value: "4+", label: "Enterprise Teams" },
  ],
} as const;

export type Profile = typeof profile;
