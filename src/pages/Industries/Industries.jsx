import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { industries } from "../../data/industries";

import "./Industries.css";

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]?.id || "");

  useEffect(() => {
    const industrySections = document.querySelectorAll(
      "[data-industry-section]"
    );

    if (!industrySections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveIndustry(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    industrySections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  function handleIndustryNavigation(industryId) {
    const selectedSection = document.getElementById(industryId);

    if (!selectedSection) {
      return;
    }

    setActiveIndustry(industryId);

    selectedSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${industryId}`);
  }

  return (
    <div className="industries-page">
      <section
        className="industries-page__hero"
        aria-labelledby="industries-page-title"
      >
        <Container width="wide">
          <div className="industries-page__hero-bar">
            <p>Industrial applications</p>

            <span>SBF / Application guide</span>
          </div>

          <div className="industries-page__hero-layout">
            <div>
              <p className="industries-page__eyebrow">Potential applications</p>

              <h1 className="industries-page__title" id="industries-page-title">
                Biomass fuel across heat-intensive industries.
              </h1>
            </div>

            <div className="industries-page__hero-copy">
              <p>
                Explore potential applications of biomass briquettes and pellets
                across industrial heating operations.
              </p>

              <p className="industries-page__hero-note">
                Final fuel suitability depends on equipment design, operating
                temperature, fuel-feeding requirements and storage conditions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="industries-page__directory-section"
        aria-labelledby="industry-directory-title"
      >
        <Container width="wide">
          <div className="industries-page__directory">
            <aside className="industries-page__navigation">
              <div className="industries-page__navigation-inner">
                <p
                  className="industries-page__navigation-title"
                  id="industry-directory-title"
                >
                  Industry directory
                </p>

                <nav aria-label="Industry application directory">
                  {industries.map((industry, index) => {
                    const isActive = activeIndustry === industry.id;

                    return (
                      <button
                        key={industry.id}
                        className={[
                          "industries-page__navigation-button",
                          isActive
                            ? "industries-page__navigation-button--active"
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        type="button"
                        aria-current={isActive ? "location" : undefined}
                        onClick={() => handleIndustryNavigation(industry.id)}
                      >
                        <span
                          className="industries-page__navigation-number"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{industry.name}</span>
                      </button>
                    );
                  })}
                </nav>

                <p className="industries-page__navigation-note">
                  Select an industry or scroll through the complete application
                  guide.
                </p>
              </div>
            </aside>

            <div className="industries-page__dossiers">
              {industries.map((industry, index) => (
                <article
                  className="industry-dossier"
                  id={industry.id}
                  key={industry.id}
                  data-industry-section
                >
                  <div className="industry-dossier__visual">
                    {industry.image ? (
                      <img
                        className="industry-dossier__image"
                        src={industry.image}
                        alt={
                          industry.imageAlt ||
                          `Representative ${industry.name} application`
                        }
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="industry-dossier__placeholder">
                        <span>{industry.name}</span>

                        <p>Industry visual being prepared</p>
                      </div>
                    )}

                    <p className="industry-dossier__visual-note">
                      Representative application
                    </p>
                  </div>

                  <header className="industry-dossier__header">
                    <span
                      className="industry-dossier__number"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="industry-dossier__label">
                        Industrial application
                      </p>

                      <h2>{industry.name}</h2>
                    </div>
                  </header>

                  <div className="industry-dossier__content">
                    <div className="industry-dossier__overview">
                      <div>
                        <p className="industry-dossier__content-label">
                          Operating context
                        </p>

                        <p>{industry.context}</p>
                      </div>

                      <div>
                        <p className="industry-dossier__content-label">
                          Potential application
                        </p>

                        <p>{industry.application}</p>
                      </div>

                      <Button
                        as={Link}
                        to={`/request-a-quote?industry=${industry.id}`}
                        size="small"
                      >
                        Discuss this application
                      </Button>
                    </div>

                    <div className="industry-dossier__considerations">
                      <p className="industry-dossier__content-label">
                        Before switching fuel
                      </p>

                      <ul>
                        {industry.considerations.map((consideration) => (
                          <li key={consideration}>
                            <span aria-hidden="true">—</span>

                            <span>{consideration}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        className="industry-dossier__product-link"
                        to="/products"
                      >
                        Explore available products
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="industries-page__evaluation"
        aria-labelledby="industry-evaluation-title"
      >
        <Container width="wide">
          <div className="industries-page__evaluation-header">
            <div>
              <p className="industries-page__eyebrow">Fuel evaluation</p>

              <h2 id="industry-evaluation-title">
                Before selecting an industrial biomass fuel.
              </h2>
            </div>

            <p>
              Product specifications are only one part of fuel selection.
              Operating conditions should be reviewed before changing an
              existing industrial fuel.
            </p>
          </div>

          <div className="industries-page__evaluation-list">
            <article className="industries-page__evaluation-item">
              <span>01</span>

              <div>
                <h3>Heat requirement</h3>

                <p>
                  Required operating temperature, daily consumption and heating
                  pattern.
                </p>
              </div>
            </article>

            <article className="industries-page__evaluation-item">
              <span>02</span>

              <div>
                <h3>Equipment setup</h3>

                <p>
                  Boiler, furnace, kiln and fuel-feeding system compatibility.
                </p>
              </div>
            </article>

            <article className="industries-page__evaluation-item">
              <span>03</span>

              <div>
                <h3>Fuel handling</h3>

                <p>
                  Delivery location, unloading method, storage space and
                  moisture protection.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="industries-page__cta">
        <Container width="wide">
          <div className="industries-page__cta-layout">
            <div>
              <p className="industries-page__eyebrow">Application support</p>

              <h2>Not sure which product fits your operation?</h2>
            </div>

            <div className="industries-page__cta-content">
              <p>
                Share your industry, equipment type, fuel requirement and
                delivery location with our team.
              </p>

              <div className="industries-page__cta-actions">
                <Button as={Link} to="/request-a-quote">
                  Discuss your requirement
                </Button>

                <a className="industries-page__phone" href="tel:+9779857839100">
                  Call +977 9857839100
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Industries;
