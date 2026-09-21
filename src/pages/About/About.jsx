import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import SEO from "../../components/seo/SEO";
import Button from "../../components/ui/Button";

import { company } from "../../data/company";
import { seo } from "../../data/seo";

import "./About.css";

const companyFocus = [
  {
    number: "01",
    label: "Material",
    title: "Agricultural and forest residues",
    description:
      "Locally available biomass residues form the material foundation of the company’s industrial-fuel work.",
  },
  {
    number: "02",
    label: "Product",
    title: "Biomass briquettes and pellets",
    description:
      "Prepared biomass is converted into dense fuel forms designed for practical handling, storage and industrial use.",
  },
  {
    number: "03",
    label: "Application",
    title: "Compatible industrial heating",
    description:
      "The finished fuel is intended for suitable boilers, furnaces, kilns and related thermal applications.",
  },
];

const valueDescriptions = {
  Sustainability:
    "Use biomass resources responsibly and support the productive use of agricultural and forest residues.",

  Innovation:
    "Continue improving how biomass fuel is prepared, communicated and supplied for industrial applications.",

  Trust:
    "Provide clear information, communicate limitations honestly and avoid unsupported technical claims.",

  Impact:
    "Contribute to practical renewable-energy adoption and the local use of available biomass resources.",
};

function About() {
  return (
    <>
      <SEO {...seo.about} />
      <div className="about-page">
        <section
          className="about-page__hero"
          aria-labelledby="about-page-title"
        >
          <Container width="wide">
            <div className="about-page__hero-bar">
              <p>About the company</p>
              <span>SBF / Company profile</span>
            </div>

            <div className="about-page__hero-layout">
              <div className="about-page__hero-content">
                <p className="about-page__eyebrow">{company.legalName}</p>

                <h1 className="about-page__title" id="about-page-title">
                  A new biomass-fuel company built around Nepal’s available
                  resources.
                </h1>

                <p className="about-page__introduction">
                  {company.shortName} is a renewable-energy company based in{" "}
                  {company.location.district}, Nepal, focused on developing
                  practical biomass-fuel alternatives for compatible industrial
                  heating applications.
                </p>
              </div>

              <dl
                className="about-page__register"
                aria-label="Company information"
              >
                <div className="about-page__register-row">
                  <dt>Company</dt>
                  <dd>{company.legalName}</dd>
                </div>

                <div className="about-page__register-row">
                  <dt>Established</dt>
                  <dd>{company.establishedYear}</dd>
                </div>

                <div className="about-page__register-row">
                  <dt>Location</dt>
                  <dd>{company.location.display}</dd>
                </div>

                <div className="about-page__register-row">
                  <dt>Primary focus</dt>
                  <dd>{company.product.primary}</dd>
                </div>
              </dl>
            </div>
          </Container>
        </section>

        <section
          className="about-page__beginning"
          aria-labelledby="about-beginning-title"
        >
          <Container width="wide">
            <div className="about-page__beginning-layout">
              <div className="about-page__beginning-heading">
                <p className="about-page__eyebrow">Our beginning</p>

                <h2 id="about-beginning-title">
                  Turning available biomass into a practical industrial
                  resource.
                </h2>
              </div>

              <div className="about-page__beginning-copy">
                <p>
                  Siddhartha Bio Fuels was established in{" "}
                  {company.establishedYear} with a focus on the productive use
                  of agricultural and forest residues. Materials that may
                  otherwise remain underused can be prepared and formed into
                  dense biomass fuel for suitable industrial heating systems.
                </p>

                <p>
                  As a newly established company, our direction is
                  straightforward: develop dependable biomass-fuel products,
                  communicate their applications clearly and work with
                  industries to understand their operating requirements before
                  recommending a fuel option.
                </p>

                <div className="about-page__beginning-note">
                  <span aria-hidden="true" />

                  <p>
                    Product compatibility depends on the equipment, operating
                    conditions and fuel-handling requirements of each industrial
                    facility.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          className="about-page__focus"
          aria-labelledby="about-focus-title"
        >
          <Container width="wide">
            <div className="about-page__section-heading">
              <div>
                <p className="about-page__eyebrow">Current focus</p>

                <h2 id="about-focus-title">
                  Material. Product. Industrial application.
                </h2>
              </div>

              <p>
                Our work connects locally available biomass resources with
                practical fuel forms for compatible industrial thermal systems.
              </p>
            </div>

            <div className="about-page__focus-sequence">
              {companyFocus.map((item) => (
                <article className="about-page__focus-item" key={item.number}>
                  <div className="about-page__focus-meta">
                    <span>{item.number}</span>
                    <p>{item.label}</p>
                  </div>

                  <div className="about-page__focus-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <span
                    className="about-page__focus-marker"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>

            <div className="about-page__focus-link">
              <Link to="/products">
                Explore our products
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Container>
        </section>

        <section
          className="about-page__direction"
          aria-labelledby="about-direction-title"
        >
          <Container width="wide">
            <div className="about-page__vision">
              <div className="about-page__vision-index">
                <span>01</span>
                <p>Vision</p>
              </div>

              <blockquote id="about-direction-title">
                “{company.profile.vision}”
              </blockquote>
            </div>

            <div className="about-page__mission">
              <div className="about-page__mission-heading">
                <span>02</span>

                <div>
                  <p className="about-page__eyebrow">Mission</p>
                  <h2>How we intend to move forward.</h2>
                </div>
              </div>

              <ol className="about-page__mission-list">
                {company.profile.mission.map((missionItem, index) => (
                  <li key={missionItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{missionItem}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <section
          className="about-page__principles"
          aria-labelledby="about-principles-title"
        >
          <Container width="wide">
            <div className="about-page__section-heading">
              <div>
                <p className="about-page__eyebrow">Company principles</p>

                <h2 id="about-principles-title">
                  The standards guiding our decisions.
                </h2>
              </div>

              <p>
                These principles define how the company intends to develop its
                products, information and industrial relationships.
              </p>
            </div>

            <div className="about-page__principles-list">
              {company.profile.values.map((value, index) => (
                <article className="about-page__principle" key={value}>
                  <span className="about-page__principle-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{value}</h3>

                  <p>{valueDescriptions[value]}</p>

                  <span
                    className="about-page__principle-line"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="about-page__location"
          aria-labelledby="about-location-title"
        >
          <Container width="wide">
            <div className="about-page__location-layout">
              <div className="about-page__location-code" aria-hidden="true">
                <span>NP</span>
                <strong>04</strong>
              </div>

              <div className="about-page__location-content">
                <p className="about-page__eyebrow">Local roots</p>

                <h2 id="about-location-title">
                  Based in Rupandehi, connected to Nepal’s industrial future.
                </h2>

                <p>
                  Siddhartha Bio Fuels operates from {company.location.display}.
                  The company’s location places it close to agricultural
                  activity and industrial markets in southern Nepal.
                </p>

                <address>
                  <span>{company.legalName}</span>
                  <span>{company.location.address}</span>
                  <span>
                    {company.location.district}, {company.location.country}
                  </span>
                </address>
              </div>
            </div>
          </Container>
        </section>

        <section className="about-page__cta" aria-labelledby="about-cta-title">
          <Container width="wide">
            <div className="about-page__cta-layout">
              <div>
                <p className="about-page__eyebrow">Industrial fuel enquiry</p>

                <h2 id="about-cta-title">
                  Discuss your biomass-fuel requirement with our team.
                </h2>
              </div>

              <div className="about-page__cta-content">
                <p>
                  Tell us about your industry, heating equipment, preferred
                  product, estimated quantity and delivery location.
                </p>

                <div className="about-page__cta-actions">
                  <Button as={Link} to="/request-a-quote">
                    Request a Quote
                  </Button>

                  <Link className="about-page__contact-link" to="/contact">
                    Contact the company
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

export default About;
