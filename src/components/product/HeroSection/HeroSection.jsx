import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import heroImage from "../../../assets/images/hero-biomass-briquettes.png";
import { company } from "../../../data/company";
import {
  imageReveal,
  revealIn,
  staggerIn,
  textReveal,
} from "../../../animations";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Button from "../../ui/Button";

import "./HeroSection.css";

function HeroSection() {
  const heroRef = useRef(null);

  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const actionsRef = useRef(null);
  const documentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageReveal(imageRef.current, {
        duration: 1.2,
        scale: 1.06,
        y: 0,
      });

      revealIn(eyebrowRef.current, "fadeUp", {
        duration: 0.7,
        delay: 0.1,
      });

      textReveal(titleRef.current, {
        duration: 1,
        delay: 0.2,
        y: 36,
      });

      revealIn(descriptionRef.current, "fadeUp", {
        duration: 0.8,
        delay: 0.45,
      });

      staggerIn(actionsRef.current?.children, "fadeUp", {
        duration: 0.7,
        delay: 0.6,
        stagger: 0.1,
      });

      revealIn(documentRef.current, "fadeUp", {
        duration: 0.7,
        delay: 0.85,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={heroRef}
      className="home-hero"
      tone="dark"
      aria-labelledby="home-hero-title"
    >
      <div className="home-hero__media" aria-hidden="true">
        <img
          ref={imageRef}
          className="home-hero__image"
          src={heroImage}
          alt=""
        />
      </div>

      <div className="home-hero__overlay" aria-hidden="true" />

      <Container className="home-hero__container" width="wide">
        <div className="home-hero__content flow">
          <p ref={eyebrowRef} className="eyebrow">
            Established {company.establishedYear}
            {" · "}
            {company.location.district}, {company.location.country}
          </p>

          <h1 ref={titleRef} id="home-hero-title" className="display-title">
            From Nepal’s fields to industrial power.
          </h1>

          <p ref={descriptionRef} className="home-hero__description body-lg">
            {company.shortName} produces biomass briquettes for industrial
            heating applications using agricultural and forest residues.
          </p>

          <div ref={actionsRef} className="home-hero__actions cluster">
            <Button as={Link} to="/request-a-quote">
              Request a Quote
            </Button>

            <Button as={Link} to="/products" variant="outline">
              Explore the Product
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HeroSection;
