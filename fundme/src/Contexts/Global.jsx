import { createContext, useState, useEffect } from "react";
import { useGetFundraisersList } from "../Use/useGetFundraisersList";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("fundraisers");

  const [createList, setUpdate, loading] = useGetFundraisersList();

  useEffect(() => {
    setUpdate(Date.now());
  }, [setUpdate]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        loading,
        createList,
      }}
    >
      {children}
    </Global.Provider>
  );
};
