import Filter from "./Filter";
import React from "react";

import Loader from "./Loader";
import { useContext } from "react";
import { Global } from "../Contexts/Global";
import SmallBtn from "./SmallBtn";
import DonatedGoal from "./DonatedGoal";
import AddListDonation from "./AddListDonation";
import LastDoantions from "./LastDonations";

function Fundraisers() {
  const { createList, loading } = useContext(Global);

  return (
    <div className="fundraiser wrapper">
      <p className="fundraiser__header">Personal Campaigns Getting Funded</p>
      <div className="fundraiser__header--border"></div>
      <Filter></Filter>
      <ul className="fundraiser__lists">
        {loading && <Loader />}
        {createList.length !== 0 ? (
          createList.map((lis) => (
            <div key={lis.id} className="fundraiser__lists--list">
              <div className="fundraiser__lists--list--left">
                <div className="fundraiser__lists--list--left--name">
                  <p>{lis.name}</p>
                  <p>{lis.surname}</p>
                </div>
                <div>{lis.story}</div>
                <SmallBtn className="small-button" text="Delete"></SmallBtn>
              </div>
              <DonatedGoal lis={lis}></DonatedGoal>
              <AddListDonation lis={lis}></AddListDonation>
              <LastDoantions lis={lis}></LastDoantions>
            </div>
          ))
        ) : (
          <p style={{ color: "crimson" }}>No fundraisers available</p>
        )}
      </ul>
    </div>
  );
}

export default Fundraisers;
