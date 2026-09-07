import { Link } from "react-router-dom";

import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";

function NotFound() {
  return (
    <Section tone="dark" aria-labelledby="not-found-title">
      <Container width="narrow">
        <div className="flow">
          <p className="eyebrow">Error 404</p>

          <h1 id="not-found-title" className="page-title">
            Page not found.
          </h1>

          <p className="body-lg">
            The page may have moved or the address may be incorrect.
          </p>

          <div className="cluster">
            <Button as={Link} to="/">
              Return Home
            </Button>

            <Button as={Link} to="/request-a-quote" variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default NotFound;
