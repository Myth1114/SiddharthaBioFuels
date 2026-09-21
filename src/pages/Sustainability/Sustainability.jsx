import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import SEO from "../../components/seo/SEO";
import Button from "../../components/ui/Button";

import { company } from "../../data/company";
import { seo } from "../../data/seo";

import "./Sustainability.css";

const resourcePath = [
  {
    number: "01",
    label: "Available material",
    title: "Agricultural and wood residues",
    description:
      "Mustard residue, sawdust, groundnut residue and other suitable biomass materials can become useful fuel inputs.",
  },
  {
    number: "02",
    label: "Prepared resource",
    title: "Material prepared for densification",
    description:
      "Suitable biomass is prepared so that it can be converted into a denser and more manageable fuel form.",
  },
  {
    number: "03",
    label: "Dense fuel form",
    title: "Briquettes and pellets",
    description:
      "Prepared material is formed into biomass briquettes or pellets for practical handling, storage and supply.",
  },
  {
    number: "04",
    label: "Industrial use",
    title: "Compatible thermal applications",
    description:
      "The finished fuel may be considered for suitable boilers, furnaces, kilns and related industrial heating systems.",
  },
];

const sustainabilityPrinciples = [
  {
    number: "01",
    title: "Productive residue use",
    description:
      "Agricultural and wood residues can be treated as useful material resources instead of being considered only as unwanted by-products.",
  },
  {
    number: "02",
    title: "Local resource utilization",
    description:
      "The company’s direction supports the use of biomass resources available within Nepal for compatible industrial energy requirements.",
  },
  {
    number: "03",
    title: "Industrial fuel alternatives",
    description:
      "Biomass fuel can provide an alternative option for industries evaluating their dependence on conventional fossil fuels.",
  },
  {
    number: "04",
    title: "Responsible implementation",
    description:
      "Product selection, storage, handling and equipment compatibility must be considered before changing an industrial fuel system.",
  },
];

const operatingRequirements = [
  {
    number: "01",
    title: "Equipment compatibility",
    description:
      "Boilers, furnaces, kilns and feeding arrangements must be reviewed for the intended biomass-fuel format.",
  },
  {
    number: "02",
    title: "Moisture protection",
    description:
      "Biomass fuel should be protected from rain, ground moisture and other conditions that may affect its performance.",
  },
  {
    number: "03",
    title: "Storage and handling",
    description:
      "The available storage area, handling process and expected fuel volume should be considered before supply begins.",
  },
  {
    number: "04",
    title: "Operating practice",
    description:
      "Fuel-feeding, combustion control and routine equipment operation influence the practical use of biomass fuel.",
  },
];

const currentlyCommunicated = [
  "The company works with biomass briquette and pellet fuel formats.",
  "The product range uses mustard, sawdust and groundnut biomass materials.",
  "The products are intended for compatible industrial thermal applications.",
  "Application suitability should be discussed for the specific equipment and operating requirement.",
];

const evidenceRequired = [
  "Quantified greenhouse-gas or emission reductions",
  "Carbon-neutral or net-zero claims",
  "Guaranteed efficiency improvements",
  "Exact fossil-fuel replacement ratios",
  "Guaranteed operating-cost savings",
  "Full lifecycle environmental-impact figures",
];

function Sustainability() {
  return (
    <>
      <SEO {...seo.sustainability} />
      <div className="sustainability-page">
        <section
          className="sustainability-page__hero"
          aria-labelledby="sustainability-page-title"
        >
          <Container width="wide">
            <div className="sustainability-page__hero-bar">
              <p>Sustainability</p>
              <span>SBF / Resource responsibility</span>
            </div>

            <div className="sustainability-page__hero-layout">
              <div className="sustainability-page__hero-content">
                <p className="sustainability-page__eyebrow">
                  Biomass with a practical purpose
                </p>

                <h1
                  className="sustainability-page__title"
                  id="sustainability-page-title"
                >
                  Using available biomass resources more purposefully.
                </h1>
              </div>

              <div className="sustainability-page__hero-copy">
                <p>
                  {company.shortName} supports the productive use of
                  agricultural and wood residues by preparing them as dense fuel
                  forms for compatible industrial heating applications.
                </p>

                <p className="sustainability-page__hero-note">
                  Sustainability outcomes depend on the material source,
                  production process, transportation, equipment and operating
                  conditions. Quantified environmental claims require supporting
                  evidence.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section
          className="sustainability-page__pathway"
          aria-labelledby="resource-pathway-title"
        >
          <Container width="wide">
            <div className="sustainability-page__section-heading">
              <div>
                <p className="sustainability-page__eyebrow">Resource pathway</p>

                <h2 id="resource-pathway-title">
                  From available residue to usable industrial fuel.
                </h2>
              </div>

              <p>
                This pathway explains the company’s sustainability direction. It
                does not represent a quantified lifecycle or
                environmental-impact assessment.
              </p>
            </div>

            <div className="sustainability-page__pathway-layout">
              <div
                className="sustainability-page__pathway-visual"
                aria-hidden="true"
              >
                <div className="sustainability-page__orbit sustainability-page__orbit--outer" />
                <div className="sustainability-page__orbit sustainability-page__orbit--inner" />

                <div className="sustainability-page__pathway-center">
                  <span>RESOURCE</span>
                  <strong>TO</strong>
                  <span>INDUSTRIAL USE</span>
                </div>

                <span className="sustainability-page__visual-point sustainability-page__visual-point--one">
                  01
                </span>

                <span className="sustainability-page__visual-point sustainability-page__visual-point--two">
                  02
                </span>

                <span className="sustainability-page__visual-point sustainability-page__visual-point--three">
                  03
                </span>

                <span className="sustainability-page__visual-point sustainability-page__visual-point--four">
                  04
                </span>
              </div>

              <ol className="sustainability-page__pathway-list">
                {resourcePath.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>

                    <div className="sustainability-page__pathway-content">
                      <p>{step.label}</p>
                      <h3>{step.title}</h3>
                      <div>{step.description}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <section
          className="sustainability-page__principles"
          aria-labelledby="sustainability-principles-title"
        >
          <Container width="wide">
            <div className="sustainability-page__section-heading">
              <div>
                <p className="sustainability-page__eyebrow">
                  Working principles
                </p>

                <h2 id="sustainability-principles-title">
                  Sustainability must remain practical and responsible.
                </h2>
              </div>

              <p>
                The company’s approach is based on resource use, industrial
                suitability and transparent communication.
              </p>
            </div>

            <div className="sustainability-page__principles-list">
              {sustainabilityPrinciples.map((principle) => (
                <article
                  className="sustainability-page__principle"
                  key={principle.number}
                >
                  <span>{principle.number}</span>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>

                  <i aria-hidden="true" />
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="sustainability-page__operation"
          aria-labelledby="responsible-operation-title"
        >
          <Container width="wide">
            <div className="sustainability-page__operation-layout">
              <div className="sustainability-page__operation-introduction">
                <p className="sustainability-page__eyebrow">Responsible use</p>

                <h2 id="responsible-operation-title">
                  A fuel change involves more than selecting a product.
                </h2>

                <p>
                  Appropriate biomass-fuel use depends on the complete operating
                  context. Equipment, handling, storage and daily operating
                  practice should be reviewed together.
                </p>
              </div>

              <div className="sustainability-page__operation-list">
                {operatingRequirements.map((requirement) => (
                  <article key={requirement.number}>
                    <span>{requirement.number}</span>

                    <div>
                      <h3>{requirement.title}</h3>
                      <p>{requirement.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section
          className="sustainability-page__claims"
          aria-labelledby="responsible-claims-title"
        >
          <Container width="wide">
            <div className="sustainability-page__claims-heading">
              <div>
                <p className="sustainability-page__eyebrow">
                  Responsible communication
                </p>

                <h2 id="responsible-claims-title">
                  Clear information matters as much as environmental intention.
                </h2>
              </div>

              <p>
                Siddhartha Bio Fuels will distinguish between general product
                information and environmental claims that require measurement,
                testing or independent verification.
              </p>
            </div>

            <div className="sustainability-page__claims-register">
              <article className="sustainability-page__claim-column">
                <div className="sustainability-page__claim-status">
                  <span aria-hidden="true" />
                  <p>Currently communicated</p>
                </div>

                <h3>Information supported by the current product direction.</h3>

                <ul>
                  {currentlyCommunicated.map((claim) => (
                    <li key={claim}>
                      <span aria-hidden="true">→</span>
                      <p>{claim}</p>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="sustainability-page__claim-column">
                <div className="sustainability-page__claim-status sustainability-page__claim-status--pending">
                  <span aria-hidden="true" />
                  <p>Evidence required</p>
                </div>

                <h3>
                  Claims that will not be published without supporting evidence.
                </h3>

                <ul>
                  {evidenceRequired.map((claim) => (
                    <li key={claim}>
                      <span aria-hidden="true">→</span>
                      <p>{claim}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="sustainability-page__claims-note">
              <span>POLICY</span>

              <p>
                Where evidence is unavailable or awaiting review, the website
                will use clear provisional language instead of presenting an
                assumption as a verified environmental result.
              </p>
            </div>
          </Container>
        </section>

        <section
          className="sustainability-page__cta"
          aria-labelledby="sustainability-cta-title"
        >
          <Container width="wide">
            <div className="sustainability-page__cta-layout">
              <div>
                <p className="sustainability-page__eyebrow">
                  Consider biomass fuel
                </p>

                <h2 id="sustainability-cta-title">
                  Review the product range and discuss your application.
                </h2>
              </div>

              <div className="sustainability-page__cta-content">
                <p>
                  Product selection should consider your equipment, operating
                  requirement, expected quantity and delivery location.
                </p>

                <div className="sustainability-page__cta-actions">
                  <Button as={Link} to="/products">
                    Explore Products
                  </Button>

                  <Link
                    className="sustainability-page__requirement-link"
                    to="/request-a-quote"
                  >
                    Discuss your requirement
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Sustainability;
