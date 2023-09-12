import SmallBtn from "./SmallBtn";
import { useState } from "react";

function AddListDonation({ lis }) {
  const [name, setName] = useState("");
  const [sum, setSum] = useState("");

  console.log(name);

  return (
    <div className="fundraiser__lists--list--middle--donations">
      <div className="fundraiser__lists--list--middle--donations--header">
        <p>Thank you for your donations</p>
      </div>

      <div className="fundraiser__lists--list--middle--donations--name">
        <div>
          <label>Name</label>
          <input
            value="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Sum</label>
          <input
            value="sum"
            type="number"
            min="0"
            max="5000"
            placeholder="&euro;"
            onChange={(e) => setSum(e.target.value)}
          ></input>
        </div>
      </div>
      <SmallBtn className="small-button" text="Donate"></SmallBtn>
    </div>
  );
}

export default AddListDonation;
