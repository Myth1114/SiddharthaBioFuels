import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Button from "../../components/ui/Button";

import { company } from "../../data/company";
import { products } from "../../data/products";
import { industries } from "../../data/industries";

import "./RequestQuote.css";
import SEO from "../../components/seo/SEO";
import { seo } from "../../data/seo";

const initialFormData = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  productId: "",
  quantity: "",
  quantityUnit: "tonnes",
  supplySchedule: "",
  industryId: "",
  equipment: "",
  currentFuel: "",
  deliveryLocation: "",
  requiredDate: "",
  additionalInformation: "",
  confirmation: false,
};

const quantityUnits = [
  {
    value: "kilograms",
    label: "Kilograms",
  },
  {
    value: "tonnes",
    label: "Tonnes",
  },
];

const supplySchedules = [
  {
    value: "one-time",
    label: "One-time requirement",
  },
  {
    value: "weekly",
    label: "Weekly supply",
  },
  {
    value: "monthly",
    label: "Monthly supply",
  },
  {
    value: "continuous",
    label: "Continuous requirement",
  },
  {
    value: "discussion-required",
    label: "To be discussed",
  },
];

function RequestQuote() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const fieldRefs = useRef({});

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === formData.productId) || null,
    [formData.productId]
  );

  const selectedIndustry = useMemo(
    () =>
      industries.find((industry) => industry.id === formData.industryId) ||
      null,
    [formData.industryId]
  );

  const selectedSchedule = useMemo(
    () =>
      supplySchedules.find(
        (schedule) => schedule.value === formData.supplySchedule
      ) || null,
    [formData.supplySchedule]
  );

  function updateField(event) {
    const { name, type, value, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: "",
      }));
    }

    setWhatsappUrl("");
    setStatusMessage("");
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Enter your full name.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Enter a telephone or mobile number.";
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, "");

      if (phoneDigits.length < 7) {
        nextErrors.phone = "Enter a valid telephone or mobile number.";
      }
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.productId) {
      nextErrors.productId = "Select the required biomass product.";
    }

    if (!formData.quantity || Number(formData.quantity) <= 0) {
      nextErrors.quantity = "Enter an estimated quantity greater than zero.";
    }

    if (!formData.supplySchedule) {
      nextErrors.supplySchedule = "Select the expected supply schedule.";
    }

    if (!formData.industryId) {
      nextErrors.industryId = "Select your industry or application.";
    }

    if (!formData.equipment.trim()) {
      nextErrors.equipment =
        "Enter the boiler, furnace, kiln or thermal equipment.";
    }

    if (!formData.deliveryLocation.trim()) {
      nextErrors.deliveryLocation = "Enter the delivery district or city.";
    }

    if (!formData.confirmation) {
      nextErrors.confirmation =
        "Confirm that WhatsApp will open with your requirement.";
    }

    return nextErrors;
  }

  function createRequirementMessage() {
    const messageLines = [
      "NEW BIOMASS FUEL REQUIREMENT",
      "",
      "CUSTOMER DETAILS",
      `Name: ${formData.fullName.trim()}`,
      `Company: ${formData.companyName.trim() || "Not provided"}`,
      `Phone: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim() || "Not provided"}`,
      "",
      "FUEL REQUIREMENT",
      `Product: ${selectedProduct?.name || "Not selected"}`,
      `Estimated quantity: ${formData.quantity} ${formData.quantityUnit}`,
      `Supply schedule: ${selectedSchedule?.label || "Not selected"}`,
      "",
      "OPERATING CONTEXT",
      `Industry: ${selectedIndustry?.name || "Not selected"}`,
      `Equipment: ${formData.equipment.trim()}`,
      `Current fuel: ${formData.currentFuel.trim() || "Not provided"}`,
      "",
      "DELIVERY",
      `Location: ${formData.deliveryLocation.trim()}`,
      `Required date: ${formData.requiredDate || "To be discussed"}`,
      "",
      "ADDITIONAL INFORMATION",
      formData.additionalInformation.trim() || "No additional information",
      "",
      `Submitted through ${company.shortName} website`,
    ];

    return messageLines.join("\n");
  }

  function focusFirstInvalidField(validationErrors) {
    const firstInvalidField = Object.keys(validationErrors)[0];
    const invalidElement = fieldRefs.current[firstInvalidField];

    invalidElement?.focus();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setWhatsappUrl("");
      setStatusMessage(
        "Some required information is missing. Review the highlighted fields."
      );

      window.requestAnimationFrame(() => {
        focusFirstInvalidField(validationErrors);
      });

      return;
    }

    const requirementMessage = createRequirementMessage();

    const generatedWhatsappUrl = `${
      company.contact.whatsapp.href
    }?text=${encodeURIComponent(requirementMessage)}`;

    setErrors({});
    setWhatsappUrl(generatedWhatsappUrl);
    setStatusMessage(
      "WhatsApp has been opened. Review the prepared message and press Send inside WhatsApp."
    );

    window.open(generatedWhatsappUrl, "_blank", "noopener,noreferrer");
  }

  function resetForm() {
    setFormData(initialFormData);
    setErrors({});
    setWhatsappUrl("");
    setStatusMessage("");

    window.requestAnimationFrame(() => {
      fieldRefs.current.fullName?.focus();
    });
  }

  return (
    <>
      <SEO {...seo.requestQuote} />
      <div className="quote-page">
        <section
          className="quote-page__hero"
          aria-labelledby="quote-page-title"
        >
          <Container width="wide">
            <div className="quote-page__hero-bar">
              <p>Request a Quote</p>
              <span>SBF / Industrial enquiry sheet</span>
            </div>

            <div className="quote-page__hero-layout">
              <div className="quote-page__hero-content">
                <p className="quote-page__eyebrow">
                  Industrial fuel requirement
                </p>

                <h1 className="quote-page__title" id="quote-page-title">
                  Build a clear biomass-fuel requirement.
                </h1>
              </div>

              <div className="quote-page__hero-copy">
                <p>
                  Share your preferred product, estimated quantity, industrial
                  application, equipment and delivery location with our team.
                </p>

                <div className="quote-page__privacy-note">
                  <span aria-hidden="true" />

                  <p>
                    The website does not store this information. Your completed
                    requirement will open as a prepared WhatsApp message.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <main className="quote-page__workspace">
          <Container width="wide">
            <div className="quote-page__workspace-layout">
              <aside
                className="quote-page__guide"
                aria-labelledby="quote-guide-title"
              >
                <div className="quote-page__guide-sticky">
                  <p className="quote-page__eyebrow">Requirement guide</p>

                  <h2 id="quote-guide-title">
                    Four sections create one structured enquiry.
                  </h2>

                  <ol className="quote-page__guide-list">
                    <li>
                      <span>01</span>
                      <div>
                        <strong>Contact details</strong>
                        <p>Who should our team speak with?</p>
                      </div>
                    </li>

                    <li>
                      <span>02</span>
                      <div>
                        <strong>Fuel requirement</strong>
                        <p>Which product and approximate quantity?</p>
                      </div>
                    </li>

                    <li>
                      <span>03</span>
                      <div>
                        <strong>Operating context</strong>
                        <p>Where and how will the fuel be used?</p>
                      </div>
                    </li>

                    <li>
                      <span>04</span>
                      <div>
                        <strong>Delivery</strong>
                        <p>Where and when may the supply be required?</p>
                      </div>
                    </li>
                  </ol>

                  <div className="quote-page__guide-help">
                    <p>Prefer to speak directly?</p>

                    <a href={company.contact.primaryPhone.href}>
                      {company.contact.primaryPhone.display}
                    </a>
                  </div>
                </div>
              </aside>

              <form
                className="quote-page__form"
                noValidate
                onSubmit={handleSubmit}
              >
                <section
                  className="quote-page__form-section"
                  aria-labelledby="quote-contact-title"
                >
                  <div className="quote-page__form-section-heading">
                    <span>01</span>

                    <div>
                      <p>Contact details</p>
                      <h2 id="quote-contact-title">
                        Tell us who we should contact.
                      </h2>
                    </div>
                  </div>

                  <div className="quote-page__field-grid">
                    <div className="quote-page__field">
                      <label htmlFor="quote-full-name">
                        Full name
                        <span aria-hidden="true">*</span>
                      </label>

                      <input
                        ref={(element) => {
                          fieldRefs.current.fullName = element;
                        }}
                        id="quote-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? "quote-full-name-error" : undefined
                        }
                        onChange={updateField}
                      />

                      {errors.fullName && (
                        <p
                          className="quote-page__field-error"
                          id="quote-full-name-error"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-company-name">
                        Company name
                        <small>Optional</small>
                      </label>

                      <input
                        id="quote-company-name"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={formData.companyName}
                        onChange={updateField}
                      />
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-phone">
                        Telephone or mobile
                        <span aria-hidden="true">*</span>
                      </label>

                      <input
                        ref={(element) => {
                          fieldRefs.current.phone = element;
                        }}
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "quote-phone-error" : undefined
                        }
                        onChange={updateField}
                      />

                      {errors.phone && (
                        <p
                          className="quote-page__field-error"
                          id="quote-phone-error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-email">
                        Email address
                        <small>Optional</small>
                      </label>

                      <input
                        ref={(element) => {
                          fieldRefs.current.email = element;
                        }}
                        id="quote-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "quote-email-error" : undefined
                        }
                        onChange={updateField}
                      />

                      {errors.email && (
                        <p
                          className="quote-page__field-error"
                          id="quote-email-error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </section>

                <section
                  className="quote-page__form-section"
                  aria-labelledby="quote-fuel-title"
                >
                  <div className="quote-page__form-section-heading">
                    <span>02</span>

                    <div>
                      <p>Fuel requirement</p>
                      <h2 id="quote-fuel-title">
                        Describe the required product and volume.
                      </h2>
                    </div>
                  </div>

                  <div className="quote-page__field-grid">
                    <div className="quote-page__field quote-page__field--wide">
                      <label htmlFor="quote-product">
                        Product
                        <span aria-hidden="true">*</span>
                      </label>

                      <select
                        ref={(element) => {
                          fieldRefs.current.productId = element;
                        }}
                        id="quote-product"
                        name="productId"
                        value={formData.productId}
                        aria-invalid={Boolean(errors.productId)}
                        aria-describedby={
                          errors.productId ? "quote-product-error" : undefined
                        }
                        onChange={updateField}
                      >
                        <option value="">Select a biomass product</option>

                        {products.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.name}
                          </option>
                        ))}
                      </select>

                      {errors.productId && (
                        <p
                          className="quote-page__field-error"
                          id="quote-product-error"
                        >
                          {errors.productId}
                        </p>
                      )}
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-quantity">
                        Estimated quantity
                        <span aria-hidden="true">*</span>
                      </label>

                      <input
                        ref={(element) => {
                          fieldRefs.current.quantity = element;
                        }}
                        id="quote-quantity"
                        name="quantity"
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="any"
                        value={formData.quantity}
                        aria-invalid={Boolean(errors.quantity)}
                        aria-describedby={
                          errors.quantity ? "quote-quantity-error" : undefined
                        }
                        onChange={updateField}
                      />

                      {errors.quantity && (
                        <p
                          className="quote-page__field-error"
                          id="quote-quantity-error"
                        >
                          {errors.quantity}
                        </p>
                      )}
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-quantity-unit">Quantity unit</label>

                      <select
                        id="quote-quantity-unit"
                        name="quantityUnit"
                        value={formData.quantityUnit}
                        onChange={updateField}
                      >
                        {quantityUnits.map((unit) => (
                          <option key={unit.value} value={unit.value}>
                            {unit.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="quote-page__field quote-page__field--wide">
                      <label htmlFor="quote-supply-schedule">
                        Expected supply schedule
                        <span aria-hidden="true">*</span>
                      </label>

                      <select
                        ref={(element) => {
                          fieldRefs.current.supplySchedule = element;
                        }}
                        id="quote-supply-schedule"
                        name="supplySchedule"
                        value={formData.supplySchedule}
                        aria-invalid={Boolean(errors.supplySchedule)}
                        aria-describedby={
                          errors.supplySchedule
                            ? "quote-supply-schedule-error"
                            : undefined
                        }
                        onChange={updateField}
                      >
                        <option value="">Select a supply schedule</option>

                        {supplySchedules.map((schedule) => (
                          <option key={schedule.value} value={schedule.value}>
                            {schedule.label}
                          </option>
                        ))}
                      </select>

                      {errors.supplySchedule && (
                        <p
                          className="quote-page__field-error"
                          id="quote-supply-schedule-error"
                        >
                          {errors.supplySchedule}
                        </p>
                      )}
                    </div>
                  </div>
                </section>

                <section
                  className="quote-page__form-section"
                  aria-labelledby="quote-operation-title"
                >
                  <div className="quote-page__form-section-heading">
                    <span>03</span>

                    <div>
                      <p>Operating context</p>
                      <h2 id="quote-operation-title">
                        Explain where the fuel may be used.
                      </h2>
                    </div>
                  </div>

                  <div className="quote-page__field-grid">
                    <div className="quote-page__field quote-page__field--wide">
                      <label htmlFor="quote-industry">
                        Industry or application
                        <span aria-hidden="true">*</span>
                      </label>

                      <select
                        ref={(element) => {
                          fieldRefs.current.industryId = element;
                        }}
                        id="quote-industry"
                        name="industryId"
                        value={formData.industryId}
                        aria-invalid={Boolean(errors.industryId)}
                        aria-describedby={
                          errors.industryId ? "quote-industry-error" : undefined
                        }
                        onChange={updateField}
                      >
                        <option value="">Select an industry</option>

                        {industries.map((industry) => (
                          <option key={industry.id} value={industry.id}>
                            {industry.name}
                          </option>
                        ))}
                      </select>

                      {errors.industryId && (
                        <p
                          className="quote-page__field-error"
                          id="quote-industry-error"
                        >
                          {errors.industryId}
                        </p>
                      )}
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-equipment">
                        Heating equipment
                        <span aria-hidden="true">*</span>
                      </label>

                      <input
                        ref={(element) => {
                          fieldRefs.current.equipment = element;
                        }}
                        id="quote-equipment"
                        name="equipment"
                        type="text"
                        placeholder="Boiler, furnace, kiln..."
                        value={formData.equipment}
                        aria-invalid={Boolean(errors.equipment)}
                        aria-describedby={
                          errors.equipment ? "quote-equipment-error" : undefined
                        }
                        onChange={updateField}
                      />

                      {errors.equipment && (
                        <p
                          className="quote-page__field-error"
                          id="quote-equipment-error"
                        >
                          {errors.equipment}
                        </p>
                      )}
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-current-fuel">
                        Current fuel
                        <small>Optional</small>
                      </label>

                      <input
                        id="quote-current-fuel"
                        name="currentFuel"
                        type="text"
                        placeholder="Coal, firewood, LPG..."
                        value={formData.currentFuel}
                        onChange={updateField}
                      />
                    </div>
                  </div>
                </section>

                <section
                  className="quote-page__form-section"
                  aria-labelledby="quote-delivery-title"
                >
                  <div className="quote-page__form-section-heading">
                    <span>04</span>

                    <div>
                      <p>Delivery</p>
                      <h2 id="quote-delivery-title">
                        Add the expected destination and timing.
                      </h2>
                    </div>
                  </div>

                  <div className="quote-page__field-grid">
                    <div className="quote-page__field">
                      <label htmlFor="quote-delivery-location">
                        Delivery district or city
                        <span aria-hidden="true">*</span>
                      </label>

                      <input
                        ref={(element) => {
                          fieldRefs.current.deliveryLocation = element;
                        }}
                        id="quote-delivery-location"
                        name="deliveryLocation"
                        type="text"
                        autoComplete="address-level2"
                        value={formData.deliveryLocation}
                        aria-invalid={Boolean(errors.deliveryLocation)}
                        aria-describedby={
                          errors.deliveryLocation
                            ? "quote-delivery-location-error"
                            : undefined
                        }
                        onChange={updateField}
                      />

                      {errors.deliveryLocation && (
                        <p
                          className="quote-page__field-error"
                          id="quote-delivery-location-error"
                        >
                          {errors.deliveryLocation}
                        </p>
                      )}
                    </div>

                    <div className="quote-page__field">
                      <label htmlFor="quote-required-date">
                        Required date
                        <small>Optional</small>
                      </label>

                      <input
                        id="quote-required-date"
                        name="requiredDate"
                        type="date"
                        value={formData.requiredDate}
                        onChange={updateField}
                      />
                    </div>

                    <div className="quote-page__field quote-page__field--wide">
                      <label htmlFor="quote-additional-information">
                        Additional information
                        <small>Optional</small>
                      </label>

                      <textarea
                        id="quote-additional-information"
                        name="additionalInformation"
                        rows="5"
                        placeholder="Add storage, equipment, delivery or other requirement details."
                        value={formData.additionalInformation}
                        onChange={updateField}
                      />
                    </div>
                  </div>
                </section>

                <section
                  className="quote-page__summary"
                  aria-labelledby="quote-summary-title"
                >
                  <div className="quote-page__summary-heading">
                    <div>
                      <p className="quote-page__eyebrow">Requirement summary</p>

                      <h2 id="quote-summary-title">
                        Review before opening WhatsApp.
                      </h2>
                    </div>

                    <span>05</span>
                  </div>

                  <dl className="quote-page__summary-list">
                    <div>
                      <dt>Customer</dt>
                      <dd>{formData.fullName || "Not entered"}</dd>
                    </div>

                    <div>
                      <dt>Product</dt>
                      <dd>{selectedProduct?.name || "Not selected"}</dd>
                    </div>

                    <div>
                      <dt>Quantity</dt>
                      <dd>
                        {formData.quantity
                          ? `${formData.quantity} ${formData.quantityUnit}`
                          : "Not entered"}
                      </dd>
                    </div>

                    <div>
                      <dt>Industry</dt>
                      <dd>{selectedIndustry?.name || "Not selected"}</dd>
                    </div>

                    <div>
                      <dt>Equipment</dt>
                      <dd>{formData.equipment || "Not entered"}</dd>
                    </div>

                    <div>
                      <dt>Delivery</dt>
                      <dd>{formData.deliveryLocation || "Not entered"}</dd>
                    </div>
                  </dl>

                  <div className="quote-page__confirmation">
                    <input
                      ref={(element) => {
                        fieldRefs.current.confirmation = element;
                      }}
                      id="quote-confirmation"
                      name="confirmation"
                      type="checkbox"
                      checked={formData.confirmation}
                      aria-invalid={Boolean(errors.confirmation)}
                      aria-describedby={
                        errors.confirmation
                          ? "quote-confirmation-error"
                          : undefined
                      }
                      onChange={updateField}
                    />

                    <label htmlFor="quote-confirmation">
                      I understand that clicking the button will open WhatsApp
                      with a prepared message. I must review and send the
                      message inside WhatsApp.
                    </label>
                  </div>

                  {errors.confirmation && (
                    <p
                      className="quote-page__field-error"
                      id="quote-confirmation-error"
                    >
                      {errors.confirmation}
                    </p>
                  )}

                  {statusMessage && (
                    <div
                      className={[
                        "quote-page__status",
                        whatsappUrl ? "quote-page__status--success" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      role="status"
                    >
                      <span aria-hidden="true" />
                      <p>{statusMessage}</p>
                    </div>
                  )}

                  <div className="quote-page__form-actions">
                    <Button type="submit">Send Requirement on WhatsApp</Button>

                    <button
                      className="quote-page__reset-button"
                      type="button"
                      onClick={resetForm}
                    >
                      Clear form
                    </button>
                  </div>

                  {whatsappUrl && (
                    <a
                      className="quote-page__manual-link"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp did not open? Open the prepared message
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </section>
              </form>
            </div>

            <div className="quote-page__support">
              <p>Need product information before preparing your requirement?</p>

              <Link to="/products">
                Explore all products
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
}

export default RequestQuote;
