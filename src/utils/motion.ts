import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registering is idempotent, so this is safe to import from anywhere.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** True when the user has asked the OS to minimise non-essential motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Shared easing tokens so every section feels like one product. */
export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
} as const;
