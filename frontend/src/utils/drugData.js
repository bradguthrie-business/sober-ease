// Drug categories organized by danger level (EXTREME → HIGH → MODERATE → LOW)
// Danger levels: EXTREME (life-threatening), HIGH (dangerous), MODERATE (risky), LOW (relatively safer)

export const danger = {
  EXTREME: "EXTREME",
  HIGH: "HIGH",
  MODERATE: "MODERATE",
  LOW: "LOW",
};

export const alcohol = [
  { name: "Liquor/Spirits", danger: danger.HIGH },
  { name: "Malt Liquor", danger: danger.HIGH },
  { name: "Wine", danger: danger.MODERATE },
  { name: "Beer", danger: danger.MODERATE },
  { name: "Hard Seltzer", danger: danger.MODERATE },
];

export const opioids = [
  { name: "Carfentanil", danger: danger.EXTREME },
  { name: "Fentanyl", danger: danger.EXTREME },
  { name: "Heroin", danger: danger.EXTREME },
  { name: "U-47700", danger: danger.EXTREME },
  { name: "Oxycodone", danger: danger.HIGH },
  { name: "Hydrocodone", danger: danger.HIGH },
  { name: "Hydromorphone", danger: danger.HIGH },
  { name: "Morphine", danger: danger.HIGH },
  { name: "Methadone", danger: danger.HIGH },
  { name: "Opium", danger: danger.HIGH },
  { name: "Tramadol", danger: danger.MODERATE },
  { name: "Codeine", danger: danger.MODERATE },
  { name: "Buprenorphine", danger: danger.MODERATE },
  { name: "Kratom (7-Hydroxymitragynine/7-OH)", danger: danger.MODERATE },
  { name: "Kratom (Mitragynine)", danger: danger.MODERATE },
  { name: "Kratom", danger: danger.LOW },
];

export const benzodiazepines = [
  { name: "Flubromazolam", danger: danger.EXTREME },
  { name: "Clonazolam", danger: danger.EXTREME },
  { name: "Flualprazolam", danger: danger.HIGH },
  { name: "Alprazolam", danger: danger.HIGH },
  { name: "Bromazolam", danger: danger.HIGH },
  { name: "Clonazepam", danger: danger.HIGH },
  { name: "Triazolam", danger: danger.HIGH },
  { name: "Etizolam", danger: danger.HIGH },
  { name: "Lorazepam", danger: danger.MODERATE },
  { name: "Temazepam", danger: danger.MODERATE },
  { name: "Diazepam", danger: danger.LOW },
  { name: "Chlordiazepoxide", danger: danger.LOW },
  { name: "Oxazepam", danger: danger.LOW },
];

export const stimulants = [
  { name: "Methamphetamine", danger: danger.EXTREME },
  { name: "Crack Cocaine", danger: danger.EXTREME },
  { name: "Cocaine", danger: danger.HIGH },
  { name: "Cathinones (Bath Salts)", danger: danger.HIGH },
  { name: "4-MMC", danger: danger.HIGH },
  { name: "3-MMC", danger: danger.HIGH },
  { name: "Mephedrone", danger: danger.HIGH },
  { name: "MDMA", danger: danger.MODERATE },
  { name: "Amphetamine", danger: danger.MODERATE },
  { name: "Dextroamphetamine", danger: danger.MODERATE },
  { name: "Lisdexamfetamine", danger: danger.MODERATE },
  { name: "Methylphenidate", danger: danger.MODERATE },
  { name: "Modafinil", danger: danger.LOW },
  { name: "Caffeine (High Dose)", danger: danger.LOW },
];

export const psychedelics = [
  { name: "25I-NBOMe", danger: danger.HIGH },
  { name: "DOB", danger: danger.HIGH },
  { name: "DOM", danger: danger.HIGH },
  { name: "5-MeO-DMT", danger: danger.MODERATE },
  { name: "2C-I", danger: danger.MODERATE },
  { name: "2C-B", danger: danger.MODERATE },
  { name: "DMT", danger: danger.MODERATE },
  { name: "Ayahuasca", danger: danger.MODERATE },
  { name: "Mescaline", danger: danger.MODERATE },
  { name: "LSD", danger: danger.LOW },
  { name: "1P-LSD", danger: danger.LOW },
  { name: "AL-LAD", danger: danger.LOW },
  { name: "Psilocybin", danger: danger.LOW },
  { name: "LSA", danger: danger.LOW },
];

export const dissociatives = [
  { name: "PCP", danger: danger.EXTREME },
  { name: "3-MeO-PCP", danger: danger.HIGH },
  { name: "3-HO-PCP", danger: danger.HIGH },
  { name: "MXE", danger: danger.HIGH },
  { name: "Ketamine", danger: danger.MODERATE },
  { name: "DCK", danger: danger.MODERATE },
  { name: "DXM", danger: danger.MODERATE },
  { name: "Nitrous Oxide", danger: danger.LOW },
];

export const cannabis = [
  { name: "THC-O", danger: danger.MODERATE },
  { name: "Concentrates/Dabs", danger: danger.MODERATE },
  { name: "Edibles", danger: danger.MODERATE },
  { name: "HHC", danger: danger.LOW },
  { name: "Delta-10 THC", danger: danger.LOW },
  { name: "Delta-9 THC", danger: danger.LOW },
  { name: "THC", danger: danger.LOW },
  { name: "Delta-8 THC", danger: danger.LOW },
  { name: "Hash", danger: danger.LOW },
  { name: "CBG", danger: danger.LOW },
  { name: "CBN", danger: danger.LOW },
  { name: "CBD", danger: danger.LOW },
];

export const depressants = [
  { name: "GHB", danger: danger.EXTREME },
  { name: "GBL", danger: danger.EXTREME },
  { name: "Barbiturates", danger: danger.HIGH },
  { name: "Phenibut", danger: danger.MODERATE },
  { name: "Carisoprodol", danger: danger.MODERATE },
  { name: "Zolpidem", danger: danger.MODERATE },
  { name: "Zopiclone", danger: danger.MODERATE },
  { name: "Eszopiclone", danger: danger.MODERATE },
  { name: "Pregabalin", danger: danger.LOW },
  { name: "Gabapentin", danger: danger.LOW },
  { name: "Baclofen", danger: danger.LOW },
];

export const inhalants = [
  { name: "Gasoline", danger: danger.EXTREME },
  { name: "Paint Thinner", danger: danger.EXTREME },
  { name: "Glue", danger: danger.HIGH },
  { name: "Solvents", danger: danger.HIGH },
  { name: "Poppers", danger: danger.MODERATE },
  { name: "Nitrous Oxide", danger: danger.MODERATE },
];

// All drugs combined for search/filtering
export const allDrugs = {
  Alcohol: alcohol,
  Opioids: opioids,
  Benzodiazepines: benzodiazepines,
  Stimulants: stimulants,
  Psychedelics: psychedelics,
  Dissociatives: dissociatives,
  Cannabis: cannabis,
  Depressants: depressants,
  Inhalants: inhalants,
};

// Get category by drug name (for reverse lookup)
export const getDrugCategory = (drugName) => {
  for (const [category, drugs] of Object.entries(allDrugs)) {
    if (
      drugs.some((drug) =>
        drug.name.toLowerCase().includes(drugName.toLowerCase())
      )
    ) {
      return category;
    }
  }
  return "Unknown";
};

// Danger level styling helper
export const getDangerStyle = (level) => {
  switch (level) {
    case "EXTREME":
      return {
        bg: "bg-red-100",
        text: "text-red-900",
        icon: "text-red-600",
        border: "border-red-300",
      };
    case "HIGH":
      return {
        bg: "bg-orange-100",
        text: "text-orange-900",
        icon: "text-orange-600",
        border: "border-orange-300",
      };
    case "MODERATE":
      return {
        bg: "bg-yellow-100",
        text: "text-yellow-900",
        icon: "text-yellow-600",
        border: "border-yellow-300",
      };
    case "LOW":
      return {
        bg: "bg-green-100",
        text: "text-green-900",
        icon: "text-green-600",
        border: "border-green-300",
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-900",
        icon: "text-gray-600",
        border: "border-gray-300",
      };
  }
};
