import brickKilnsImage from "../assets/images/industries/brick-kilns.png";
import foodProcessingImage from "../assets/images/industries/food-processing.png";
import textilesImage from "../assets/images/industries/textiles.png";
import paperIndustriesImage from "../assets/images/industries/paper-industries.png";
import hotelsHospitalityImage from "../assets/images/industries/hotels-hospitality.png";
import industrialBoilersImage from "../assets/images/industries/industrial-boilers.png";

export const industries = [
  {
    id: "brick-kilns",
    name: "Brick Kilns",
    image: brickKilnsImage,
    imageAlt:
      "Representative brick kiln using biomass briquettes through a mechanical fuel-feeding system",
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
    id: "food-processing",
    name: "Food Processing",
    image: foodProcessingImage,
    imageAlt:
      "Representative food processing facility with a biomass briquette boiler and steam equipment",
    context:
      "Food-processing facilities often require steam or hot water for cooking, drying, cleaning and other production activities.",
    application:
      "Steam boilers, hot-water systems and process-heating equipment.",
    considerations: [
      "Required steam pressure and daily operating hours",
      "Boiler compatibility and feeding system",
      "Clean and organized fuel-storage conditions",
    ],
  },
  {
    id: "textiles",
    name: "Textiles",
    image: textilesImage,
    imageAlt:
      "Representative textile manufacturing facility using a biomass-fired boiler",
    context:
      "Textile production can use substantial thermal energy for dyeing, washing, finishing and drying processes.",
    application:
      "Steam generation for dyeing, washing, finishing and fabric drying.",
    considerations: [
      "Boiler load and production schedule",
      "Required steam consistency",
      "Fuel handling and ash-management arrangements",
    ],
  },
  {
    id: "paper-industries",
    name: "Paper Industries",
    image: paperIndustriesImage,
    imageAlt:
      "Representative paper manufacturing facility with biomass briquettes and boiler equipment",
    context:
      "Paper manufacturing depends on process steam and controlled heat for drying and other production stages.",
    application: "Process-steam generation and paper-drying operations.",
    considerations: [
      "Continuous and peak boiler demand",
      "Available fuel-storage space",
      "Boiler and fuel-feed compatibility",
    ],
  },
  {
    id: "hotels-hospitality",
    name: "Hotels & Hospitality",
    image: hotelsHospitalityImage,
    imageAlt:
      "Representative hotel boiler room with biomass briquettes and hot-water tanks",
    context:
      "Hotels and hospitality facilities may require dependable hot water and steam for kitchens, rooms, cleaning and laundry operations.",
    application:
      "Central hot-water systems, laundry steam and kitchen heating.",
    considerations: [
      "Daily and seasonal hot-water demand",
      "Available boiler-room and storage space",
      "Fuel delivery and handling access",
    ],
  },
  {
    id: "industrial-boilers",
    name: "Industrial Boilers",
    image: industrialBoilersImage,
    imageAlt:
      "Representative industrial biomass boiler with mechanical briquette feeding equipment",
    context:
      "Biomass briquettes may be evaluated for compatible industrial boilers used across a range of manufacturing operations.",
    application:
      "General process steam, hot water and industrial thermal-energy systems.",
    considerations: [
      "Existing boiler and burner configuration",
      "Required thermal output",
      "Operating schedule and fuel-consumption pattern",
    ],
  },
];
