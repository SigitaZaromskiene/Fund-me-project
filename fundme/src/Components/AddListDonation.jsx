import SmallBtn from "./SmallBtn";
import { useContext, useState } from "react";
import { Global } from "../Contexts/Global";
import SmallErrorMsg from "./SmallErrorMsg";

function AddListDonation({ lis }) {
  const [name, setName] = useState("");
  const [sum, setSum] = useState("");

  const {
    setDonation,
    setErrMessage,
    errMessage,
    createList,
    response,
    donation,
  } = useContext(Global);

  const percent = (lis.donated / lis.goal) * 100;

  const donateHandler = () => {
    if (name.length === 0) {
      setErrMessage("Please enter your name");

      return;
    } else if (name.trim().length < 3) {
      setErrMessage("Name is too short");
    } else if (/\d/.test(name)) {
      setErrMessage("Name cannot contain numbers");
    }
    if (sum.length === 0) {
      setErrMessage("Please enter sum");
    } else if (!isFinite(sum) || sum.includes(".") || sum.includes(",")) {
      setErrMessage("Please enter valid number");
    }

    setDonation({
      donatorName: name,
      donatorSum: parseInt(sum),
      id: lis.id,
      prc: parseInt(Number(lis.prc) + percent),
      donated: parseInt(Number(lis.donated) + Number(sum)),
    });
    setName("");
    setSum("");
  };

  return (
    <div className="fundraiser__lists--list--middle--donations">
      <div className="fundraiser__lists--list--middle--donations--header">
        {errMessage ? (
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
