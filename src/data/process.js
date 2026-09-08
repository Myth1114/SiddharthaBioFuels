const processStages = [
  {
    id: "residue-sourcing",
    label: "Residue",
    title: "Agricultural and wood residue becomes a resource.",
    description:
      "Mustard residue, sawdust and groundnut residue provide the starting materials for biomass-fuel production.",
    details:
      "The condition and moisture of incoming material must be considered before further preparation.",
    category: "manufacturing",
  },

  {
    id: "material-preparation",
    label: "Preparation",
    title: "Raw material is prepared for processing.",
    description:
      "The biomass residue is prepared into a more consistent form before moisture reduction and compression.",
    details:
      "Material preparation supports more consistent handling during the later production stages.",
    category: "manufacturing",
  },

  {
    id: "moisture-reduction",
    label: "Drying",
    title: "Moisture is reduced before compression.",
    description:
      "Moisture is reduced to prepare the biomass material for consistent compression and fuel formation.",
    details:
      "Exact drying conditions depend on the incoming raw material and production setup.",
    category: "manufacturing",
  },

  {
    id: "compression",
    label: "Compression",
    title: "Loose material gains density.",
    description:
      "Prepared biomass is compressed under pressure into dense briquette or pellet form.",
    details:
      "Briquettes are produced as larger solid cylinders without a centre hole, while pellets are formed as smaller cylindrical pieces.",
    category: "manufacturing",
  },

  {
    id: "cooling",
    label: "Cooling",
    title: "The newly formed fuel is stabilized.",
    description:
      "Newly formed briquettes and pellets are allowed to cool and stabilize before further handling.",
    details:
      "Cooling prepares the finished fuel for inspection, storage and dispatch handling.",
    category: "manufacturing",
  },

  {
    id: "quality-checking",
    label: "Quality",
    title: "The finished fuel form is checked.",
    description:
      "Finished fuel characteristics are checked against the applicable product specification.",
    details:
      "Relevant checks may include product size, moisture, ash content and gross calorific value.",
    category: "manufacturing",
  },

  {
    id: "storage-dispatch",
    label: "Dispatch",
    title: "Finished fuel is prepared for supply.",
    description:
      "Finished biomass fuel is stored with protection from moisture and prepared for delivery.",
    details:
      "Packaging, quantity, delivery location and dispatch requirements are confirmed with the buyer.",
    category: "manufacturing",
  },

  {
    id: "industrial-heat",
    label: "Heat",
    title: "Stored energy becomes controlled heat.",
    description:
      "The selected biomass fuel is introduced into compatible industrial heating equipment under the required operating conditions.",
    details:
      "Equipment compatibility should be reviewed before changing an existing industrial fuel.",
    category: "application",
  },

  {
    id: "industrial-application",
    label: "Industry",
    title: "Biomass fuel supports industrial work.",
    description:
      "The transformation concludes where dependable process heat is required in boilers, furnaces, kilns and related equipment.",
    details:
      "The final application depends on equipment design, fuel feeding, operating temperature and handling requirements.",
    category: "application",
  },
];

const manufacturingStageIds = [
  "residue-sourcing",
  "material-preparation",
  "moisture-reduction",
  "compression",
  "cooling",
  "quality-checking",
  "storage-dispatch",
];

const homepageStageIds = [
  "residue-sourcing",
  "compression",
  "quality-checking",
  "industrial-heat",
  "industrial-application",
];

function createStageSequence(stageIds) {
  return stageIds
    .map((stageId) => processStages.find((stage) => stage.id === stageId))
    .filter(Boolean)
    .map((stage, index) => ({
      ...stage,

      number: String(index + 1).padStart(2, "0"),
    }));
}

export const manufacturingStages = createStageSequence(manufacturingStageIds);

export const transformationStages = createStageSequence(homepageStageIds);

export function getProcessStageById(stageId) {
  return processStages.find((stage) => stage.id === stageId) || null;
}
