import React, { createContext, useReducer } from "react";
import {
  EarthquakeActions,
  EarthquakeState,
  earthquakeReducer,
  initialState,
} from "../reducer/earthquakeReducer";

interface EarthquakeContextProps {
  earthquakeState: EarthquakeState;
  earthquakeDispatch: React.Dispatch<EarthquakeActions>;
}

export const EarthquakeContext = createContext<EarthquakeContextProps>(null!);

interface EarthquakeProviderProps {
  children: React.ReactNode;
}

export const EarthquakeProvider = ({ children }: EarthquakeProviderProps) => {
  const [earthquakeState, earthquakeDispatch] = useReducer(
    earthquakeReducer,
    initialState
  );

  return (
    <EarthquakeContext.Provider value={{ earthquakeState, earthquakeDispatch }}>
      {children}
    </EarthquakeContext.Provider>
  );
};
