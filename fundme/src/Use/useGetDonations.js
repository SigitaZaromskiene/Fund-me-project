import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:3007/donations";

export const useGetDonations = () => {
  const [donation, setDonation] = useState(null);
  const [updateDonation, setUpdateonation] = useState(null);

  useEffect(() => {
    if (updateDonation === null) {
      return;
    }
    axios.post(URL, setDonation);
  }, [updateDonation]);

  return [donation, setUpdateonation];
};
