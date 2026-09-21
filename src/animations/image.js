import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function createImageAnimation(element, options = {}) {
  if (!element) return null;

  if (prefersReducedMotion()) {
    gsap.set(element, {
      clearProps: "all",
    });

    return null;
  }

  const { duration = 1, delay = 0, y = 30, scale = 1.04 } = options;

  return gsap.from(element, {
    y,
    scale,
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
  });
}

export function imageReveal(element, options = {}) {
  return createImageAnimation(element, options);
}

export function imageRevealOnScroll(element, options = {}) {
  if (!element) return null;

  if (prefersReducedMotion()) {
    gsap.set(element, {
      clearProps: "all",
    });

    return null;
  }

  const {
    duration = 1,
    delay = 0,
    y = 30,
    scale = 1.04,
    trigger = element,
    start = "top 82%",
    once = true,
  } = options;

  return gsap.from(element, {
    y,
    scale,
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger,
      start,
      once,
    },
  });
}
