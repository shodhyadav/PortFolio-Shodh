"use client";

// Film-grain texture over the whole page for a cinematic feel.
const grain =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 z-[150] opacity-[0.05] mix-blend-overlay"
      style={{ backgroundImage: `url("${grain}")`, backgroundSize: "140px 140px" }}
    />
  );
}
