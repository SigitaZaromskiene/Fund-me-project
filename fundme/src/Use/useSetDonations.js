import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:3007/fundraisers";

export const useSetDonations = () => {
  const [donation, setDonation] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (donation === null) {
      return;
    }
    axios
      .put(
        URL + "/" + donation.id,
        {
          name: donation.donatorName,
          sum: donation.donatorSum,
          donated: donation.donated,
        },
        { withCredentials: true }
      )
      .then((res) => setResponse(res.data));
  }, [donation]);

  return [response, setDonation];
};
