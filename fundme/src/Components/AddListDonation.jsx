import SmallBtn from "./SmallBtn";
import { useContext, useState } from "react";
import { Global } from "../Contexts/Global";

function AddListDonation({ lis }) {
  const [name, setName] = useState("");
  const [sum, setSum] = useState("");

  const { setDonation } = useContext(Global);

  const donateHandler = () => {
    setDonation({
      donatorName: name,
      donatorSum: sum,
      id: lis.id,
      donated: parseInt(Number(lis.donated) + Number(sum)),
    });
    setName("");
    setSum("");
  };

  return (
    <div className="fundraiser__lists--list--middle--donations">
      <div className="fundraiser__lists--list--middle--donations--header">
        <p>Thank you for your donations</p>
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
