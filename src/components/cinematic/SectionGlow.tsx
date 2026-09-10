export default function SectionGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="float-a absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[160px]" />
      <div className="float-b absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-violet-600/10 blur-[170px]" />
    </div>
  );
}
