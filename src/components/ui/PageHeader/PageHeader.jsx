import { useId } from "react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";

/**
 * Displays the introductory heading area for an internal page.
 *
 * @param {object} props
 * @param {string} props.eyebrow
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {"paper" | "surface" | "dark"} [props.tone="paper"]
 * @param {"default" | "wide" | "narrow"} [props.width="narrow"]
 * @param {React.ReactNode} [props.children]
 */
function PageHeader({
  eyebrow,
  title,
  description = "",
  tone = "paper",
  width = "narrow",
  children,
}) {
  const generatedId = useId();
  const titleId = `page-title-${generatedId.replaceAll(":", "")}`;

  return (
    <Section tone={tone} aria-labelledby={titleId}>
      <Container width={width}>
        <div className="flow">
          <p className="eyebrow">{eyebrow}</p>

          <h1 id={titleId} className="page-title">
            {title}
          </h1>

          {description && <p className="body-lg">{description}</p>}

          {children && <div className="cluster">{children}</div>}
        </div>
      </Container>
    </Section>
  );
}

export default PageHeader;
