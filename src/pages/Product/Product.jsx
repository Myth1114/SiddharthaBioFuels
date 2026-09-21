import { useEffect, useRef } from "react";
import gsap from "gsap";

import { revealOnScroll } from "../../animations";

import Container from "../../components/layout/Container";
import ProductIntroduction from "../../components/product/ProductIntroduction/ProductIntroduction";
import SEO from "../../components/seo/SEO";
import { seo } from "../../data/seo";
import ProductExplorer from "../../pages/ProductExplorer/ProductExplorer";

import "./Product.css";

function Product() {
  const introBarRef = useRef(null);
  const introContentRef = useRef(null);
  const introSummaryRef = useRef(null);
  const catalogueHeaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(introBarRef.current, "fadeUp", {
        duration: 0.7,
      });

      revealOnScroll(introContentRef.current, "fadeUp", {
        duration: 0.8,
      });

      revealOnScroll(introSummaryRef.current, "fadeUp", {
        duration: 0.8,
        delay: 0.1,
      });

      revealOnScroll(catalogueHeaderRef.current, "fadeUp", {
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <SEO {...seo.products} />
      <div className="product-page">
        <section
          className="product-page__introduction"
          aria-labelledby="product-page-title"
        >
          <Container width="wide">
            <div ref={introBarRef} className="product-page__intro-bar">
              <p>Product catalogue</p>

              <span>SBF / 06 industrial fuel products</span>
            </div>

            <div className="product-page__intro-layout">
              <div
                ref={introContentRef}
                className="product-page__intro-content"
              >
                <p className="product-page__eyebrow">
                  Industrial biomass fuels
                </p>

                <h1 className="product-page__title" id="product-page-title">
                  Biomass fuels for industrial heat.
                </h1>
              </div>

              <div
                ref={introSummaryRef}
                className="product-page__intro-summary"
              >
                <p className="product-page__description">
                  Explore briquette and pellet products manufactured from
                  mustard, sawdust and groundnut residues for compatible
                  industrial thermal applications.
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
            <div
              ref={catalogueHeaderRef}
              className="product-page__catalogue-header"
            >
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
    </>
  );
}

export default Product;
