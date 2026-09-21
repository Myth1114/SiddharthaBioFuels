import gsap from "gsap";

export function textReveal(element, options = {}) {
  if (!element) return null;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    gsap.set(element, {
      clearProps: "all",
    });

    return null;
  }

  const { duration = 1, delay = 0.15, y = 32, ease = "power3.out" } = options;

  return gsap.from(element, {
    y,
    opacity: 0,
    duration,
    delay,
    ease,
  });
}
