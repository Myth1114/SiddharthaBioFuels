export const specificationStatus = {
  approved: "approved",
  pending: "pending",
};

export const productSpecifications = [
  {
    id: "product-type",
    label: "Product type",
    value: "Non-carbonized biomass briquettes",
    unit: null,
    status: specificationStatus.approved,
    showOnHomepage: false,
  },
  {
    id: "calorific-value",
    label: "Calorific value",
    value: "3800–4200",
    unit: "kcal/kg",
    status: specificationStatus.approved,
    showOnHomepage: true,
  },
  {
    id: "diameter",
    label: "Diameter",
    value: "50–70",
    unit: "mm",
    status: specificationStatus.approved,
    showOnHomepage: true,
  },
  {
    id: "moisture-content",
    label: "Moisture content",
    value: "8–10",
    unit: "%",
    status: specificationStatus.approved,
    showOnHomepage: true,
  },
  {
    id: "ash-content",
    label: "Ash content",
    value: "8–10",
    unit: "%",
    status: specificationStatus.approved,
    showOnHomepage: true,
  },
  {
    id: "shape",
    label: "Shape",
    value: "Solid cylindrical",
    unit: null,
    status: specificationStatus.approved,
    showOnHomepage: false,
  },
  {
    id: "raw-materials",
    label: "Raw materials",
    value: "Rice husk, sawdust, agro-waste and forest residues",
    unit: null,
    status: specificationStatus.approved,
    showOnHomepage: false,
  },
];

export const technicalDocuments = [
  {
    id: "product-datasheet",
    label: "Product technical datasheet",
    url: null,
    status: specificationStatus.pending,
  },
  {
    id: "laboratory-report",
    label: "Laboratory test report",
    url: null,
    status: specificationStatus.pending,
  },
];

export function getApprovedSpecifications() {
  return productSpecifications.filter(
    (specification) => specification.status === specificationStatus.approved
  );
}

export function getHomepageSpecifications() {
  return productSpecifications.filter(
    (specification) =>
      specification.status === specificationStatus.approved &&
      specification.showOnHomepage
  );
}

export function getSpecificationById(id) {
  return productSpecifications.find((specification) => specification.id === id);
}

export function getPublishedTechnicalDocuments() {
  return technicalDocuments.filter(
    (document) =>
      document.status === specificationStatus.approved && document.url
  );
}

export function formatSpecificationValue(specification) {
  if (!specification?.value) {
    return "Verification pending";
  }

  return specification.unit
    ? `${specification.value} ${specification.unit}`
    : specification.value;
}
