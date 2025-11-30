import { AlertTriangle, AlertCircle, Info, CheckCircle } from "lucide-react";

export const DangerIcon = ({ level }) => {
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

// eslint-disable-next-line react-refresh/only-export-components
export const getDangerClassName = (level) => {
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
