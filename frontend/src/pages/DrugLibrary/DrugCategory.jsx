import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { DangerIcon } from "../../components/DrugLibrary/DangerIcon";
import { getDangerClassName } from "../../components/DrugLibrary/DrugLibraryUtils";
import "./DrugCategory.scss";

const dangerOrder = ["EXTREME", "HIGH", "MODERATE", "LOW"];

export const DrugCategory = ({ title, drugs, colorClass, onDrugClick }) => {
  const [open, setOpen] = useState(false);
  const sortedDrugs = [...drugs].sort((a, b) => {
    const aIdx = dangerOrder.indexOf(a.danger);
    const bIdx = dangerOrder.indexOf(b.danger);
    return aIdx - bIdx;
  });
  return (
    <div className="drug-category-card">
      <div className="drug-category-header">
        <h3 className={`drug-category-title ${colorClass}`}>{title}</h3>
        <button
          className="drug-category-caret"
          aria-label={open ? `Collapse ${title}` : `Expand ${title}`}
          onClick={() => setOpen((v) => !v)}
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
