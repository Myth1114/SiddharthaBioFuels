import Container from "../../components/layout/Container";
import ProductIntroduction from "../../components/product/ProductIntroduction/ProductIntroduction";
import ProductExplorer from "../../pages/ProductExplorer/ProductExplorer";

import "./Product.css";

function Product() {
  return (
    <div className="product-page">
      <section
        className="product-page__introduction"
        aria-labelledby="product-page-title"
      >
        <Container width="wide">
          <div className="product-page__intro-bar">
            <p>Product catalogue</p>

            <span>SBF / 06 industrial fuel products</span>
          </div>

          <div className="product-page__intro-layout">
            <div className="product-page__intro-content">
              <p className="product-page__eyebrow">Industrial biomass fuels</p>

              <h1 className="product-page__title" id="product-page-title">
                Biomass fuels for industrial heat.
              </h1>
            </div>

            <div className="product-page__intro-summary">
              <p className="product-page__description">
                Explore briquette and pellet products manufactured from mustard,
                sawdust and groundnut residues for compatible industrial thermal
                applications.
              </p>

              <div
                className="product-page__range"
                aria-label="Available product range"
              >
                <div className="product-page__range-group">
                  <span className="product-page__range-label">Materials</span>

                  <p>Mustard, sawdust and groundnut</p>
                </div>

                <div className="product-page__range-group">
                  <span className="product-page__range-label">Formats</span>

                  <p>Briquettes and pellets</p>
                </div>
              </div>
            </div>
          </div>
          <ProductIntroduction />
        </Container>
      </section>

      <section
        className="product-page__catalogue"
        aria-labelledby="product-catalogue-title"
      >
        <Container width="wide">
          <div className="product-page__catalogue-header">
            <div>
              <p className="product-page__eyebrow">Available products</p>

              <h2
                className="product-page__catalogue-title"
                id="product-catalogue-title"
              >
                Explore the product range.
              </h2>
            </div>

            <p className="product-page__catalogue-instruction">
              Select any product name to review its visual, description and
              available technical specifications.
            </p>
          </div>

          <ProductExplorer />
        </Container>
      </section>
    </div>
  );
}

export default Product;
