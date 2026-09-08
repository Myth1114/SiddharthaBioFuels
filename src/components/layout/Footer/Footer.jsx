import { Link } from "react-router-dom";

import "./Footer.css";

import { company } from "../../../data/company";
import { primaryNavigation } from "../../../data/navigation";
import Container from "../Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container width="wide">
        <div className="site-footer__opening">
          <div className="site-footer__identity">
            <Link
              className="site-footer__brand"
              to="/"
              aria-label={`${company.shortName} home`}
            >
              <span>Siddhartha</span>
              <span>Bio Fuels</span>
            </Link>

            <p className="site-footer__tagline">{company.tagline}</p>
          </div>

          <div className="site-footer__origin">
            <span>Industrial biomass fuel</span>
            <span>{company.location.display}</span>
            <span>Established {company.establishedYear}</span>
          </div>
        </div>

        <div className="site-footer__contact-rail">
          <div className="site-footer__contact-item">
            <span className="site-footer__contact-label">Call</span>

            <div className="site-footer__phone-list">
              <a href={company.contact.primaryPhone.href}>
                {company.contact.primaryPhone.display}
              </a>

              <a href={company.contact.secondaryPhone.href}>
                {company.contact.secondaryPhone.display}
              </a>
            </div>
          </div>

          <div className="site-footer__contact-item">
            <span className="site-footer__contact-label">Email</span>

            <a className="site-footer__email" href={company.contact.email.href}>
              {company.contact.email.display}
            </a>
          </div>

          <div className="site-footer__contact-item">
            <span className="site-footer__contact-label">Visit</span>

            <address>{company.location.display}</address>
          </div>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <span className="site-footer__navigation-label">Explore</span>

          <div className="site-footer__navigation-links">
            {primaryNavigation.map((item) => (
              <Link
                className="site-footer__navigation-link"
                to={item.to}
                key={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="site-footer__bottom">
          <p>
            © {currentYear} {company.legalName}
          </p>

          <p>From Nepal’s fields to industrial power.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
