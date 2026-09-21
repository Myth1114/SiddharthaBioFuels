import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animationDefaults, animationPresets } from "./presets";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getPreset(preset) {
  return animationPresets[preset] ?? animationPresets.fadeUp;
}

export function revealIn(element, preset = "fadeUp", options = {}) {
  if (!element) return null;

  if (prefersReducedMotion()) {
    gsap.set(element, {
      clearProps: "all",
    });

    return null;
  }

  const selectedPreset = getPreset(preset);

  const {
    duration = selectedPreset.duration,
    delay = 0,
    ease = selectedPreset.ease,
  } = options;

  return gsap.from(element, {
    ...selectedPreset,
    duration,
    delay,
    ease,
  });
}

export function revealOnScroll(element, preset = "fadeUp", options = {}) {
  if (!element) return null;

  if (prefersReducedMotion()) {
    gsap.set(element, {
      clearProps: "all",
    });

    return null;
  }

  const selectedPreset = getPreset(preset);

  const {
    duration = selectedPreset.duration,
    delay = 0,
    ease = selectedPreset.ease,
    trigger = element,
    start = animationDefaults.start,
    end = animationDefaults.end,
    once = true,
  } = options;

  return gsap.from(element, {
    ...selectedPreset,
    duration,
    delay,
    ease,
    scrollTrigger: {
      trigger,
      start,
      end,
      once,
    },
  });
}
