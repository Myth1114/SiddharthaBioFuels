import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import SEO from "../../components/seo/SEO";
import Button from "../../components/ui/Button";

import { company } from "../../data/company";
import { seo } from "../../data/seo";

import "./Contact.css";

const enquiryPaths = [
  {
    number: "01",
    label: "Product information",
    description:
      "Review the available biomass materials, fuel formats and published product specifications.",
    linkLabel: "Explore products",
    to: "/products",
  },
  {
    number: "02",
    label: "Industrial application",
    description:
      "See the industries and thermal applications where biomass fuel may be considered.",
    linkLabel: "View industries",
    to: "/industries",
  },
  {
    number: "03",
    label: "Fuel requirement",
    description:
      "Share your preferred product, quantity, equipment and delivery location for a focused discussion.",
    linkLabel: "Request a quote",
    to: "/request-a-quote",
  },
];

function Contact() {
  const socialChannels = [
    {
      number: "01",
      label: "WhatsApp",
      identity: company.contact.whatsapp.display,
      description:
        "Start a direct conversation about products, applications or an industrial fuel requirement.",
      href: company.contact.whatsapp.href,
    },
    {
      number: "02",
      label: company.socialMedia.instagram.label,
      identity: company.socialMedia.instagram.handle,
      description:
        "Follow company updates, product information and visual stories from Siddhartha Bio Fuels.",
      href: company.socialMedia.instagram.href,
    },
    {
      number: "03",
      label: company.socialMedia.facebook.label,
      identity: company.socialMedia.facebook.handle,
      description:
        "Connect with the company and follow future announcements through Facebook.",
      href: company.socialMedia.facebook.href,
    },
  ];

  return (
    <>
      <SEO {...seo.contact} />
      <div className="contact-page">
        <section
          className="contact-page__hero"
          aria-labelledby="contact-page-title"
        >
          <Container width="wide">
            <div className="contact-page__hero-bar">
              <p>Contact</p>
              <span>SBF / Communication desk</span>
            </div>

            <div className="contact-page__hero-layout">
              <div className="contact-page__hero-content">
                <p className="contact-page__eyebrow">
                  Contact {company.shortName}
                </p>

                <h1 className="contact-page__title" id="contact-page-title">
                  Start the right conversation with our team.
                </h1>

                <p className="contact-page__introduction">
                  Contact us for product information, industrial application
                  discussions, supply enquiries or general company information.
                </p>
              </div>

              <div
                className="contact-page__hero-details"
                aria-label="Primary contact information"
              >
                <div className="contact-page__hero-detail">
                  <span>Location</span>
                  <p>{company.location.display}</p>
                </div>

                <div className="contact-page__hero-detail">
                  <span>Telephone</span>
                  <a href={company.contact.primaryPhone.href}>
                    {company.contact.primaryPhone.display}
                  </a>
                </div>

                <div className="contact-page__hero-detail">
                  <span>Email</span>
                  <a href={company.contact.email.href}>
                    {company.contact.email.display}
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          className="contact-page__directory"
          aria-labelledby="contact-directory-title"
        >
          <Container width="wide">
            <div className="contact-page__section-heading">
              <div>
                <p className="contact-page__eyebrow">Direct communication</p>

                <h2 id="contact-directory-title">
                  Choose the most convenient way to reach us.
                </h2>
              </div>

              <p>
                Speak directly with the company by telephone, send an email or
                use the listed address for location reference.
              </p>
            </div>

            <div className="contact-page__directory-list">
              <article className="contact-page__directory-item">
                <div className="contact-page__directory-meta">
                  <span>01</span>
                  <p>Call</p>
                </div>

                <div className="contact-page__directory-content">
                  <div>
                    <a href={company.contact.primaryPhone.href}>
                      {company.contact.primaryPhone.display}
                    </a>
                  </div>

                  <p>
                    Call the company for a direct product, supply or industrial
                    application discussion.
                  </p>
                </div>

                <a
                  className="contact-page__directory-action"
                  href={company.contact.primaryPhone.href}
                >
                  Call now
                  <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="contact-page__directory-item">
                <div className="contact-page__directory-meta">
                  <span>02</span>
                  <p>Email</p>
                </div>

                <div className="contact-page__directory-content">
                  <div>
                    <a href={company.contact.email.href}>
                      {company.contact.email.display}
                    </a>
                  </div>

                  <p>
                    Use email when you need to share detailed requirements,
                    documents or other written information.
                  </p>
                </div>

                <a
                  className="contact-page__directory-action"
                  href={company.contact.email.href}
                >
                  Write an email
                  <span aria-hidden="true">→</span>
                </a>
              </article>

              <article className="contact-page__directory-item">
                <div className="contact-page__directory-meta">
                  <span>03</span>
                  <p>Visit</p>
                </div>

                <div className="contact-page__directory-content">
                  <address>
                    <span>{company.legalName}</span>
                    <span>{company.location.address}</span>
                    <span>
                      {company.location.district}, {company.location.country}
                    </span>
                  </address>

                  <p>
                    Use the company address as the current location reference.
                    An official map link will be added after verification.
                  </p>
                </div>

                <span className="contact-page__directory-status">
                  Map verification pending
                </span>
              </article>
            </div>
          </Container>
        </section>

        <section
          className="contact-page__social"
          aria-labelledby="contact-social-title"
        >
          <Container width="wide">
            <div className="contact-page__section-heading">
              <div>
                <p className="contact-page__eyebrow">Social channels</p>

                <h2 id="contact-social-title">
                  Follow the company as our work develops.
                </h2>
              </div>

              <p>
                These are the official social channels currently connected to
                Siddhartha Bio Fuels.
              </p>
            </div>

            <div className="contact-page__social-list">
              {socialChannels.map((channel) => (
                <a
                  className="contact-page__social-item"
                  href={channel.href}
                  key={channel.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-page__social-number">
                    {channel.number}
                  </span>

                  <div className="contact-page__social-identity">
                    <p>{channel.label}</p>
                    <strong>{channel.identity}</strong>
                  </div>

                  <p className="contact-page__social-description">
                    {channel.description}
                  </p>

                  <span
                    className="contact-page__social-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        <section
          className="contact-page__routing"
          aria-labelledby="contact-routing-title"
        >
          <Container width="wide">
            <div className="contact-page__routing-layout">
              <div className="contact-page__routing-introduction">
                <p className="contact-page__eyebrow">Find your next step</p>

                <h2 id="contact-routing-title">
                  Go directly to the information you need.
                </h2>

                <p>
                  Select a route based on whether you are researching products,
                  reviewing industrial applications or preparing a fuel enquiry.
                </p>
              </div>

              <div className="contact-page__routing-list">
                {enquiryPaths.map((path) => (
                  <Link
                    className="contact-page__routing-item"
                    key={path.number}
                    to={path.to}
                  >
                    <span>{path.number}</span>

                    <div>
                      <h3>{path.label}</h3>
                      <p>{path.description}</p>
                    </div>

                    <strong>
                      {path.linkLabel}
                      <span aria-hidden="true">→</span>
                    </strong>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section
          className="contact-page__location"
          aria-labelledby="contact-location-title"
        >
          <Container width="wide">
            <div className="contact-page__location-layout">
              <div className="contact-page__location-visual" aria-hidden="true">
                <span>NEPAL</span>

                <div className="contact-page__location-marker">
                  <i />
                  <strong>RUPANDEHI</strong>
                </div>

                <p>OMSATIYA–4</p>
              </div>

              <div className="contact-page__location-content">
                <p className="contact-page__eyebrow">Company location</p>

                <h2 id="contact-location-title">
                  Located in Omsatiya, Rupandehi.
                </h2>

                <p>
                  {company.legalName} is based at {company.location.display}. An
                  official interactive map will be added after the exact map
                  location has been reviewed.
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

        <section
          className="contact-page__cta"
          aria-labelledby="contact-cta-title"
        >
          <Container width="wide">
            <div className="contact-page__cta-layout">
              <div>
                <p className="contact-page__eyebrow">Industrial fuel enquiry</p>

                <h2 id="contact-cta-title">
                  Have a defined biomass-fuel requirement?
                </h2>
              </div>

              <div className="contact-page__cta-content">
                <p>
                  Share your preferred product, expected quantity, industrial
                  application and delivery location with our team.
                </p>

                <div className="contact-page__cta-actions">
                  <Button as={Link} to="/request-a-quote">
                    Request a Quote
                  </Button>

                  <Link className="contact-page__product-link" to="/products">
                    Explore products
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

export default Contact;
