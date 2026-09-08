import { Link, useSearchParams } from "react-router-dom";

import { products, formatProductSpecification } from "../../data/products";

import Button from "../../components/ui/Button/Button";

import "./ProductExplorer.css";

function ProductExplorer() {
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedProduct = searchParams.get("product");

  const selectedProduct =
    products.find((product) => product.slug === requestedProduct) ||
    products[0];

  const specifications = Object.values(selectedProduct.specifications || {});

  function handleProductSelect(productSlug) {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.set("product", productSlug);

    setSearchParams(nextParams, {
      replace: true,
    });
  }

  return (
    <div className="product-explorer">
      <div className="product-explorer__index">
        <div className="product-explorer__index-header">
          <p className="product-explorer__eyebrow">Product range</p>

          <p className="product-explorer__index-count">
            {String(products.length).padStart(2, "0")} products
          </p>
        </div>

        <nav
          className="product-explorer__navigation"
          aria-label="Choose a biomass product"
        >
          {products.map((product, index) => {
            const isActive = product.slug === selectedProduct.slug;

            return (
              <button
                key={product.slug}
                className={[
                  "product-explorer__product-button",
                  isActive ? "product-explorer__product-button--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                type="button"
                aria-current={isActive ? "true" : undefined}
                aria-controls="selected-product-details"
                onClick={() => handleProductSelect(product.slug)}
              >
                <span
                  className="product-explorer__product-number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="product-explorer__product-name">
                  {product.name}
                </span>

                <span
                  className="product-explorer__product-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <article
        className="product-explorer__stage"
        id="selected-product-details"
        key={selectedProduct.slug}
      >
        <div className="product-explorer__visual">
          {selectedProduct.image ? (
            <img
              className="product-explorer__image"
              src={selectedProduct.image}
              alt={
                selectedProduct.imageAlt ||
                `Representative view of ${selectedProduct.name}`
              }
            />
          ) : (
            <div className="product-explorer__placeholder">
              <span className="product-explorer__placeholder-material">
                {selectedProduct.material}
              </span>

              <strong className="product-explorer__placeholder-format">
                {selectedProduct.format}
              </strong>

              <span className="product-explorer__placeholder-message">
                Product visual being prepared
              </span>
            </div>
          )}

          <p className="product-explorer__visual-note">
            Representative product visual
          </p>
        </div>

        <div className="product-explorer__details">
          <div className="product-explorer__status">
            <span aria-hidden="true" />
            Available product
          </div>

          <p className="product-explorer__category">
            {selectedProduct.material} biomass / {selectedProduct.format}
          </p>

          <h3 className="product-explorer__title">{selectedProduct.name}</h3>

          <p className="product-explorer__description">
            {selectedProduct.description}
          </p>

          <dl className="product-explorer__specifications">
            {specifications.map((specification) => (
              <div
                className="product-explorer__specification"
                key={specification.label}
              >
                <dt>{specification.label}</dt>

                <dd>{formatProductSpecification(specification)}</dd>
              </div>
            ))}
          </dl>

          <p className="product-explorer__compatibility">
            Equipment compatibility and operating requirements should be
            reviewed before changing industrial fuel.
          </p>

          <div className="product-explorer__actions">
            <Button
              as={Link}
              to={`/request-a-quote?product=${selectedProduct.slug}`}
              size="small"
            >
              Request this product
            </Button>

            <a className="product-explorer__phone" href="tel:+9779857839100">
              Discuss by phone
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductExplorer;
