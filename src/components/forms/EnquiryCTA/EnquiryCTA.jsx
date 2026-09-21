import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  revealOnScroll,
  imageRevealOnScroll,
  staggerOnScroll,
} from "../../../animations";
import { Link } from "react-router-dom";

import "./EnquiryCTA.css";

import productImage from "../../../assets/images/product-specimen-briquettes.png";
import Button from "../../ui/Button";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

const requirementDetails = [
  {
    label: "Equipment",
    description: "Boiler, furnace, kiln or other",
  },
  {
    label: "Current fuel",
    description: "Coal, firewood, biomass or other",
  },
  {
    label: "Monthly use",
    description: "Estimated quantity and unit",
  },
  {
    label: "Delivery location",
    description: "District or city",
  },
];

function EnquiryCTA() {
  const panelRef = useRef(null);
  const imageRef = useRef(null);
  const requirementsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(panelRef.current, "fadeUp", {
        duration: 0.8,
      });

      imageRevealOnScroll(imageRef.current, {
        duration: 1,
      });

      staggerOnScroll(requirementsRef.current?.children, "fadeUp", {
        duration: 0.7,
        stagger: 0.1,
      });
    }, panelRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      className="enquiry-cta"
      spacing="compact"
      aria-labelledby="enquiry-cta-title"
    >
      <Container width="wide">
        <div ref={panelRef} className="enquiry-cta__panel">
          <div className="enquiry-cta__media" aria-hidden="true">
            <img ref={imageRef} src={productImage} alt="" />
          </div>

          <div className="enquiry-cta__sheet">
            <div className="enquiry-cta__meta">
              <span>Commercial enquiry</span>
              <span>SBF / RQ-01</span>
            </div>

            <div className="enquiry-cta__body">
              <div className="enquiry-cta__content">
                <p className="eyebrow">Plan your fuel requirement</p>

                <h2 className="section-title" id="enquiry-cta-title">
                  Start with the details of your operation.
                </h2>

                <p className="enquiry-cta__description">
                  Give us a practical overview of your fuel use so we can
                  understand your application and prepare for a useful
                  discussion.
                </p>
              </div>

              <dl ref={requirementsRef} className="enquiry-cta__requirements">
                {requirementDetails.map((detail, index) => (
                  <div className="enquiry-cta__requirement" key={detail.label}>
                    <span className="enquiry-cta__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <dt>{detail.label}</dt>
                      <dd>{detail.description}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="enquiry-cta__footer">
              <p>Omsatiya-4, Rupandehi, Nepal</p>

              <Button
                as={Link}
                className="enquiry-cta__button"
                to="/request-a-quote"
                size="small"
              >
                Start Your Requirement
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default EnquiryCTA;
