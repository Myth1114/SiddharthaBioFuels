import { useEffect, useRef } from "react";
import gsap from "gsap";

import { transformationStages } from "../../../data/process";
import { revealOnScroll, staggerOnScroll } from "../../../animations";

import Container from "../../layout/Container";
import Section from "../../layout/Section";

import "./TransformationStory.css";

function TransformationStory() {
  const sectionRef = useRef(null);

  const introRef = useRef(null);
  const stagesRef = useRef(null);
  const noticeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(introRef.current, "fadeUp", {
        duration: 0.8,
      });

      staggerOnScroll(stagesRef.current?.children, "fadeUp", {
        duration: 0.7,
        stagger: 0.12,
      });

      revealOnScroll(noticeRef.current, "fadeUp", {
        duration: 0.7,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={sectionRef}
      className="transformation-story"
      tone="paper"
      aria-labelledby="transformation-title"
    >
      <Container width="wide">
        <header ref={introRef} className="transformation-story__intro">
          <div>
            <p className="eyebrow">Material transformation</p>

            <h2 id="transformation-title" className="section-title">
              From residue to useful industrial heat.
            </h2>
          </div>

          <p className="body-lg">
            A material journey that begins in Nepal’s fields and ends inside
            industrial heating equipment.
          </p>
        </header>

        <div ref={stagesRef} className="transformation-story__stages">
          {transformationStages.map((stage) => (
            <article
              key={stage.id}
              className="transformation-story__stage"
              data-transformation-stage={stage.id}
            >
              <div className="transformation-story__stage-meta">
                <span
                  className="transformation-story__number numeric"
                  aria-hidden="true"
                >
                  {stage.number}
                </span>

                <p className="eyebrow">{stage.label}</p>
              </div>

              <div className="transformation-story__stage-content flow">
                <h3>{stage.title}</h3>

                <p>{stage.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p ref={noticeRef} className="transformation-story__notice body-sm">
          Detailed machinery and operating stages will be published after
          confirmation by the production team.
        </p>
      </Container>
    </Section>
  );
}

export default TransformationStory;
