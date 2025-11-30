import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import {
  alcohol,
  benzodiazepines,
  cannabis,
  depressants,
  dissociatives,
  inhalants,
  opioids,
  psychedelics,
  stimulants,
} from "../../utils/drugData";
import { DrugCategory } from "./DrugCategory";
import { DrugModal } from "./DrugModal";
import { DrugInteraction } from "./DrugInteraction";
import "./DrugLibrary.scss";

const DrugLibrary = () => {
  const [selectedSubstance, setSelectedSubstance] = useState(null);

  const handleSubstanceClick = (substance) => {
    setSelectedSubstance(substance);
  };

  const handleCloseModal = () => {
    setSelectedSubstance(null);
  };

  return (
    <div className="drug-library-page">
      <main className="drug-library-main">
        <PageHeader
          title="Drug Library"
          subtitle="Evidence-based harm reduction information for common substances."
        />

        <DrugInteraction />

        <div className="drug-library-grid">
          <DrugCategory
            title="Alcohol"
            drugs={alcohol}
            colorClass="text-amber"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Opioids"
            drugs={opioids}
            colorClass="text-red"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Benzodiazepines"
            drugs={benzodiazepines}
            colorClass="text-purple"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Stimulants"
            drugs={stimulants}
            colorClass="text-orange"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Psychedelics"
            drugs={psychedelics}
            colorClass="text-green"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Dissociatives"
            drugs={dissociatives}
            colorClass="text-blue"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Cannabis"
            drugs={cannabis}
            colorClass="text-emerald"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Depressants"
            drugs={depressants}
            colorClass="text-indigo"
            onDrugClick={handleSubstanceClick}
          />
          <DrugCategory
            title="Inhalants"
            drugs={inhalants}
            colorClass="text-slate"
            onDrugClick={handleSubstanceClick}
          />
        </div>
      </main>
      <DrugModal drug={selectedSubstance} onClose={handleCloseModal} />
    </div>
  );
};

export default DrugLibrary;
