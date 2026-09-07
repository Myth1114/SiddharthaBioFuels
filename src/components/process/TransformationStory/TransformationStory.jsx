import { transformationStages } from "../../../data/process";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

import "./TransformationStory.css";

function TransformationStory() {
  return (
    <Section
      className="transformation-story"
      tone="paper"
      aria-labelledby="transformation-title"
    >
      <Container width="wide">
        <header className="transformation-story__intro">
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

        <div className="transformation-story__stages">
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

        <p className="transformation-story__notice body-sm">
          Detailed machinery and operating stages will be published after
          confirmation by the production team.
        </p>
      </Container>
    </Section>
  );
}

export default TransformationStory;
