import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Info,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
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
import "./DrugLibrary.scss";

const DangerIcon = ({ level }) => {
  const iconClass = "drug-icon";

  switch (level) {
    case "EXTREME":
      return <AlertTriangle className={iconClass} />;
    case "HIGH":
      return <AlertCircle className={iconClass} />;
    case "MODERATE":
      return <Info className={iconClass} />;
    case "LOW":
      return <CheckCircle className={iconClass} />;
    default:
      return null;
  }
};

const getDangerClassName = (level) => {
  switch (level) {
    case "EXTREME":
      return "danger-extreme";
    case "HIGH":
      return "danger-high";
    case "MODERATE":
      return "danger-moderate";
    case "LOW":
      return "danger-low";
    default:
      return "";
  }
};

const DrugModal = ({ drug, onClose }) => {
  if (!drug) return null;

  // Accept all info fields as props (already passed in drug object)
  const {
    name,
    danger,
    description,
    commonNames,
    effects,
    risks,
    harmReduction,
  } = drug;

  return (
    <div className="drug-modal-overlay" onClick={onClose}>
      <div className="drug-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="drug-modal-close" onClick={onClose}>
          <X />
        </button>
        <div className="drug-modal-header">
          <h2 className="drug-modal-title">{name}</h2>
          <span className={`drug-modal-danger ${getDangerClassName(danger)}`}>
            <DangerIcon level={danger} />
            {danger}
          </span>
        </div>
        <div className="drug-modal-body">
          <div className="drug-modal-section">
            <h3>Overview</h3>
            <p>{description || "No description available."}</p>
          </div>
          <div className="drug-modal-section">
            <h3>Common Names</h3>
            <p>{commonNames || name}</p>
          </div>
          <div className="drug-modal-section">
            <h3>Effects</h3>
            <p>{effects || "Effects information not available."}</p>
          </div>
          <div className="drug-modal-section">
            <h3>Risks & Warnings</h3>
            <p>{risks || "Risk information not available."}</p>
          </div>
          <div className="drug-modal-section">
            <h3>Harm Reduction</h3>
            <p>
              {harmReduction ||
                "Always start with a low dose and avoid mixing substances."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const dangerOrder = ["EXTREME", "HIGH", "MODERATE", "LOW"];
const DrugCategory = ({ title, drugs, colorClass, onDrugClick }) => {
  const [open, setOpen] = useState(false);
  const sortedDrugs = [...drugs].sort((a, b) => {
    const aIdx = dangerOrder.indexOf(a.danger);
    const bIdx = dangerOrder.indexOf(b.danger);
    return aIdx - bIdx;
  });
  return (
    <div className="drug-category-card">
      <div
        className="drug-category-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 className={`drug-category-title ${colorClass}`}>{title}</h3>
        <button
          className="drug-category-caret"
          aria-label={open ? `Collapse ${title}` : `Expand ${title}`}
          onClick={() => setOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginLeft: 8,
          }}
        >
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      {open && (
        <>
          <div className="drug-list-container">
            <ul className="drug-list">
              {sortedDrugs.map((drug) => (
                <li
                  key={drug.name}
                  className={`drug-item ${getDangerClassName(drug.danger)}`}
                  onClick={() => onDrugClick(drug)}
                >
                  <DangerIcon level={drug.danger} />
                  <span className="drug-name">{drug.name}</span>
                  <span className="drug-danger-level">{drug.danger}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="drug-count">
            {drugs.length} total substances of the {title} category.
          </div>
        </>
      )}
    </div>
  );
};

export default function DrugLibrary() {
  const [selectedDrug, setSelectedDrug] = useState(null);

  const handleDrugClick = (drug) => {
    setSelectedDrug(drug);
  };

  const handleCloseModal = () => {
    setSelectedDrug(null);
  };

  return (
    <div className="drug-library-page">
      <nav className="drug-library-nav">
        <div className="drug-library-nav-content">
          <h1 className="drug-library-nav-title">SoberEase</h1>
          <Link to="/dashboard" className="drug-library-nav-link">
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="drug-library-main">
        <PageHeader
          title="Drug Library"
          subtitle="Evidence-based harm reduction information for common substances."
        />

        <div className="drug-library-grid">
          <DrugCategory
            title="Alcohol"
            drugs={alcohol}
            colorClass="text-amber"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Opioids"
            drugs={opioids}
            colorClass="text-red"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Benzodiazepines"
            drugs={benzodiazepines}
            colorClass="text-purple"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Stimulants"
            drugs={stimulants}
            colorClass="text-orange"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Psychedelics"
            drugs={psychedelics}
            colorClass="text-green"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Dissociatives"
            drugs={dissociatives}
            colorClass="text-blue"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Cannabis"
            drugs={cannabis}
            colorClass="text-emerald"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Depressants"
            drugs={depressants}
            colorClass="text-indigo"
            onDrugClick={handleDrugClick}
          />
          <DrugCategory
            title="Inhalants"
            drugs={inhalants}
            colorClass="text-slate"
            onDrugClick={handleDrugClick}
          />
        </div>

        {/* <div className="interaction-warning">
          <h3 className="interaction-warning-title">Drug Interaction Chart</h3>
          <p className="interaction-warning-text">
            Understanding drug interactions is critical for harm reduction. Some
            combinations can be dangerous or deadly.
          </p>
          <button className="interaction-warning-button">
            View Interaction Matrix
          </button>
        </div> */}
      </main>

      <DrugModal drug={selectedDrug} onClose={handleCloseModal} />
    </div>
  );
}
