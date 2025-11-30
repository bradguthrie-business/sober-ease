// Static data of drugs by category, including name, danger level, overview, common names (aliases/slang), effects, risks/warnings, and harm reduction tips

export const danger = {
  EXTREME: "EXTREME",
  HIGH: "HIGH",
  MODERATE: "MODERATE",
  LOW: "LOW",
};

export const alcohol = [
  { name: "Liquor/Spirits", danger: danger.HIGH },
  {
    name: "Malt Liquor",
    danger: danger.HIGH,
    description:
      "Malt liquor is a type of beer with a higher alcohol content, often sold in large bottles or cans. It is typically inexpensive and associated with rapid intoxication.",
    commonNames: "Forty, 40oz, St. Ides, Colt 45, King Cobra",
    effects:
      "Euphoria, lowered inhibitions, impaired coordination, slurred speech, drowsiness. High doses can cause vomiting, blackouts, or alcohol poisoning.",
    risks:
      "High risk of addiction, liver damage, alcohol poisoning, risky behaviors, and withdrawal symptoms. Consuming large quantities quickly increases risk of overdose.",
    harmReduction:
      "Pace yourself, eat before drinking, avoid mixing with other depressants (like benzodiazepines or opioids), and never drive under the influence. Know your limits and stay hydrated.",
  },
  { name: "Wine", danger: danger.MODERATE },
  { name: "Beer", danger: danger.MODERATE },
  { name: "Hard Seltzer", danger: danger.MODERATE },
];

export const opioids = [
  {
    name: "Carfentanil",
    danger: danger.EXTREME,
    description:
      "Ultra-potent synthetic opioid, used as a tranquilizer for large animals. Not for human use.",
    commonNames: "Carfentanil, Wildnil",
    effects: "Extreme sedation, respiratory depression, analgesia.",
    risks:
      "Overdose, death, respiratory arrest, extremely high potency (microgram doses can be fatal).",
    harmReduction:
      "Avoid all use. If exposed, seek immediate medical attention. Naloxone may require multiple doses.",
  },
  {
    name: "Fentanyl",
    danger: danger.EXTREME,
    description:
      "Very potent synthetic opioid, used medically for severe pain but often found in illicit drug supply.",
    commonNames: "Fentanyl, China White, Apache, Dance Fever",
    effects: "Euphoria, pain relief, sedation, respiratory depression.",
    risks:
      "High risk of overdose and death, especially when mixed with other drugs. Rapid onset.",
    harmReduction:
      "Test substances, use very small doses, never use alone, have naloxone available.",
  },
  {
    name: "Heroin",
    danger: danger.EXTREME,
    description: "Illicit opioid derived from morphine, highly addictive.",
    commonNames: "Heroin, Dope, Smack, H, Black Tar",
    effects: "Euphoria, pain relief, sedation, warm flush, drowsiness.",
    risks:
      "Addiction, overdose, respiratory depression, infectious disease (if injected).",
    harmReduction:
      "Use clean equipment, test for fentanyl, never use alone, have naloxone available.",
  },
  {
    name: "U-47700",
    danger: danger.EXTREME,
    description: "Potent synthetic opioid, not approved for medical use.",
    commonNames: "U-47700, Pink, U4",
    effects: "Euphoria, pain relief, sedation.",
    risks:
      "Overdose, respiratory depression, death, unknown long-term effects.",
    harmReduction: "Avoid use, test substances, have naloxone available.",
  },
  {
    name: "Oxycodone",
    danger: danger.HIGH,
    description: "Prescription opioid for moderate to severe pain.",
    commonNames: "Oxy, OxyContin, Percocet, Roxicodone",
    effects: "Euphoria, pain relief, sedation.",
    risks: "Addiction, overdose, respiratory depression, constipation.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants, have naloxone available.",
  },
  {
    name: "Hydrocodone",
    danger: danger.HIGH,
    description:
      "Prescription opioid for pain, often combined with acetaminophen.",
    commonNames: "Vicodin, Norco, Lortab",
    effects: "Euphoria, pain relief, sedation.",
    risks:
      "Addiction, overdose, liver damage (if combined with acetaminophen).",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants, monitor acetaminophen intake.",
  },
  {
    name: "Hydromorphone",
    danger: danger.HIGH,
    description: "Very potent prescription opioid for severe pain.",
    commonNames: "Dilaudid, Exalgo",
    effects: "Euphoria, pain relief, sedation.",
    risks: "Addiction, overdose, respiratory depression.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants, have naloxone available.",
  },
  {
    name: "Morphine",
    danger: danger.HIGH,
    description: "Classic opioid, used medically for pain and palliative care.",
    commonNames: "Morphine, MS Contin, Kadian",
    effects: "Euphoria, pain relief, sedation.",
    risks: "Addiction, overdose, respiratory depression, constipation.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants, have naloxone available.",
  },
  {
    name: "Methadone",
    danger: danger.HIGH,
    description:
      "Long-acting synthetic opioid, used for pain and opioid use disorder treatment.",
    commonNames: "Methadone, Diskets, Dolophine",
    effects: "Pain relief, sedation, blocks opioid cravings.",
    risks:
      "Overdose, respiratory depression, cardiac arrhythmia (QT prolongation).",
    harmReduction:
      "Use only as prescribed, regular EKG monitoring, avoid mixing with other depressants.",
  },
  {
    name: "Opium",
    danger: danger.HIGH,
    description: "Dried latex from opium poppy, contains morphine and codeine.",
    commonNames: "Opium, Afiun, O",
    effects: "Euphoria, pain relief, sedation.",
    risks:
      "Addiction, overdose, respiratory depression, infectious disease (if smoked or injected).",
    harmReduction: "Avoid use, use clean equipment, have naloxone available.",
  },
  {
    name: "Kratom (7-Hydroxymitragynine/7-OH)",
    danger: danger.HIGH,
    description: "Potent active alkaloid in kratom, strong opioid effects.",
    commonNames: "7-OH, 7-Hydroxymitragynine",
    effects: "Euphoria, pain relief, sedation.",
    risks:
      "Addiction, respiratory depression (at high doses), unknown long-term effects.",
    harmReduction:
      "Dose cautiously, avoid mixing with other depressants, monitor for dependence.",
  },
  {
    name: "Kratom (Mitragynine pseudoindoxyl)",
    danger: danger.HIGH,
    description: "Potent kratom metabolite with opioid effects.",
    commonNames: "Mitragynine pseudoindoxyl",
    effects: "Euphoria, pain relief, sedation.",
    risks:
      "Addiction, respiratory depression (at high doses), unknown long-term effects.",
    harmReduction:
      "Dose cautiously, avoid mixing with other depressants, monitor for dependence.",
  },
  {
    name: "Tramadol",
    danger: danger.MODERATE,
    description: "Prescription opioid with additional SNRI effects.",
    commonNames: "Tramadol, Ultram",
    effects: "Pain relief, mild euphoria, sedation.",
    risks:
      "Seizures (especially with other serotonergic drugs), addiction, overdose.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other serotonergic drugs, monitor for side effects.",
  },
  {
    name: "Codeine",
    danger: danger.MODERATE,
    description: "Mild prescription opioid, often in cough syrups.",
    commonNames: "Codeine, Tylenol #3, Lean, Syrup",
    effects: "Pain relief, cough suppression, mild euphoria.",
    risks: "Addiction, respiratory depression, constipation.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants, monitor for side effects.",
  },
  {
    name: "Buprenorphine",
    danger: danger.MODERATE,
    description:
      "Partial opioid agonist, used for opioid use disorder treatment.",
    commonNames: "Suboxone, Subutex, Bupe",
    effects:
      "Reduces cravings, mild euphoria, ceiling effect on respiratory depression.",
    risks:
      "Precipitated withdrawal (if started too soon), headache, constipation.",
    harmReduction:
      "Use only as prescribed, follow induction protocols, avoid mixing with other depressants.",
  },
  {
    name: "Kratom (MGM-16)",
    danger: danger.EXTREME,
    description: "Rare, highly potent kratom alkaloid/metabolite.",
    commonNames: "MGM-16",
    effects: "Strong opioid effects, sedation, euphoria.",
    risks: "Unknown safety, high risk of overdose, addiction.",
    harmReduction:
      "Avoid use, monitor for adverse effects, seek medical attention if unwell.",
  },
  {
    name: "Kratom (MGM-15)",
    danger: danger.HIGH,
    description: "Potent kratom alkaloid/metabolite.",
    commonNames: "MGM-15",
    effects: "Opioid effects, sedation, euphoria.",
    risks: "Unknown safety, risk of overdose, addiction.",
    harmReduction:
      "Dose cautiously, avoid mixing with other depressants, monitor for adverse effects.",
  },
  {
    name: "Kratom (Mitragynine)",
    danger: danger.MODERATE,
    description: "Primary active alkaloid in kratom, mild opioid effects.",
    commonNames: "Mitragynine",
    effects:
      "Mild euphoria, pain relief, stimulation at low doses, sedation at high doses.",
    risks: "Addiction, nausea, constipation, unknown long-term effects.",
    harmReduction:
      "Dose cautiously, avoid mixing with other depressants, monitor for dependence.",
  },
  {
    name: "Kratom",
    danger: danger.LOW,
    description:
      "Plant-based substance with mild opioid and stimulant effects.",
    commonNames: "Kratom, Thang, Kakuam, Thom",
    effects:
      "Mild stimulation at low doses, mild euphoria, pain relief, sedation at higher doses.",
    risks: "Dependence, nausea, constipation, withdrawal symptoms (rare).",
    harmReduction: "Dose cautiously, avoid daily use, monitor for dependence.",
  },
];

export const benzodiazepines = [
  {
    name: "Flubromazolam",
    danger: danger.EXTREME,
    description: "Extremely potent designer benzodiazepine.",
    commonNames: "Flubromazolam, Flubrom",
    effects: "Sedation, amnesia, muscle relaxation, anxiolysis.",
    risks:
      "Severe amnesia, blackouts, respiratory depression, overdose, addiction.",
    harmReduction:
      "Avoid high doses, do not mix with other depressants, use only as prescribed.",
  },
  {
    name: "Clonazolam",
    danger: danger.EXTREME,
    description: "Extremely potent designer benzodiazepine.",
    commonNames: "Clonazolam",
    effects: "Sedation, amnesia, muscle relaxation, anxiolysis.",
    risks:
      "Severe amnesia, blackouts, respiratory depression, overdose, addiction.",
    harmReduction:
      "Avoid high doses, do not mix with other depressants, use only as prescribed.",
  },
  {
    name: "Flualprazolam",
    danger: danger.HIGH,
    description: "Potent designer benzodiazepine, similar to alprazolam.",
    commonNames: "Flualprazolam",
    effects: "Sedation, anxiolysis, muscle relaxation.",
    risks: "Addiction, overdose, respiratory depression, amnesia.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Alprazolam",
    danger: danger.HIGH,
    description: "Prescription benzodiazepine for anxiety and panic disorders.",
    commonNames: "Xanax, Niravam, Bars",
    effects: "Anxiolysis, sedation, muscle relaxation.",
    risks: "Addiction, withdrawal, overdose, memory impairment.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Bromazolam",
    danger: danger.HIGH,
    description: "Designer benzodiazepine, not approved for medical use.",
    commonNames: "Bromazolam",
    effects: "Sedation, anxiolysis, muscle relaxation.",
    risks: "Addiction, overdose, respiratory depression, amnesia.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Clonazepam",
    danger: danger.HIGH,
    description:
      "Prescription benzodiazepine for seizures and panic disorders.",
    commonNames: "Klonopin",
    effects: "Anxiolysis, sedation, muscle relaxation.",
    risks: "Addiction, withdrawal, overdose, memory impairment.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Triazolam",
    danger: danger.HIGH,
    description: "Short-acting prescription benzodiazepine for insomnia.",
    commonNames: "Halcion",
    effects: "Sedation, sleep induction, anxiolysis.",
    risks: "Addiction, memory impairment, overdose, withdrawal.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Etizolam",
    danger: danger.EXTREME,
    description:
      "Thienodiazepine, similar to benzodiazepines, used for anxiety.",
    commonNames: "Etizolam",
    effects: "Anxiolysis, sedation, muscle relaxation.",
    risks: "Addiction, withdrawal, overdose, memory impairment.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Lorazepam",
    danger: danger.MODERATE,
    description: "Prescription benzodiazepine for anxiety and sedation.",
    commonNames: "Ativan",
    effects: "Anxiolysis, sedation, muscle relaxation.",
    risks: "Addiction, withdrawal, memory impairment.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Temazepam",
    danger: danger.MODERATE,
    description: "Prescription benzodiazepine for insomnia.",
    commonNames: "Restoril",
    effects: "Sleep induction, sedation, anxiolysis.",
    risks: "Addiction, memory impairment, withdrawal.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Diazepam",
    danger: danger.LOW,
    description:
      "Prescription benzodiazepine for anxiety, muscle spasms, and seizures.",
    commonNames: "Valium",
    effects: "Anxiolysis, muscle relaxation, sedation.",
    risks: "Addiction, withdrawal, memory impairment.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Chlordiazepoxide",
    danger: danger.LOW,
    description:
      "Prescription benzodiazepine for anxiety and alcohol withdrawal.",
    commonNames: "Librium",
    effects: "Anxiolysis, sedation, muscle relaxation.",
    risks: "Addiction, withdrawal, memory impairment.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Oxazepam",
    danger: danger.LOW,
    description:
      "Prescription benzodiazepine for anxiety and alcohol withdrawal.",
    commonNames: "Serax",
    effects: "Anxiolysis, sedation, muscle relaxation.",
    risks: "Addiction, withdrawal, memory impairment.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
];

export const stimulants = [
  {
    name: "Methamphetamine",
    danger: danger.EXTREME,
    description: "Highly addictive synthetic stimulant.",
    commonNames: "Meth, Crystal, Ice, Tina",
    effects: "Euphoria, increased energy, alertness, decreased appetite.",
    risks: "Addiction, psychosis, cardiovascular issues, dental problems.",
    harmReduction:
      "Avoid frequent use, stay hydrated, avoid mixing with other stimulants.",
  },
  {
    name: "Crack Cocaine",
    danger: danger.EXTREME,
    description: "Smokable form of cocaine, highly addictive.",
    commonNames: "Crack, Rock",
    effects: "Intense euphoria, increased energy, alertness.",
    risks: "Addiction, cardiovascular issues, paranoia, overdose.",
    harmReduction:
      "Avoid frequent use, do not share pipes, avoid mixing with depressants.",
  },
  {
    name: "Cocaine",
    danger: danger.HIGH,
    description: "Stimulant drug derived from coca leaves.",
    commonNames: "Coke, Blow, Snow",
    effects: "Euphoria, increased energy, alertness.",
    risks: "Addiction, cardiovascular issues, nasal damage, overdose.",
    harmReduction:
      "Use clean equipment, avoid mixing with alcohol or other stimulants.",
  },
  {
    name: "Cathinones (Bath Salts)",
    danger: danger.HIGH,
    description: "Synthetic stimulants related to cathinone.",
    commonNames: "Bath Salts, Flakka, MDPV, Mephedrone",
    effects: "Euphoria, increased energy, alertness.",
    risks: "Addiction, paranoia, agitation, cardiovascular issues.",
    harmReduction:
      "Avoid frequent use, stay hydrated, avoid mixing with other stimulants.",
  },
  {
    name: "4-MMC",
    danger: danger.HIGH,
    description: "Synthetic stimulant, also known as mephedrone.",
    commonNames: "Mephedrone, Meow Meow, 4-Methylmethcathinone",
    effects: "Euphoria, increased energy, empathy.",
    risks: "Addiction, cardiovascular issues, agitation.",
    harmReduction: "Dose cautiously, avoid mixing with other stimulants.",
  },
  {
    name: "3-MMC",
    danger: danger.HIGH,
    description: "Synthetic stimulant, similar to 4-MMC.",
    commonNames: "3-Methylmethcathinone",
    effects: "Euphoria, increased energy, empathy.",
    risks: "Addiction, cardiovascular issues, agitation.",
    harmReduction: "Dose cautiously, avoid mixing with other stimulants.",
  },
  {
    name: "Mephedrone",
    danger: danger.HIGH,
    description: "Synthetic stimulant, cathinone class.",
    commonNames: "Meph, Drone, MCAT",
    effects: "Euphoria, increased energy, empathy.",
    risks: "Addiction, cardiovascular issues, agitation.",
    harmReduction: "Dose cautiously, avoid mixing with other stimulants.",
  },
  {
    name: "MDMA",
    danger: danger.MODERATE,
    description: "Empathogen and stimulant, popular in party settings.",
    commonNames: "Ecstasy, Molly, E, XTC",
    effects: "Euphoria, empathy, increased energy, sensory enhancement.",
    risks: "Dehydration, overheating, serotonin syndrome, comedown.",
    harmReduction: "Test substances, stay hydrated, take breaks from dancing.",
  },
  {
    name: "Amphetamine",
    danger: danger.MODERATE,
    description: "Prescription stimulant for ADHD and narcolepsy.",
    commonNames: "Adderall, Dexedrine, Evekeo",
    effects: "Increased focus, energy, alertness.",
    risks: "Addiction, insomnia, anxiety, cardiovascular issues.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other stimulants.",
  },
  {
    name: "Dextroamphetamine",
    danger: danger.MODERATE,
    description: "Prescription stimulant for ADHD and narcolepsy.",
    commonNames: "Dexedrine, Dextrostat",
    effects: "Increased focus, energy, alertness.",
    risks: "Addiction, insomnia, anxiety, cardiovascular issues.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other stimulants.",
  },
  {
    name: "Lisdexamfetamine",
    danger: danger.MODERATE,
    description: "Prescription stimulant for ADHD.",
    commonNames: "Vyvanse",
    effects: "Increased focus, energy, alertness.",
    risks: "Addiction, insomnia, anxiety, cardiovascular issues.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other stimulants.",
  },
  {
    name: "Methylphenidate",
    danger: danger.MODERATE,
    description: "Prescription stimulant for ADHD.",
    commonNames: "Ritalin, Concerta, Daytrana",
    effects: "Increased focus, energy, alertness.",
    risks: "Addiction, insomnia, anxiety, cardiovascular issues.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other stimulants.",
  },
  {
    name: "Modafinil",
    danger: danger.LOW,
    description: "Wakefulness-promoting agent for narcolepsy.",
    commonNames: "Provigil",
    effects: "Increased alertness, wakefulness, mild stimulation.",
    risks: "Headache, insomnia, anxiety.",
    harmReduction: "Use only as prescribed, avoid taking late in the day.",
  },
  {
    name: "Caffeine",
    danger: danger.LOW,
    description: "Mild stimulant found in coffee, tea, and energy drinks.",
    commonNames: "Coffee, Tea, Energy Drinks, Soda",
    effects: "Increased alertness, wakefulness, mild stimulation.",
    risks: "Insomnia, jitteriness, increased heart rate.",
    harmReduction: "Limit intake, avoid late in the day, stay hydrated.",
  },
];

export const psychedelics = [
  {
    name: "25I-NBOMe",
    danger: danger.HIGH,
    description: "Potent synthetic psychedelic, NBOMe class.",
    commonNames: "N-Bomb, 25I",
    effects: "Visual hallucinations, altered perception, euphoria.",
    risks: "Overdose, seizures, vasoconstriction, confusion.",
    harmReduction:
      "Test substances, dose very cautiously, avoid mixing with other drugs.",
  },
  {
    name: "DOB",
    danger: danger.HIGH,
    description: "Potent psychedelic amphetamine.",
    commonNames: "DOB",
    effects: "Visual hallucinations, stimulation, altered perception.",
    risks: "Vasoconstriction, anxiety, overdose risk.",
    harmReduction: "Dose cautiously, avoid mixing with other stimulants.",
  },
  {
    name: "DOM",
    danger: danger.HIGH,
    description: "Potent psychedelic amphetamine.",
    commonNames: "DOM, STP",
    effects: "Visual hallucinations, stimulation, altered perception.",
    risks: "Vasoconstriction, anxiety, overdose risk.",
    harmReduction: "Dose cautiously, avoid mixing with other stimulants.",
  },
  {
    name: "5-MeO-DMT",
    danger: danger.MODERATE,
    description: "Potent psychedelic tryptamine.",
    commonNames: "5-MeO, The God Molecule",
    effects: "Intense dissociation, ego dissolution, euphoria.",
    risks: "Overwhelm, anxiety, confusion, accidents.",
    harmReduction: "Use with a sitter, dose cautiously, safe environment.",
  },
  {
    name: "2C-I",
    danger: danger.MODERATE,
    description: "Synthetic psychedelic, 2C family.",
    commonNames: "2C-I",
    effects: "Visuals, stimulation, altered perception.",
    risks: "Anxiety, vasoconstriction, confusion.",
    harmReduction: "Dose cautiously, avoid mixing with other stimulants.",
  },
  {
    name: "2C-B",
    danger: danger.MODERATE,
    description: "Synthetic psychedelic, 2C family.",
    commonNames: "2C-B, Nexus",
    effects: "Visuals, euphoria, altered perception.",
    risks: "Anxiety, confusion, vasoconstriction.",
    harmReduction: "Dose cautiously, safe environment.",
  },
  {
    name: "DMT",
    danger: danger.MODERATE,
    description: "Potent psychedelic tryptamine.",
    commonNames: "DMT, Dimitri",
    effects: "Intense visuals, altered perception, euphoria.",
    risks: "Overwhelm, anxiety, confusion.",
    harmReduction: "Use with a sitter, dose cautiously, safe environment.",
  },
  {
    name: "Ayahuasca",
    danger: danger.MODERATE,
    description: "Psychedelic brew containing DMT and MAOIs.",
    commonNames: "Yagé, Daime",
    effects: "Intense visuals, introspection, purging.",
    risks: "Nausea, serotonin syndrome, psychological distress.",
    harmReduction: "Use in ceremonial context, avoid mixing with SSRIs.",
  },
  {
    name: "Mescaline",
    danger: danger.MODERATE,
    description: "Psychedelic alkaloid from cacti.",
    commonNames: "Peyote, San Pedro, Buttons",
    effects: "Visuals, euphoria, altered perception.",
    risks: "Nausea, anxiety, confusion.",
    harmReduction: "Safe environment, dose cautiously.",
  },
  {
    name: "LSD",
    danger: danger.LOW,
    description: "Classic psychedelic, lysergamide class.",
    commonNames: "Acid, Lucy, Tabs",
    effects: "Visuals, euphoria, altered perception.",
    risks: "Anxiety, confusion, accidents.",
    harmReduction: "Safe environment, dose cautiously.",
  },
  {
    name: "1P-LSD",
    danger: danger.LOW,
    description: "Prodrug for LSD, lysergamide class.",
    commonNames: "1P-LSD",
    effects: "Visuals, euphoria, altered perception.",
    risks: "Anxiety, confusion, accidents.",
    harmReduction: "Safe environment, dose cautiously.",
  },
  {
    name: "AL-LAD",
    danger: danger.LOW,
    description: "Lysergamide psychedelic, similar to LSD.",
    commonNames: "AL-LAD",
    effects: "Visuals, euphoria, altered perception.",
    risks: "Anxiety, confusion, accidents.",
    harmReduction: "Safe environment, dose cautiously.",
  },
  {
    name: "Psilocybin",
    danger: danger.LOW,
    description: "Psychedelic compound in magic mushrooms.",
    commonNames: "Shrooms, Magic Mushrooms",
    effects: "Visuals, euphoria, altered perception.",
    risks: "Nausea, anxiety, confusion.",
    harmReduction: "Safe environment, dose cautiously.",
  },
  {
    name: "LSA",
    danger: danger.LOW,
    description: "Psychedelic compound in morning glory seeds.",
    commonNames: "Morning Glory, Hawaiian Baby Woodrose",
    effects: "Visuals, euphoria, altered perception.",
    risks: "Nausea, vasoconstriction, confusion.",
    harmReduction: "Safe environment, dose cautiously.",
  },
];

export const dissociatives = [
  {
    name: "PCP",
    danger: danger.EXTREME,
    description: "Potent dissociative anesthetic.",
    commonNames: "Angel Dust, Embalming Fluid",
    effects: "Dissociation, hallucinations, euphoria, numbness.",
    risks: "Psychosis, aggression, accidents, overdose.",
    harmReduction: "Avoid use, never use alone, safe environment.",
  },
  {
    name: "3-MeO-PCP",
    danger: danger.HIGH,
    description: "Potent dissociative, arylcyclohexylamine class.",
    commonNames: "3-MeO-PCP",
    effects: "Dissociation, stimulation, euphoria.",
    risks: "Psychosis, accidents, overdose.",
    harmReduction:
      "Dose cautiously, safe environment, avoid mixing with other drugs.",
  },
  {
    name: "3-HO-PCP",
    danger: danger.HIGH,
    description: "Dissociative, arylcyclohexylamine class.",
    commonNames: "3-HO-PCP",
    effects: "Dissociation, stimulation, euphoria.",
    risks: "Psychosis, accidents, overdose.",
    harmReduction:
      "Dose cautiously, safe environment, avoid mixing with other drugs.",
  },
  {
    name: "MXE",
    danger: danger.HIGH,
    description: "Dissociative, similar to ketamine.",
    commonNames: "Methoxetamine, MXE",
    effects: "Dissociation, euphoria, numbness.",
    risks: "Psychosis, accidents, overdose.",
    harmReduction:
      "Dose cautiously, safe environment, avoid mixing with other drugs.",
  },
  {
    name: "Ketamine",
    danger: danger.MODERATE,
    description: "Dissociative anesthetic, used medically and recreationally.",
    commonNames: "K, Special K, Kit Kat",
    effects: "Dissociation, euphoria, numbness.",
    risks: "Bladder issues, accidents, confusion.",
    harmReduction: "Dose cautiously, safe environment, avoid frequent use.",
  },
  {
    name: "DCK",
    danger: danger.MODERATE,
    description: "Dissociative, similar to ketamine.",
    commonNames: "Deschloroketamine, DCK",
    effects: "Dissociation, euphoria, numbness.",
    risks: "Bladder issues, accidents, confusion.",
    harmReduction: "Dose cautiously, safe environment, avoid frequent use.",
  },
  {
    name: "DXM",
    danger: danger.MODERATE,
    description: "Cough suppressant with dissociative effects at high doses.",
    commonNames: "Robo, Triple C, Dex",
    effects: "Dissociation, euphoria, hallucinations.",
    risks: "Liver toxicity, accidents, confusion.",
    harmReduction:
      "Avoid high doses, use only as directed, avoid mixing with other drugs.",
  },
  {
    name: "Nitrous Oxide",
    danger: danger.LOW,
    description: "Inhaled dissociative, used medically and recreationally.",
    commonNames: "Laughing Gas, Whippets",
    effects: "Euphoria, dissociation, giddiness.",
    risks: "Oxygen deprivation, nerve damage (chronic use).",
    harmReduction: "Use in well-ventilated area, avoid frequent use.",
  },
];

export const cannabis = [
  {
    name: "THC-O",
    danger: danger.MODERATE,
    description: "Synthetic cannabinoid, more potent than THC.",
    commonNames: "THC-O, THC Acetate",
    effects: "Euphoria, altered perception, relaxation.",
    risks: "Overdose, anxiety, confusion.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "Concentrates/Dabs",
    danger: danger.MODERATE,
    description: "Highly concentrated cannabis extracts.",
    commonNames: "Wax, Shatter, Budder, Dabs",
    effects: "Intense euphoria, relaxation, altered perception.",
    risks: "Overdose, anxiety, confusion.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "Edibles",
    danger: danger.MODERATE,
    description: "Cannabis-infused food products.",
    commonNames: "Brownies, Gummies, Cookies",
    effects: "Euphoria, relaxation, altered perception.",
    risks: "Delayed onset, overdose, anxiety.",
    harmReduction: "Start with low dose, wait before redosing.",
  },
  {
    name: "HHC",
    danger: danger.LOW,
    description: "Semi-synthetic cannabinoid, similar to THC.",
    commonNames: "HHC, Hexahydrocannabinol",
    effects: "Euphoria, relaxation, altered perception.",
    risks: "Unknown long-term effects, anxiety.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "Delta-10 THC",
    danger: danger.LOW,
    description: "Minor cannabinoid, similar to THC.",
    commonNames: "Delta-10 THC",
    effects: "Euphoria, relaxation, altered perception.",
    risks: "Unknown long-term effects, anxiety.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "Delta-9 THC",
    danger: danger.LOW,
    description: "Primary psychoactive component of cannabis.",
    commonNames: "THC, Delta-9",
    effects: "Euphoria, relaxation, altered perception.",
    risks: "Anxiety, paranoia, confusion.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "THC",
    danger: danger.LOW,
    description: "Primary psychoactive component of cannabis.",
    commonNames: "THC, Delta-9",
    effects: "Euphoria, relaxation, altered perception.",
    risks: "Anxiety, paranoia, confusion.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "Delta-8 THC",
    danger: danger.LOW,
    description: "Minor cannabinoid, similar to THC.",
    commonNames: "Delta-8 THC",
    effects: "Euphoria, relaxation, altered perception.",
    risks: "Unknown long-term effects, anxiety.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "Hash",
    danger: danger.LOW,
    description: "Concentrated cannabis resin.",
    commonNames: "Hashish, Hash",
    effects: "Euphoria, relaxation, altered perception.",
    risks: "Anxiety, confusion, overdose (rare).",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "CBG",
    danger: danger.LOW,
    description: "Non-psychoactive cannabinoid.",
    commonNames: "CBG, Cannabigerol",
    effects: "Relaxation, mild euphoria (rare).",
    risks: "Unknown long-term effects.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "CBN",
    danger: danger.LOW,
    description: "Mildly psychoactive cannabinoid.",
    commonNames: "CBN, Cannabinol",
    effects: "Relaxation, mild euphoria (rare).",
    risks: "Unknown long-term effects.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
  {
    name: "CBD",
    danger: danger.LOW,
    description: "Non-psychoactive cannabinoid.",
    commonNames: "CBD, Cannabidiol",
    effects: "Relaxation, anti-anxiety, anti-inflammatory.",
    risks: "Unknown long-term effects.",
    harmReduction: "Dose cautiously, avoid mixing with other drugs.",
  },
];

export const depressants = [
  {
    name: "GHB",
    danger: danger.EXTREME,
    description:
      "Potent CNS depressant, used recreationally and as a medication.",
    commonNames: "G, Liquid Ecstasy, Georgia Home Boy",
    effects: "Euphoria, relaxation, sedation.",
    risks: "Overdose, respiratory depression, addiction, amnesia.",
    harmReduction:
      "Dose very cautiously, avoid mixing with alcohol or other depressants.",
  },
  {
    name: "GBL",
    danger: danger.EXTREME,
    description: "Prodrug for GHB, industrial solvent.",
    commonNames: "GBL, Gamma-Butyrolactone",
    effects: "Euphoria, relaxation, sedation.",
    risks: "Overdose, respiratory depression, addiction, amnesia.",
    harmReduction:
      "Dose very cautiously, avoid mixing with alcohol or other depressants.",
  },
  {
    name: "Barbiturates",
    danger: danger.HIGH,
    description: "CNS depressants, formerly used for anxiety and sleep.",
    commonNames: "Barbs, Downers",
    effects: "Sedation, sleep induction, anxiolysis.",
    risks: "Overdose, respiratory depression, addiction.",
    harmReduction:
      "Avoid use, use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Phenibut",
    danger: danger.MODERATE,
    description: "GABA analog, used for anxiety and sleep.",
    commonNames: "Phenibut, Anvifen",
    effects: "Anxiolysis, relaxation, sedation.",
    risks: "Addiction, withdrawal, overdose.",
    harmReduction:
      "Use only as prescribed, avoid frequent use, taper off slowly.",
  },
  {
    name: "Carisoprodol",
    danger: danger.MODERATE,
    description: "Muscle relaxant with sedative effects.",
    commonNames: "Soma",
    effects: "Muscle relaxation, sedation, euphoria.",
    risks: "Addiction, overdose, drowsiness.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Zolpidem",
    danger: danger.MODERATE,
    description: "Sedative-hypnotic for insomnia.",
    commonNames: "Ambien, Stilnox",
    effects: "Sleep induction, sedation.",
    risks: "Sleepwalking, amnesia, addiction.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Zopiclone",
    danger: danger.MODERATE,
    description: "Sedative-hypnotic for insomnia.",
    commonNames: "Imovane, Zimovane",
    effects: "Sleep induction, sedation.",
    risks: "Sleepwalking, amnesia, addiction.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Eszopiclone",
    danger: danger.MODERATE,
    description: "Sedative-hypnotic for insomnia.",
    commonNames: "Lunesta",
    effects: "Sleep induction, sedation.",
    risks: "Sleepwalking, amnesia, addiction.",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Pregabalin",
    danger: danger.LOW,
    description: "GABA analog for nerve pain and anxiety.",
    commonNames: "Lyrica",
    effects: "Anxiolysis, relaxation, sedation.",
    risks: "Drowsiness, dizziness, addiction (rare).",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Gabapentin",
    danger: danger.LOW,
    description: "GABA analog for nerve pain and seizures.",
    commonNames: "Neurontin",
    effects: "Anxiolysis, relaxation, sedation.",
    risks: "Drowsiness, dizziness, addiction (rare).",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
  {
    name: "Baclofen",
    danger: danger.LOW,
    description: "Muscle relaxant and antispastic agent.",
    commonNames: "Lioresal",
    effects: "Muscle relaxation, sedation.",
    risks: "Drowsiness, dizziness, addiction (rare).",
    harmReduction:
      "Use only as prescribed, avoid mixing with other depressants.",
  },
];

export const inhalants = [
  {
    name: "Gasoline",
    danger: danger.EXTREME,
    description: "Volatile fuel, sometimes inhaled for psychoactive effects.",
    commonNames: "Petrol, Gas",
    effects: "Euphoria, dizziness, hallucinations.",
    risks: "Sudden sniffing death, organ damage, addiction.",
    harmReduction: "Avoid use, extremely dangerous.",
  },
  {
    name: "Paint Thinner",
    danger: danger.EXTREME,
    description:
      "Solvent used in paints, sometimes inhaled for psychoactive effects.",
    commonNames: "Thinner, Solvent",
    effects: "Euphoria, dizziness, hallucinations.",
    risks: "Sudden sniffing death, organ damage, addiction.",
    harmReduction: "Avoid use, extremely dangerous.",
  },
  {
    name: "Glue",
    danger: danger.HIGH,
    description: "Adhesive, sometimes inhaled for psychoactive effects.",
    commonNames: "Glue, Solvent",
    effects: "Euphoria, dizziness, hallucinations.",
    risks: "Organ damage, addiction, accidents.",
    harmReduction: "Avoid use, extremely dangerous.",
  },
  {
    name: "Solvents",
    danger: danger.HIGH,
    description: "Various volatile chemicals inhaled for psychoactive effects.",
    commonNames: "Solvents, Inhalants",
    effects: "Euphoria, dizziness, hallucinations.",
    risks: "Organ damage, addiction, accidents.",
    harmReduction: "Avoid use, extremely dangerous.",
  },
  {
    name: "Poppers",
    danger: danger.MODERATE,
    description: "Alkyl nitrites inhaled for muscle relaxation and euphoria.",
    commonNames: "Poppers, Rush, Jungle Juice",
    effects: "Euphoria, muscle relaxation, dizziness.",
    risks: "Headache, drop in blood pressure, rare sudden death.",
    harmReduction: "Use in moderation, avoid mixing with ED medications.",
  },
  {
    name: "Nitrous Oxide",
    danger: danger.MODERATE,
    description: "Inhaled dissociative, used medically and recreationally.",
    commonNames: "Laughing Gas, Whippets",
    effects: "Euphoria, dissociation, giddiness.",
    risks: "Oxygen deprivation, nerve damage (chronic use).",
    harmReduction: "Use in well-ventilated area, avoid frequent use.",
  },
];

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
