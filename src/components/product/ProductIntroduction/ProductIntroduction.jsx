import "./ProductIntroduction.css";

function ProductIntroduction() {
  return (
    <section
      className="product-introduction"
      aria-labelledby="product-introduction-title"
    >
      <div className="product-introduction__heading">
        <p className="product-introduction__eyebrow">
          Understanding the product
        </p>

        <h2
          className="product-introduction__title"
          id="product-introduction-title"
        >
          What are biomass briquettes and pellets?
        </h2>
      </div>

      <div className="product-introduction__content">
        <p className="product-introduction__summary">
          Biomass briquettes and pellets are solid fuels made by converting
          loose agricultural and wood residues into dense, uniform forms. The
          raw material is prepared, its moisture is reduced, and it is
          compressed under pressure to create fuel that is easier to handle,
          store and use in compatible industrial heating equipment.
        </p>

        <ol
          className="product-introduction__process"
          aria-label="General biomass fuel production stages"
        >
          <li>
            <span>01</span>
            Residue preparation
          </li>

          <li>
            <span>02</span>
            Moisture reduction
          </li>

          <li>
            <span>03</span>
            Compression
          </li>

          <li>
            <span>04</span>
            Finished fuel
          </li>
        </ol>

        <div className="product-introduction__formats">
          <article className="product-introduction__format">
            <span className="product-introduction__format-number">01</span>

            <div>
              <h3>Briquettes</h3>

              <p>
                Larger, dense solid fuel pieces produced by compressing prepared
                biomass residue into cylindrical forms for compatible boilers,
                furnaces and thermal applications.
              </p>
            </div>
          </article>

          <article className="product-introduction__format">
            <span className="product-introduction__format-number">02</span>

            <div>
              <h3>Pellets</h3>

              <p>
                Smaller cylindrical fuel pieces produced from prepared biomass
                residue. Their compact and consistent format suits compatible
                industrial fuel-feeding and combustion systems.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProductIntroduction;
