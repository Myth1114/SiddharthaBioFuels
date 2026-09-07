import { Link } from "react-router-dom";

import heroImage from "../../../assets/images/hero-biomass-briquettes.png";
import { company } from "../../../data/company";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Button from "../../ui/Button";

import "./HeroSection.css";

function HeroSection() {
  return (
    <Section
      className="home-hero"
      tone="dark"
      aria-labelledby="home-hero-title"
    >
      <div className="home-hero__media" aria-hidden="true">
        <img className="home-hero__image" src={heroImage} alt="" />
      </div>

      <div className="home-hero__overlay" aria-hidden="true" />

      <Container className="home-hero__container" width="wide">
        <div className="home-hero__content flow">
          <p className="eyebrow">
            Established {company.establishedYear}
            {" · "}
            {company.location.district}, {company.location.country}
          </p>

          <h1 id="home-hero-title" className="display-title">
            From Nepal’s fields to industrial power.
          </h1>

          <p className="home-hero__description body-lg">
            {company.shortName} produces biomass briquettes for industrial
            heating applications using agricultural and forest residues.
          </p>

          <div className="home-hero__actions cluster">
            <Button as={Link} to="/request-a-quote">
              Request a Quote
            </Button>

            <Button as={Link} to="/biomass-briquettes" variant="outline">
              Explore the Product
            </Button>
          </div>

          <div className="home-hero__document">
            <Button
              variant="outline"
              disabled
              aria-describedby="specification-status"
            >
              Download Specifications
            </Button>

            <p
              id="specification-status"
              className="home-hero__document-status body-sm"
            >
              Technical data sheet under verification.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
