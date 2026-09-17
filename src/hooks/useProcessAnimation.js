import { useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useProcessAnimation({ rootRef, activeStage, setActiveStage }) {
  const activeTimelineRef = useRef(null);

  /*
    ScrollTrigger controls which written stage is active.
  */

  useLayoutEffect(() => {
    const rootElement = rootRef.current;

    if (!rootElement) {
      return undefined;
    }

    const context = gsap.context(() => {
      const stageElements = gsap.utils.toArray(
        "[data-manufacturing-stage]",
        rootElement
      );

      stageElements.forEach((stageElement) => {
        ScrollTrigger.create({
          trigger: stageElement,

          start: () => (window.innerWidth <= 992 ? "top 66%" : "top 52%"),

          end: () => (window.innerWidth <= 992 ? "bottom 42%" : "bottom 45%"),

          onEnter: () => {
            setActiveStage(stageElement.id);
          },

          onEnterBack: () => {
            setActiveStage(stageElement.id);
          },

          invalidateOnRefresh: true,
        });
      });
    }, rootElement);

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);

      context.revert();
    };
  }, [rootRef, setActiveStage]);

  /*
    GSAP animates the visual associated with the active stage.
  */

  useEffect(() => {
    const rootElement = rootRef.current;

    if (!rootElement) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const activeVisual = rootElement.querySelector(
      ".process-visual__station--active"
    );

    const diagram = rootElement.querySelector(".process-visual__diagram");

    if (!activeVisual || !diagram) {
      return undefined;
    }

    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
    }

    const timeline = gsap.timeline({
      defaults: {
        duration: 0.55,
        ease: "power2.out",
      },
    });

    activeTimelineRef.current = timeline;

    timeline.fromTo(
      activeVisual,
      {
        opacity: 0.45,
      },
      {
        opacity: 1,
        duration: 0.3,
      }
    );
    const isMobile = window.matchMedia("(max-width: 47rem)").matches;

    const visualStations = rootElement.querySelectorAll(
      ".process-visual__station"
    );

    /*
        Keep the complete production line centred.
        Remove any transforms left by the previous implementation.
      */

    gsap.set(diagram, {
      x: 0,
      scale: 1,
      transformOrigin: "center center",
    });

    /*
        Reset previously active stations.
      */

    gsap.to(visualStations, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });

    /*
        Give only the active station a small emphasis.
        There is no horizontal diagram movement.
      */

    timeline.fromTo(
      activeVisual,
      {
        scale: isMobile ? 0.94 : 0.97,
        transformOrigin: "center center",
      },
      {
        scale: isMobile ? 1.08 : 1.04,
        transformOrigin: "center center",
        duration: 0.45,
        ease: "back.out(1.5)",
      },
      0
    );
    switch (activeStage) {
      case "residue-sourcing": {
        const particles = activeVisual.querySelectorAll("circle");
        const residueLines = activeVisual.querySelectorAll("path");

        timeline.fromTo(
          particles,
          {
            opacity: 0,
            x: -18,
            y: -10,
            scale: 0.45,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            stagger: 0.08,
          },
          0
        );

        timeline.fromTo(
          residueLines,
          {
            opacity: 0,
            scaleY: 0.4,
            transformOrigin: "bottom center",
          },
          {
            opacity: 1,
            scaleY: 1,
            stagger: 0.07,
          },
          0.1
        );

        break;
      }

      case "material-preparation": {
        const preparationBlades = activeVisual.querySelectorAll("path");

        const preparationCore = activeVisual.querySelector("circle");

        timeline.fromTo(
          preparationBlades,
          {
            rotation: -90,
            svgOrigin: "176 256",
          },
          {
            rotation: 180,
            svgOrigin: "176 256",
            duration: 0.8,
            ease: "power2.inOut",
          },
          0
        );

        timeline.fromTo(
          preparationCore,
          {
            scale: 0.65,
            svgOrigin: "176 256",
          },
          {
            scale: 1,
            svgOrigin: "176 256",
            duration: 0.45,
          },
          0.15
        );

        break;
      }

      case "moisture-reduction": {
        const dryingPaths = activeVisual.querySelectorAll("path");

        timeline.fromTo(
          dryingPaths,
          {
            opacity: 0,
            y: 10,
            strokeDasharray: "8 6",
            strokeDashoffset: 18,
          },
          {
            opacity: 1,
            y: 0,
            strokeDashoffset: 0,
            stagger: 0.08,
          },
          0
        );

        break;
      }

      case "compression": {
        const compressionRects = activeVisual.querySelectorAll("rect");

        const upperPress = compressionRects[0];
        const lowerPress = compressionRects[1];

        const briquette = activeVisual.querySelector(
          ".process-visual__briquette"
        );

        const briquetteEnd = activeVisual.querySelector(
          ".process-visual__briquette-end"
        );

        timeline.fromTo(
          upperPress,
          {
            y: -22,
          },
          {
            y: 0,
            duration: 0.45,
          },
          0
        );

        timeline.fromTo(
          lowerPress,
          {
            y: 22,
          },
          {
            y: 0,
            duration: 0.45,
          },
          0
        );

        timeline.fromTo(
          briquette,
          {
            scaleX: 0,
            svgOrigin: "470 260",
          },
          {
            scaleX: 1,
            svgOrigin: "470 260",
            duration: 0.7,
            ease: "power3.out",
          },
          0.35
        );

        timeline.fromTo(
          briquetteEnd,
          {
            opacity: 0,
            scale: 0.4,
            svgOrigin: "518 260",
          },
          {
            opacity: 1,
            scale: 1,
            svgOrigin: "518 260",
            duration: 0.35,
          },
          0.75
        );

        break;
      }

      case "cooling": {
        const coolingProduct = activeVisual.querySelector("rect");

        const coolingPaths = activeVisual.querySelectorAll("path");

        const coolingRollers = activeVisual.querySelectorAll("circle");

        timeline.fromTo(
          coolingProduct,
          {
            x: -18,
            opacity: 0.4,
          },
          {
            x: 0,
            opacity: 1,
          },
          0
        );

        timeline.fromTo(
          coolingPaths,
          {
            x: -8,
            opacity: 0,
            strokeDasharray: "6 5",
          },
          {
            x: 0,
            opacity: 1,
            strokeDasharray: "6 5",
            stagger: 0.08,
          },
          0.1
        );

        timeline.fromTo(
          coolingRollers,
          {
            rotation: -90,
            transformOrigin: "center",
          },
          {
            rotation: 90,
            transformOrigin: "center",
            stagger: 0.05,
          },
          0.15
        );

        break;
      }

      case "quality-checking": {
        const scanningLine = activeVisual.querySelector(
          ".process-visual__scan-line"
        );

        const qualityPaths = activeVisual.querySelectorAll("path");

        const approvalMark = qualityPaths[qualityPaths.length - 1];

        timeline.fromTo(
          scanningLine,
          {
            y: -25,
            opacity: 0,
          },
          {
            y: 25,
            opacity: 1,
            duration: 0.75,
            ease: "power1.inOut",
          },
          0
        );

        timeline.fromTo(
          approvalMark,
          {
            opacity: 0,
            scale: 0.5,
            svgOrigin: "629 278",
          },
          {
            opacity: 1,
            scale: 1,
            svgOrigin: "629 278",
            duration: 0.35,
          },
          0.65
        );

        break;
      }

      case "storage-dispatch": {
        const storageUnits = activeVisual.querySelectorAll("rect");

        const dispatchPaths = activeVisual.querySelectorAll("path");

        timeline.fromTo(
          storageUnits,
          {
            opacity: 0,
            y: -18,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
          },
          0
        );

        timeline.fromTo(
          dispatchPaths,
          {
            opacity: 0,
            scaleX: 0.4,
            transformOrigin: "left center",
          },
          {
            opacity: 1,
            scaleX: 1,
            transformOrigin: "left center",
            stagger: 0.1,
          },
          0.3
        );

        break;
      }

      default:
        break;
    }

    return () => {
      timeline.kill();
    };
  }, [activeStage, rootRef]);

  useEffect(() => {
    return () => {
      activeTimelineRef.current?.kill();
    };
  }, []);
}
