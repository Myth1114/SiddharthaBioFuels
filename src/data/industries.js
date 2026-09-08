import brickKilnsImage from "../assets/images/industries/brick-kilns.png";
import boilersImage from "../assets/images/industries/industrial-boilers.png";
import foodProcessingImage from "../assets/images/industries/food-processing.png";
import kitchensImage from "../assets/images/industries/hotels-hospitality.png";
import textilesImage from "../assets/images/industries/textiles.png";
import paperMillsImage from "../assets/images/industries/paper-industries.png";

export const industries = [
  {
    id: "brick-kilns",
    slug: "brick-kilns",
    name: "Brick Kilns",
    image: brickKilnsImage,
    imageAlt:
      "Representative brick kiln using biomass briquettes for industrial heating",
    summary:
      "Solid biomass fuel for compatible kiln-firing operations requiring sustained industrial heat.",
    context:
      "Brick production requires sustained thermal energy during firing. Biomass briquettes may provide an alternative solid-fuel option when the kiln and feeding arrangement are suitable.",
    application:
      "Kiln firing and other continuous high-temperature heating operations.",
    considerations: [
      "Kiln design and required operating temperature",
      "Existing fuel-feeding method",
      "Fuel storage and moisture protection",
    ],
  },
  {
    id: "boilers-thermal-plants",
    slug: "boilers-thermal-plants",
    name: "Boilers & Thermal Plants",
    image: boilersImage,
    imageAlt:
      "Representative industrial boiler and thermal plant using biomass briquettes",
    summary:
      "Briquettes for compatible boilers and thermal systems used to generate process heat or steam.",
    context:
      "Industrial boilers and thermal plants serve different operating loads, pressures and fuel-feeding arrangements. Compatibility must be evaluated for the specific system.",
    application:
      "Process steam, hot water and industrial thermal-energy generation.",
    considerations: [
      "Boiler and burner configuration",
      "Required thermal output and operating pressure",
      "Fuel-feeding and ash-handling arrangements",
    ],
  },
  {
    id: "food-oil-processing",
    slug: "food-oil-processing",
    name: "Food & Oil Processing",
    image: foodProcessingImage,
    imageAlt:
      "Representative food and oil processing facility with a biomass-fuel boiler",
    summary:
      "Process heat and steam for compatible food-production, drying and oil-processing equipment.",
    context:
      "Food and oil processing facilities may require steam or controlled heat for cooking, drying, cleaning, refining and related production activities.",
    application:
      "Steam boilers, drying equipment, hot-water systems and process-heating operations.",
    considerations: [
      "Required steam pressure and daily operating hours",
      "Production hygiene and fuel-storage separation",
      "Boiler compatibility and feeding method",
    ],
  },
  {
    id: "institutional-kitchens",
    slug: "institutional-kitchens",
    name: "Institutional Kitchens",
    image: kitchensImage,
    imageAlt:
      "Representative institutional heating system using biomass briquettes",
    summary:
      "A solid-fuel option for compatible large-scale cooking and institutional hot-water systems.",
    context:
      "Institutional kitchens may serve hotels, hostels, hospitals, schools or other facilities with significant cooking and hot-water requirements.",
    application:
      "Large-scale cooking, central hot-water systems and compatible kitchen-heating equipment.",
    considerations: [
      "Available equipment and kitchen configuration",
      "Daily and seasonal fuel demand",
      "Safe fuel storage and handling space",
    ],
  },
  {
    id: "textile-chemical-industries",
    slug: "textile-chemical-industries",
    name: "Textile & Chemical Industries",
    image: textilesImage,
    imageAlt:
      "Representative textile production facility using an industrial biomass boiler",
    summary:
      "Industrial steam and thermal energy for compatible textile and chemical-processing operations.",
    context:
      "Textile and chemical facilities can require controlled steam or heat for washing, dyeing, drying, finishing and other production stages.",
    application:
      "Steam generation, dyeing, washing, drying and compatible thermal-processing equipment.",
    considerations: [
      "Required temperature and steam consistency",
      "Boiler load and production schedule",
      "Process-specific safety and compatibility review",
    ],
  },
  {
    id: "paper-mills",
    slug: "paper-mills",
    name: "Paper Mills",
    image: paperMillsImage,
    imageAlt:
      "Representative paper mill using biomass briquettes for process heat",
    summary:
      "Process steam and controlled heat for compatible paper-production and drying systems.",
    context:
      "Paper manufacturing often depends on process steam and controlled heat during preparation, production and drying stages.",
    application: "Process-steam generation and paper-drying operations.",
    considerations: [
      "Continuous and peak boiler demand",
      "Fuel storage and handling capacity",
      "Boiler and fuel-feed compatibility",
    ],
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((industry) => industry.slug === slug);
}
