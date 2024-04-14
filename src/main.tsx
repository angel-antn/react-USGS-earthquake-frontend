import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router/Router.tsx";
import "./index.css";
import { EarthquakeProvider } from "./context/EarthquakeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EarthquakeProvider>
      <AppRouter />
    </EarthquakeProvider>
  </React.StrictMode>
);
