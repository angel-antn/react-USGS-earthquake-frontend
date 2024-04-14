import { useContext } from "react";
import { EarthquakeContext } from "../context/EarthquakeContext";

export const useEarthquake = () => {
  const context = useContext(EarthquakeContext);
  if (!context) throw new Error("earthquake context is missing");

  return context;
};
