import { X } from "lucide-react";
import { DangerIcon } from "../../components/DrugLibrary/DangerIcon";
import { getDangerClassName } from "../../components/DrugLibrary/DrugLibraryUtils";
import "./DrugModal.scss";

export const DrugModal = ({ drug, onClose }) => {
  if (!drug) return null;
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
        <button className="drug-modal-close" onClick={onClose} type="button">
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
