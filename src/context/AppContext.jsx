import { createContext, useContext, useState } from "react";

const appContext = createContext();

function AppProvider({ children }) {
  const [curStep, setCurStep] = useState(1);

  return (
    <appContext.Provider value={{ curStep, setCurStep }}>
      {children}
    </appContext.Provider>
  );
}

function useApp() {
  const context = useContext(appContext);
  if (context === undefined)
    throw new Error("appContext was used outside of the AppProvider");
  return context;
}

export { AppProvider, useApp };
