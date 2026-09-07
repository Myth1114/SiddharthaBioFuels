import { Link } from "react-router-dom";

import PageHeader from "../../components/ui/PageHeader";
import Button from "../../components/ui/Button";

function Product() {
  return (
    <PageHeader
      eyebrow="Our product"
      title="Biomass briquettes."
      description="Compressed biomass fuel developed for industrial heating applications. Product compatibility must be confirmed against each buyer’s equipment and operating requirements."
    >
      <Button as={Link} to="/request-a-quote">
        Request a Quote
      </Button>

      <Button variant="outline" disabled>
        Specifications Pending
      </Button>
    </PageHeader>
  );
}

export default Product;
