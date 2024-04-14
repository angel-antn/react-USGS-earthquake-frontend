export const getMagTypeColor = (magType: string) => {
  switch (magType) {
    case "md":
      return "violet";
    case "ml":
      return "indigo";
    case "ms":
      return "blue";
    case "mw":
      return "cyan";
    case "me":
      return "emerald";
    case "mi":
      return "amber";
    case "mb":
      return "red";
    case "mlg":
      return "fuchsia";
    default:
      return "gray";
  }
};
