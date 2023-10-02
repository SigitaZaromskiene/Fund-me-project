import SmallBtn from "./SmallBtn";
import { useContext, useState } from "react";
import { Global } from "../Contexts/Global";
import SmallErrorMsg from "./SmallErrorMsg";

function AddListDonation({ lis }) {
  const [name, setName] = useState("");
  const [sum, setSum] = useState("");

  const { setDonation, setErrMessage, errMessage, donation } =
    useContext(Global);

  const donateHandler = () => {
    if (name.length === 0) {
      setErrMessage("Please enter your name");
      return;
    } else if (name.trim().length < 3) {
      setErrMessage("Name is too short");
      return;
    } else if (/\d/.test(name)) {
      setErrMessage("Name cannot contain numbers");
      return;
    }
    if (sum.length === 0) {
      setErrMessage("Please enter sum");
      return;
    } else if (!isFinite(sum) || sum.includes(".") || sum.includes(",")) {
      setErrMessage("Please enter valid number");
      return;
    }

    setDonation({
      donatorName: name,
      donatorSum: parseInt(sum),
      id: lis.id,
      prc: (sum / lis.goal) * 100 + lis.prc,
      donated: parseInt(Number(lis.donated) + Number(sum)),
    });
    setName("");
    setSum("");
  };

  return (
    <div className="fundraiser__lists--list--middle--donations">
      <div className="fundraiser__lists--list--middle--donations--header">
        {donation !== null && lis.id === donation.id && errMessage ? (
          <SmallErrorMsg message={errMessage}></SmallErrorMsg>
        ) : (
          <p>Thank you for your donations</p>
        )}
      </div>

      <div className="fundraiser__lists--list--middle--donations--name">
        <div>
          <label>Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Sum</label>
          <input
            value={sum}
            type="number"
            min="0"
            max="5000"
            placeholder="&euro;"
            onChange={(e) => setSum(e.target.value)}
          ></input>
        </div>
      </div>
      <SmallBtn
        className="small-button"
        text="Donate"
        action={donateHandler}
      ></SmallBtn>
    </div>
  );
}

export default AddListDonation;
