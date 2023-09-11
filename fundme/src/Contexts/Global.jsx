import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("fundraisers");
  return (
    <Global.Provider value={{ route, setRoute }}>{children}</Global.Provider>
  );
};