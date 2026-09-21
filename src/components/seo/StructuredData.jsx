const SITE_URL = "https://www.siddharthabiofuels.com.np";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Siddhartha Bio Fuels Pvt. Ltd.",
  alternateName: "Siddhartha Bio Fuels",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  foundingDate: "2025",
  description:
    "Siddhartha Bio Fuels Pvt. Ltd. produces non-carbonized biomass briquettes from agricultural and forest residues for industries in Nepal.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Omsatiya-4",
    addressLocality: "Rupandehi",
    addressCountry: "NP",
  },
  telephone: "+9779857839100",
  email: "siddharthabiofuels@gmail.com",
  sameAs: [
    "https://www.instagram.com/siddharthabiofuelspvt.ltd.07",
    "https://www.facebook.com/profile.php?id=61580746065530",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Siddhartha Bio Fuels",
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default StructuredData;
