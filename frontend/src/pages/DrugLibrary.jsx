import { Link } from "react-router-dom";
import { AlertTriangle, AlertCircle, Info, CheckCircle } from "lucide-react";
import {
  alcohol,
  opioids,
  benzodiazepines,
  stimulants,
  psychedelics,
  dissociatives,
  cannabis,
  depressants,
  inhalants,
} from "../utils/drugData";
import PageHeader from "../components/PageHeader";
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

const DrugCategory = ({ title, drugs, colorClass }) => (
  <div className="drug-category-card">
    <h3 className={`drug-category-title ${colorClass}`}>{title}</h3>
    <div className="drug-list-container">
      <ul className="drug-list">
        {drugs.map((drug) => (
          <li
            key={drug.name}
            className={`drug-item ${getDangerClassName(drug.danger)}`}
          >
            <DangerIcon level={drug.danger} />
            <span className="drug-name">{drug.name}</span>
            <span className="drug-danger-level">{drug.danger}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="drug-count">{drugs.length} substances</div>
  </div>
);

export default function DrugLibrary() {
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
          subtitle="Evidence-based harm reduction information"
        />

        <div className="drug-library-grid">
          <DrugCategory
            title="Alcohol"
            drugs={alcohol}
            colorClass="text-amber"
          />
          <DrugCategory title="Opioids" drugs={opioids} colorClass="text-red" />
          <DrugCategory
            title="Benzodiazepines"
            drugs={benzodiazepines}
            colorClass="text-purple"
          />
          <DrugCategory
            title="Stimulants"
            drugs={stimulants}
            colorClass="text-orange"
          />
          <DrugCategory
            title="Psychedelics"
            drugs={psychedelics}
            colorClass="text-green"
          />
          <DrugCategory
            title="Dissociatives"
            drugs={dissociatives}
            colorClass="text-blue"
          />
          <DrugCategory
            title="Cannabis"
            drugs={cannabis}
            colorClass="text-emerald"
          />
          <DrugCategory
            title="Depressants"
            drugs={depressants}
            colorClass="text-indigo"
          />
          <DrugCategory
            title="Inhalants"
            drugs={inhalants}
            colorClass="text-slate"
          />
        </div>

        <div className="interaction-warning">
          <h3 className="interaction-warning-title">Drug Interaction Chart</h3>
          <p className="interaction-warning-text">
            Understanding drug interactions is critical for harm reduction. Some
            combinations can be dangerous or deadly.
          </p>
          <button className="interaction-warning-button">
            View Interaction Matrix
          </button>
        </div>
      </main>
    </div>
  );
}
