import { createContext, useContext, useState } from "react";
import { AppProps } from "../../types";

const appContext = createContext({} as AppProps);

function AppProvider({ children }: { children: React.ReactNode }) {
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
