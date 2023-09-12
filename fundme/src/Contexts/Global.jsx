import { createContext, useState } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("fundraisers");

  const [loading, setLoading] = useState(false);
  return (
    <Global.Provider value={{ route, setRoute, loading, setLoading }}>
      {children}
    </Global.Provider>
  );
};
