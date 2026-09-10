"use client";

const cards = [
  {
    title: "Full Stack Engineering",
    description:
      "Building responsive Angular & React front-ends on Spring Boot REST APIs.",
  },
  {
    title: "Enterprise Integration",
    description:
      "Connecting Boomi, MuleSoft, Salesforce, NetSuite and REST APIs.",
  },
  {
    title: "Cloud & Microservices",
    description:
      "Refactoring monoliths into resilient, cloud-native Azure services.",
  },
  {
    title: "Agentic AI",
    description:
      "Automating workflows with Python, Azure AI and autonomous agents.",
  },
];

export default function IdentityCards() {
  return (
    <div
      className="
      mt-28
      grid
      gap-8

      md:grid-cols-2
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
          identity-card
          group
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-10
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-blue-500/40
          "
        >
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-500/0
            via-blue-500/5
            to-violet-500/10
            opacity-0
            transition
            duration-500
            group-hover:opacity-100
            "
          />

          <div className="relative z-10">

            <h3
              className="
              text-3xl
              font-bold
              text-white
              "
            >
              {card.title}
            </h3>

            <p
              className="
              mt-6
              leading-8
              text-slate-400
              "
            >
              {card.description}
            </p>

          </div>

        </div>
      ))}
    </div>
  );
}