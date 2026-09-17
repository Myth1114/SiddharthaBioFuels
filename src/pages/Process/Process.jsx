import { useMemo, useRef, useState } from "react";

import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { manufacturingStages } from "../../data/process";
import { useProcessAnimation } from "../../hooks/useProcessAnimation";

import "./Process.css";

function getVisualStageClass(stageId, activeStage) {
  return [
    "process-visual__station",
    activeStage === stageId ? "process-visual__station--active" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function ProcessVisual({ activeStage }) {
  const currentStage =
    manufacturingStages.find((stage) => stage.id === activeStage) ||
    manufacturingStages[0];

  return (
    <div className="process-visual">
      <div className="process-visual__header">
        <div>
          <p>Transformation line</p>

          <span>Residue to finished fuel</span>
        </div>

        <strong>{currentStage.number}</strong>
      </div>

      <div className="process-visual__canvas">
        <svg
          className="process-visual__diagram"
          viewBox="0 0 760 480"
          role="img"
          aria-labelledby="process-visual-title process-visual-description"
        >
          <title id="process-visual-title">
            Biomass fuel manufacturing process
          </title>

          <desc id="process-visual-description">
            A simplified production line showing biomass residue moving through
            preparation, moisture reduction, compression, cooling, quality
            checking, storage and dispatch.
          </desc>

          <path className="process-visual__flow-line" d="M55 260 H705" />

          <path
            className="process-visual__flow-arrow"
            d="M690 248 L708 260 L690 272"
          />

          {/* Stage 01: residue sourcing */}

          <g className={getVisualStageClass("residue-sourcing", activeStage)}>
            <circle cx="70" cy="216" r="8" />
            <circle cx="94" cy="232" r="6" />
            <circle cx="63" cy="245" r="5" />
            <circle cx="103" cy="255" r="7" />

            <path d="M64 205 L49 179" />
            <path d="M78 208 L76 175" />
            <path d="M92 218 L109 188" />

            <text x="75" y="320" textAnchor="middle">
              01
            </text>
          </g>

          {/* Stage 02: material preparation */}

          <g
            className={getVisualStageClass("material-preparation", activeStage)}
          >
            <rect x="140" y="205" width="72" height="105" rx="4" />

            <path d="M154 221 L198 291" />
            <path d="M198 221 L154 291" />

            <circle cx="176" cy="256" r="11" />

            <text x="176" y="338" textAnchor="middle">
              02
            </text>
          </g>

          {/* Stage 03: moisture reduction */}

          <g className={getVisualStageClass("moisture-reduction", activeStage)}>
            <rect x="247" y="215" width="85" height="90" rx="42" />

            <path d="M260 246 C273 232 285 260 298 246 C311 232 320 260 327 246" />

            <path d="M260 270 C273 256 285 284 298 270 C311 256 320 284 327 270" />

            <path d="M270 193 C263 181 276 174 270 162" />
            <path d="M290 193 C283 181 296 174 290 162" />
            <path d="M310 193 C303 181 316 174 310 162" />

            <text x="290" y="338" textAnchor="middle">
              03
            </text>
          </g>

          {/* Stage 04: compression */}

          <g className={getVisualStageClass("compression", activeStage)}>
            <rect x="370" y="174" width="78" height="46" rx="3" />

            <rect x="370" y="298" width="78" height="30" rx="3" />

            <path d="M389 220 V242" />
            <path d="M429 220 V242" />

            <rect x="382" y="242" width="54" height="55" rx="3" />

            <path d="M449 260 H483" />

            <rect
              className="process-visual__briquette"
              x="470"
              y="246"
              width="55"
              height="28"
              rx="14"
            />

            <ellipse
              className="process-visual__briquette-end"
              cx="518"
              cy="260"
              rx="9"
              ry="14"
            />

            <text x="410" y="360" textAnchor="middle">
              04
            </text>
          </g>

          {/* Stage 05: cooling */}

          <g className={getVisualStageClass("cooling", activeStage)}>
            <path d="M520 287 H585" />

            <circle cx="533" cy="290" r="5" />
            <circle cx="552" cy="290" r="5" />
            <circle cx="571" cy="290" r="5" />

            <rect x="526" y="246" width="50" height="25" rx="12" />

            <path d="M531 225 C541 215 550 235 560 225" />
            <path d="M542 207 C552 197 561 217 571 207" />

            <text x="552" y="338" textAnchor="middle">
              05
            </text>
          </g>

          {/* Stage 06: quality checking */}

          <g className={getVisualStageClass("quality-checking", activeStage)}>
            <path d="M606 298 V206 H651 V298" />

            <path d="M613 234 H644" />

            <path className="process-visual__scan-line" d="M613 260 H644" />

            <path d="M616 279 L625 287 L643 266" />

            <text x="629" y="338" textAnchor="middle">
              06
            </text>
          </g>

          {/* Stage 07: storage and dispatch */}

          <g className={getVisualStageClass("storage-dispatch", activeStage)}>
            <rect x="675" y="220" width="44" height="35" rx="2" />

            <rect x="683" y="183" width="36" height="35" rx="2" />

            <path d="M668 286 H726" />
            <path d="M676 286 V297" />
            <path d="M718 286 V297" />

            <text x="700" y="338" textAnchor="middle">
              07
            </text>
          </g>

          {/* Material-flow particles */}

          <circle
            className="process-visual__material-particle"
            cx="113"
            cy="260"
            r="4"
          />

          <circle
            className="process-visual__material-particle"
            cx="225"
            cy="260"
            r="4"
          />

          <circle
            className="process-visual__material-particle"
            cx="344"
            cy="260"
            r="4"
          />
        </svg>

        <div className="process-visual__active-label" aria-live="polite">
          <span>{currentStage.label}</span>

          <strong>{currentStage.title}</strong>
        </div>
      </div>

      <div className="process-visual__footer">
        <span>
          Stage {currentStage.number} of{" "}
          {String(manufacturingStages.length).padStart(2, "0")}
        </span>

        <span>Scroll to follow the material</span>
      </div>
    </div>
  );
}

function Process() {
  const processRootRef = useRef(null);

  const [activeStage, setActiveStage] = useState(manufacturingStages[0].id);

  const activeStageIndex = useMemo(
    () => manufacturingStages.findIndex((stage) => stage.id === activeStage),
    [activeStage]
  );

  useProcessAnimation({
    rootRef: processRootRef,
    activeStage,
    setActiveStage,
  });

  return (
    <div className="process-page" ref={processRootRef}>
      <section
        className="process-page__hero"
        aria-labelledby="process-page-title"
      >
        <Container width="wide">
          <div className="process-page__hero-bar">
            <p>Manufacturing process</p>

            <span>SBF / Process overview</span>
          </div>

          <div className="process-page__hero-layout">
            <div>
              <p className="process-page__eyebrow">From residue to fuel</p>

              <h1 className="process-page__title" id="process-page-title">
                Biomass transformed into dense industrial fuel.
              </h1>
            </div>

            <div className="process-page__hero-copy">
              <p>
                Follow the general transformation of agricultural and wood
                residue into briquette and pellet forms prepared for compatible
                industrial heating applications.
              </p>

              <p className="process-page__hero-note">
                This visual explains the production stages. It does not
                represent the exact layout or machinery of the company’s
                manufacturing facility.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="process-line"
        aria-labelledby="transformation-line-title"
      >
        <Container width="wide">
          <div className="process-line__heading">
            <div>
              <p className="process-page__eyebrow">The transformation line</p>

              <h2 id="transformation-line-title">
                Seven stages. One continuous material journey.
              </h2>
            </div>

            <div
              className="process-line__progress"
              role="progressbar"
              aria-label="Manufacturing process progress"
              aria-valuemin="1"
              aria-valuemax={manufacturingStages.length}
              aria-valuenow={activeStageIndex + 1}
            >
              <span
                style={{
                  width: `${
                    ((activeStageIndex + 1) / manufacturingStages.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="process-line__layout">
            <div className="process-line__visual-column">
              <div className="process-line__visual-sticky">
                <ProcessVisual activeStage={activeStage} />
              </div>
            </div>

            <div className="process-line__stages">
              {manufacturingStages.map((stage) => {
                const isActive = activeStage === stage.id;

                return (
                  <article
                    className={[
                      "process-stage",
                      isActive ? "process-stage--active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    id={stage.id}
                    key={stage.id}
                    data-manufacturing-stage
                  >
                    <div className="process-stage__number">
                      <span>{stage.number}</span>

                      <i aria-hidden="true" />
                    </div>

                    <div className="process-stage__content">
                      <p className="process-stage__label">{stage.label}</p>

                      <h3>{stage.title}</h3>

                      <p className="process-stage__description">
                        {stage.description}
                      </p>

                      <p className="process-stage__details">{stage.details}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="process-page__verification"
        aria-labelledby="process-verification-title"
      >
        <Container width="wide">
          <div className="process-page__verification-layout">
            <div>
              <p className="process-page__eyebrow">Process information</p>

              <h2 id="process-verification-title">
                Technical measurements require verification.
              </h2>
            </div>

            <div className="process-page__verification-content">
              <p>
                Exact machine settings, drying conditions, production
                tolerances, inspection methods and processing capacity will be
                published only after they are officially reviewed and approved.
              </p>

              <div className="process-page__verification-status">
                <span aria-hidden="true" />
                Verification pending
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="process-page__cta">
        <Container width="wide">
          <div className="process-page__cta-layout">
            <div>
              <p className="process-page__eyebrow">Industrial fuel enquiry</p>

              <h2>Discuss your biomass-fuel requirement.</h2>
            </div>

            <div className="process-page__cta-content">
              <p>
                Share your required product, estimated quantity, application and
                delivery location with our team.
              </p>

              <div className="process-page__cta-actions">
                <Button as={Link} to="/request-a-quote">
                  Start your requirement
                </Button>

                <Link className="process-page__product-link" to="/products">
                  Explore products
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Process;
