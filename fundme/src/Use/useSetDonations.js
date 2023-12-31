import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:3007/fundraisers";

export const useSetDonations = () => {
  const [donation, setDonation] = useState(null);
  const [destroyFundraiser, setDestroyFundraiser] = useState(null);
  const [response, setResponse] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

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
          prc: donation.prc,
        },
        { withCredentials: true }
      )
      .then((res) => setResponse(res.data))
      .catch((err) => setErrMsg("Connection error, cannot donate"));
  }, [donation]);

  useEffect(() => {
    if (destroyFundraiser === null) {
      return;
    }

    axios
      .delete(
        URL + "/" + destroyFundraiser.id,
        { destroyFundraiser },
        { withCredentials: true }
      )
      .then((res) => setResponse(res.data))
      .catch((err) => setErrMsg("Connection error, cannot delete"));
  }, [destroyFundraiser]);

  return [
    response,
    setDonation,
    setDestroyFundraiser,
    setErrMsg,
    errMsg,
    donation,
  ];
};
