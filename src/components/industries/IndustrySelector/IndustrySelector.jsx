import { useState } from "react";
import { Link } from "react-router-dom";

import "./IndustrySelector.css";

import { industries } from "../../../data/industries";
import Button from "../../ui/Button";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

function IndustrySelector() {
  const [selectedIndustryId, setSelectedIndustryId] = useState(
    industries[0]?.id
  );

  const selectedIndustry =
    industries.find((industry) => industry.id === selectedIndustryId) ??
    industries[0];

  const selectedIndex = industries.findIndex(
    (industry) => industry.id === selectedIndustry.id
  );

  return (
    <Section
      className="industry-showcase"
      aria-labelledby="industry-showcase-title"
    >
      <Container width="wide">
        <div className="industry-showcase__heading">
          <div>
            <p className="eyebrow">Industrial applications</p>

            <h2 className="section-title" id="industry-showcase-title">
              Built for industries that depend on heat
            </h2>
          </div>

          <p className="industry-showcase__introduction">
            Explore how biomass briquettes may support different thermal
            applications and operating environments.
          </p>
        </div>

        <div
          className="industry-showcase__controls"
          aria-label="Select an industry"
        >
          {industries.map((industry, index) => {
            const isActive = industry.id === selectedIndustry.id;

            return (
              <button
                key={industry.id}
                className={[
                  "industry-showcase__control",
                  isActive ? "industry-showcase__control--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                type="button"
                aria-pressed={isActive}
                aria-controls="selected-industry"
                onClick={() => setSelectedIndustryId(industry.id)}
              >
                <span
                  className="industry-showcase__control-number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{industry.name}</span>
              </button>
            );
          })}
        </div>

        <article
          key={selectedIndustry.id}
          className="industry-showcase__display"
          id="selected-industry"
          aria-live="polite"
        >
          <div className="industry-showcase__visual">
            <img src={selectedIndustry.image} alt={selectedIndustry.imageAlt} />

            <div className="industry-showcase__visual-overlay">
              <span className="industry-showcase__visual-number">
                {String(selectedIndex + 1).padStart(2, "0")}
              </span>

              <span className="industry-showcase__visual-caption">
                Representative application
              </span>
            </div>
          </div>

          <div className="industry-showcase__content">
            <p className="industry-showcase__label">Selected industry</p>

            <h3>{selectedIndustry.name}</h3>

            <p className="industry-showcase__description">
              {selectedIndustry.context}
            </p>

            <div className="industry-showcase__information">
              <div className="industry-showcase__information-row">
                <p className="industry-showcase__information-label">
                  Application
                </p>

                <p>{selectedIndustry.application}</p>
              </div>

              <div className="industry-showcase__information-row">
                <p className="industry-showcase__information-label">
                  Before switching fuel
                </p>

                <ul>
                  {selectedIndustry.considerations.map((consideration) => (
                    <li key={consideration}>{consideration}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="industry-showcase__actions">
              <Button as={Link} to="/request-a-quote" size="small">
                Discuss Your Requirement
              </Button>

              <Link className="industry-showcase__text-link" to="/industries">
                Explore all industries
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}

export default IndustrySelector;
