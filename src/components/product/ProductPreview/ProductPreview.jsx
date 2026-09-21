import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import "./ProductPreview.css";

import productImage from "../../../assets/images/product-specimen-briquettes.png";

import {
  formatSpecificationValue,
  getHomepageSpecifications,
} from "../../../data/productSpecifications";

import {
  imageRevealOnScroll,
  revealOnScroll,
  staggerOnScroll,
} from "../../../animations";

import Button from "../../ui/Button";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

function ProductPreview() {
  const homepageSpecifications = getHomepageSpecifications();

  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const contentRef = useRef(null);
  const factsRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRevealOnScroll(visualRef.current, {
        duration: 1,
        scale: 1.04,
      });

      revealOnScroll(contentRef.current, "fadeUp", {
        duration: 0.8,
      });

      staggerOnScroll(factsRef.current?.children, "fadeUp", {
        duration: 0.6,
        stagger: 0.1,
      });

      revealOnScroll(buttonRef.current, "fadeUp", {
        duration: 0.7,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={sectionRef}
      className="product-preview"
      aria-labelledby="product-preview-title"
    >
      <Container width="wide">
        <div className="product-preview__layout">
          <figure ref={visualRef} className="product-preview__visual">
            <img
              src={productImage}
              alt="Representative close-up of solid cylindrical biomass briquettes made from compressed agricultural residue"
            />

            <figcaption className="product-preview__caption">
              Representative product visual
            </figcaption>
          </figure>

          <div ref={contentRef} className="product-preview__content">
            <p className="eyebrow">Our primary product</p>

            <h2 className="section-title" id="product-preview-title">
              Non-carbonized biomass briquettes
            </h2>

            <p className="product-preview__description">
              Agricultural residues transformed into a dense solid fuel for
              compatible industrial heating systems.
            </p>

            <dl ref={factsRef} className="product-preview__facts">
              {homepageSpecifications.map((specification) => (
                <div className="product-preview__fact" key={specification.id}>
                  <dt>{specification.label}</dt>

                  <dd>{formatSpecificationValue(specification)}</dd>
                </div>
              ))}
            </dl>

            <div ref={buttonRef}>
              <Button
                as={Link}
                className="product-preview__button"
                to="/biomass-briquettes"
                size="small"
              >
                Explore the Product
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProductPreview;
