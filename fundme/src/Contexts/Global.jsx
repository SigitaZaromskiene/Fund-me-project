import { createContext, useState, useEffect } from "react";
import { useGetFundraisersList } from "../Use/useGetFundraisersList";
import { useSetDonations } from "../Use/useSetDonations";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("fundraisers");

  const [
    createList,
    setUpdate,
    loading,
    message,
    setErrorMessage,
    setCreateList,
  ] = useGetFundraisersList();
  const [response, setDonation, setDestroyFundraiser, setErrMsg, errMsg] =
    useSetDonations();

  const [errMessage, setErrMessage] = useState(null);

  const [filterValue, setFilterValue] = useState("");

  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    setUpdate(Date.now());
  }, [setUpdate, response]);

  useEffect(() => {
    if (errMessage === null) {
      return;
    }
    setTimeout(() => {
      setErrMessage(null);
    }, 3000);
  }, [errMessage]);

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
        message,
        setErrorMessage,
        setErrMsg,
        errMsg,
        errMessage,
        setErrMessage,
        setCreateList,
        setFilterValue,
        filterValue,
        loginData,
        setLoginData,
      }}
    >
      {children}
    </Global.Provider>
  );
};
