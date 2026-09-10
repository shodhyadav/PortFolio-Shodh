import type { Experience } from "../../data/experience";

export default function JourneyItem({
  company,
  role,
  period,
  location,
  highlights,
  stack,
}: Experience) {
  return (
    <div className="journey-item relative grid grid-cols-1 gap-8 border-b border-white/10 py-14 md:grid-cols-[280px_1fr] md:gap-12 md:py-16">
      <div>
        <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          {period}
        </span>
        <h3 className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl">
          {company}
        </h3>
        <p className="mt-2 text-slate-400">{role}</p>
        <p className="mt-1 text-sm text-slate-500">{location}</p>
      </div>

      <div>
        <ul className="space-y-4">
          {highlights.map((point) => (
            <li key={point} className="flex gap-4 text-slate-300">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
              <span className="leading-8">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}