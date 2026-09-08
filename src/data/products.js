import mustardBriquettesImage from "../assets/images/products/mustard-briquettes.png";
import mustardPelletsImage from "../assets/images/products/mustard-pellets.png";
import sawdustBriquettesImage from "../assets/images/products/sawdust-briquettes.png";
import sawdustPelletsImage from "../assets/images/products/sawdust-pellets.png";
import groundnutBriquettesImage from "../assets/images/products/groundnut-briquettes.png";
import groundnutPelletsImage from "../assets/images/products/groundnut-pellets.png";

export const productMaterials = [
  {
    id: "mustard",
    label: "Mustard",
  },
  {
    id: "sawdust",
    label: "Sawdust",
  },
  {
    id: "groundnut",
    label: "Groundnut",
  },
];

export const productFormats = [
  {
    id: "briquette",
    label: "Briquette",
  },
  {
    id: "pellet",
    label: "Pellet",
  },
];

export const products = [
  {
    id: "mustard-briquettes",
    slug: "mustard-briquettes",
    name: "Mustard Briquettes",
    material: "mustard",
    format: "briquette",
    availability: "available",

    description:
      "Mustard agricultural residue compressed into solid briquette form for compatible industrial boilers, furnaces and thermal applications.",

    specifications: {
      nominalSize: {
        label: "Nominal size",
        minimum: 70,
        maximum: 90,
        unit: "mm",
      },

      gcv: {
        label: "GCV",
        minimum: 3300,
        maximum: 3700,
        unit: "kcal/kg",
      },

      ashContent: {
        label: "Ash content",
        minimum: 10,
        maximum: 15,
        unit: "%",
      },

      moistureContent: {
        label: "Moisture content",
        minimum: 10,
        maximum: 15,
        unit: "%",
      },
    },

    image: mustardBriquettesImage,

    imageAlt:
      "Representative solid cylindrical mustard biomass briquettes with agricultural residue",

    documents: [],
  },

  {
    id: "mustard-pellets",
    slug: "mustard-pellets",
    name: "Mustard Pellets",
    material: "mustard",
    format: "pellet",
    availability: "available",

    description:
      "Mustard agricultural residue processed into compact pellet form for compatible automated and industrial fuel-feeding systems.",

    specifications: {
      nominalSize: {
        label: "Nominal size",
        minimum: 12,
        maximum: 20,
        unit: "mm",
      },

      gcv: {
        label: "GCV",
        minimum: 3300,
        maximum: 3700,
        unit: "kcal/kg",
      },

      ashContent: {
        label: "Ash content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },

      moistureContent: {
        label: "Moisture content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },
    },

    image: mustardPelletsImage,

    imageAlt:
      "Representative mustard biomass pellets with mustard agricultural residue",

    documents: [],
  },

  {
    id: "sawdust-briquettes",
    slug: "sawdust-briquettes",
    name: "Sawdust Briquettes",
    material: "sawdust",
    format: "briquette",
    availability: "available",

    description:
      "Sawdust compressed into dense solid briquettes for compatible industrial heating equipment and thermal-energy applications.",

    specifications: {
      nominalSize: {
        label: "Nominal size",
        minimum: 70,
        maximum: 90,
        unit: "mm",
      },

      gcv: {
        label: "GCV",
        minimum: 3300,
        maximum: 4000,
        unit: "kcal/kg",
      },

      ashContent: {
        label: "Ash content",
        minimum: 10,
        maximum: 15,
        unit: "%",
      },

      moistureContent: {
        label: "Moisture content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },
    },

    image: sawdustBriquettesImage,

    imageAlt:
      "Representative solid cylindrical sawdust biomass briquettes with wood residue",

    documents: [],
  },

  {
    id: "sawdust-pellets",
    slug: "sawdust-pellets",
    name: "Sawdust Pellets",
    material: "sawdust",
    format: "pellet",
    availability: "available",

    description:
      "Processed sawdust formed into compact pellets for compatible controlled industrial combustion and fuel-feeding systems.",

    specifications: {
      nominalSize: {
        label: "Nominal size",
        minimum: 8,
        maximum: 10,
        unit: "mm",
      },

      gcv: {
        label: "GCV",
        minimum: 3800,
        maximum: 4200,
        unit: "kcal/kg",
      },

      ashContent: {
        label: "Ash content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },

      moistureContent: {
        label: "Moisture content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },
    },

    image: sawdustPelletsImage,

    imageAlt:
      "Representative sawdust biomass pellets with sawdust and wood shavings",

    documents: [],
  },

  {
    id: "groundnut-briquettes",
    slug: "groundnut-briquettes",
    name: "Groundnut Briquettes",
    material: "groundnut",
    format: "briquette",
    availability: "available",

    description:
      "Groundnut agricultural residue compressed into solid briquettes for compatible industrial furnaces, boilers and heating systems.",

    specifications: {
      nominalSize: {
        label: "Nominal size",
        minimum: 70,
        maximum: 90,
        unit: "mm",
      },

      gcv: {
        label: "GCV",
        minimum: 3800,
        maximum: 4200,
        unit: "kcal/kg",
      },

      ashContent: {
        label: "Ash content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },

      moistureContent: {
        label: "Moisture content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },
    },

    image: groundnutBriquettesImage,

    imageAlt:
      "Representative solid cylindrical groundnut-residue biomass briquettes",

    documents: [],
  },

  {
    id: "groundnut-pellets",
    slug: "groundnut-pellets",
    name: "Groundnut Pellets",
    material: "groundnut",
    format: "pellet",
    availability: "available",

    description:
      "Groundnut agricultural residue processed into compact pellet form for compatible industrial thermal equipment.",

    specifications: {
      nominalSize: {
        label: "Nominal size",
        minimum: 8,
        maximum: 10,
        unit: "mm",
      },

      gcv: {
        label: "GCV",
        minimum: 3800,
        maximum: 4200,
        unit: "kcal/kg",
      },

      ashContent: {
        label: "Ash content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },

      moistureContent: {
        label: "Moisture content",
        minimum: 5,
        maximum: 10,
        unit: "%",
      },
    },

    image: groundnutPelletsImage,

    imageAlt:
      "Representative groundnut-residue biomass pellets with crushed groundnut shells",

    documents: [],
  },
];

export const productContentReview = {
  source: "Specifications provided by Siddhartha Bio Fuels",
  receivedDate: "2026-09-08",
  approvalDate: null,
  reviewDate: null,
};

export function formatProductSpecification(specification) {
  if (!specification) {
    return "";
  }

  const { minimum, maximum, unit } = specification;

  if (
    minimum !== undefined &&
    minimum !== null &&
    maximum !== undefined &&
    maximum !== null
  ) {
    return `${minimum}–${maximum} ${unit}`;
  }

  if (minimum !== undefined && minimum !== null) {
    return `${minimum} ${unit}`;
  }

  return "Verification pending";
}

export function getProductBySlug(productSlug) {
  return products.find((product) => product.slug === productSlug) || null;
}

export function getProductsByMaterial(materialId) {
  return products.filter((product) => product.material === materialId);
}

export function getProductsByFormat(formatId) {
  return products.filter((product) => product.format === formatId);
}

export function getProductBySelection(materialId, formatId) {
  return (
    products.find(
      (product) =>
        product.material === materialId && product.format === formatId
    ) || null
  );
}
