"use client";

const items = [
  "FULL STACK",
  "ENTERPRISE INTEGRATION",
  "CLOUD NATIVE",
  "AGENTIC AI",
  "SPRING BOOT",
  "ANGULAR",
  "AZURE",
  "MICROSERVICES",
  "AUTOMATION",
];

export default function Marquee({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#050816] py-10">
      <div
        className={`flex w-max whitespace-nowrap ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-5xl font-black uppercase tracking-tight text-transparent md:text-7xl"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
          >
            {item}
            <span className="mx-8 text-blue-500" style={{ WebkitTextStroke: "0" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
