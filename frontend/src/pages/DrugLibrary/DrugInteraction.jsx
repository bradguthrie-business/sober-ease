import React from "react";
import "./DrugInteraction.scss";

export const DrugInteraction = () => {
  return (
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
  );
};
