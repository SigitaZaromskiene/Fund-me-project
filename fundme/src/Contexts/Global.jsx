import { createContext, useState, useEffect } from "react";
import { useGetFundraisersList } from "../Use/useGetFundraisersList";
import { useSetDonations } from "../Use/useSetDonations";
import axios from "axios";

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

  const [loggedName, setLoggedName] = useState("");
  const [isLogged, setIsLogged] = useState(null);

  const [newStory, setNewStory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3007/login", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setIsLogged(true);
          setLoggedName(res.data.name);
        } else {
          setIsLogged(false);
        }
      })
      .catch((err) => {
        setErrMessage("404");
      });
  }, []);

  useEffect(() => {
    setUpdate(Date.now());
  }, [setUpdate, response, newStory]);

  useEffect(() => {
    if (errMessage === null) {
      return;
    }
    setTimeout(() => {
      setErrMessage(null);
    }, 3000);
  }, [errMessage]);

  useEffect(() => {
    if (newStory === null) {
      return;
    }
    setTimeout(() => {
      setNewStory(null);
    }, 3000);
  }, [newStory]);

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
        loggedName,
        setLoggedName,
        isLogged,
        setIsLogged,
        newStory,
        setNewStory,
      }}
    >
      {children}
    </Global.Provider>
  );
};
