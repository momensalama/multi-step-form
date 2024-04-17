import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { AppProvider } from "./context/AppContext.js";
import { AddOnsProvider } from "./context/AddOnsContext.js";
import { SelectPlanProvider } from "./context/SelectPlanContext.js";
import { PersonalInfoProvider } from "./context/PersonalInfoContext.js";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppProvider>
        <AddOnsProvider>
          <SelectPlanProvider>
            <PersonalInfoProvider>
              <App />
            </PersonalInfoProvider>
          </SelectPlanProvider>
        </AddOnsProvider>
      </AppProvider>
    </React.StrictMode>
  );
}
