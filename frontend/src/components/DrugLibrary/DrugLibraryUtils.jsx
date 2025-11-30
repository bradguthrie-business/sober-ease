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
