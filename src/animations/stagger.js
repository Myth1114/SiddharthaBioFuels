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

export function staggerIn(elements, preset = "fadeUp", options = {}) {
  if (!elements || !elements.length) return null;

  if (prefersReducedMotion()) {
    gsap.set(elements, {
      clearProps: "all",
    });

    return null;
  }

  const selectedPreset = getPreset(preset);

  const {
    duration = selectedPreset.duration,
    delay = 0,
    ease = selectedPreset.ease,
    stagger = animationDefaults.stagger,
  } = options;

  return gsap.from(elements, {
    ...selectedPreset,
    duration,
    delay,
    ease,
    stagger,
  });
}

export function staggerOnScroll(elements, preset = "fadeUp", options = {}) {
  if (!elements || !elements.length) return null;

  if (prefersReducedMotion()) {
    gsap.set(elements, {
      clearProps: "all",
    });

    return null;
  }

  const selectedPreset = getPreset(preset);

  const {
    duration = selectedPreset.duration,
    delay = 0,
    ease = selectedPreset.ease,
    stagger = animationDefaults.stagger,
    trigger = elements[0],
    start = animationDefaults.start,
    end = animationDefaults.end,
    once = true,
  } = options;

  return gsap.from(elements, {
    ...selectedPreset,
    duration,
    delay,
    ease,
    stagger,
    scrollTrigger: {
      trigger,
      start,
      end,
      once,
    },
  });
}
