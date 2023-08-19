import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/AppContext.jsx";
import { AddOnsProvider } from "./context/AddOnsContext.jsx";
import { SelectPlanProvider } from "./context/SelectPlanContext.jsx";
import { PersonalInfoProvider } from "./context/PersonalInfoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
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
