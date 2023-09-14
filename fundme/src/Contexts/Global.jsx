import { createContext, useState, useEffect } from "react";
import { useGetFundraisersList } from "../Use/useGetFundraisersList";
import { useSetDonations } from "../Use/useSetDonations";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("fundraisers");
  const [errorMsg, setErrorMsg] = useState(null);

  const [createList, setUpdate, loading] = useGetFundraisersList();
  const [response, setDonation, setDestroyFundraiser] = useSetDonations();

  useEffect(() => {
    setUpdate(Date.now());
  }, [setUpdate, response]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        loading,
        createList,
        response,
        setDonation,
        setDestroyFundraiser,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </Global.Provider>
  );
};
