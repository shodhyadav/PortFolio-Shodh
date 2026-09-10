/** True on phones only (below Tailwind's md breakpoint). Tablet/desktop stay untouched. */
export function isPhone(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}
