export const animationPresets = {
  fadeUp: {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  },

  fadeIn: {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  },

  slideLeft: {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  },

  slideRight: {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  },

  scaleReveal: {
    scale: 0.94,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  },
};

export const animationDefaults = {
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.12,
  start: "top 82%",
  end: "bottom 20%",
};
