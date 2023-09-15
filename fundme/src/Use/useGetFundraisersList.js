import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:3007/fundraisers";

export const useGetFundraisersList = () => {
  const [loading, setLoading] = useState(false);
  const [createList, setCreateList] = useState(null);
  const [update, setUpdate] = useState(null);
  const [message, setErrorMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (update === null) {
      return;
    }
    axios
      .get(URL, { withCredentials: true })
      .then((res) => {
        setCreateList(res.data);
        setLoading(false);
      })
      .catch((err) => setErrorMessage("Connection error, cannot upload"));
  }, [update]);

  return [
    createList,
    setUpdate,
    loading,
    message,
    setErrorMessage,
    setCreateList,
    update,
  ];
};
