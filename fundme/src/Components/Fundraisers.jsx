import Filter from "./Filter";
import React from "react";
import Loader from "./Loader";
import { useContext } from "react";
import { Global } from "../Contexts/Global";
import SmallBtn from "./SmallBtn";
import DonatedGoal from "./DonatedGoal";
import AddListDonation from "./AddListDonation";
import LastDoantions from "./LastDonations";
import ErrorMsg from "./ErrorMsg";

function Fundraisers() {
  const {
    createList,
    loading,
    setDestroyFundraiser,
    message,
    errMsg,
    filterValue,
  } = useContext(Global);

  let filteredList = createList;

  if (filterValue === "1") {
    filteredList = createList.filter((li) => li);
  }
  if (filterValue === "2") {
    filteredList = createList.filter(
      (li) => li.donated < li.goal && li.donated !== 0
    );
  }
  if (filterValue === "3") {
    filteredList = createList.filter((li) => li.donated === 0);
  }
  if (filterValue === "4") {
    filteredList = createList.filter((li) => li.donated >= li.goal);
  }

  return (
    <div className="fundraiser wrapper">
      {message && <ErrorMsg errorMsg={message}></ErrorMsg>}
      {errMsg && <ErrorMsg errorMsg={errMsg}></ErrorMsg>}
      <p className="fundraiser__header">Personal Campaigns Getting Funded</p>
      <div className="fundraiser__header--border"></div>
      <Filter></Filter>

      <ul className="fundraiser__lists">
        {loading && <Loader />}
        {createList === null && !loading ? (
          <p style={{ color: "crimson" }}>No fundraisers available</p>
        ) : null}
        {createList !== null
          ? filteredList.map((lis) => (
              <div key={lis.id} className="fundraiser__lists--list">
                <div className="fundraiser__lists--list--left">
                  <div className="fundraiser__lists--list--left--name">
                    <p>{lis.name}</p>
                    <p>{lis.surname}</p>
                  </div>
                  <div>{lis.story}</div>
                  <SmallBtn
                    className="small-button"
                    text="Delete"
                    action={() => setDestroyFundraiser({ id: lis.id })}
                  ></SmallBtn>
                </div>
                <DonatedGoal lis={lis} />
                <AddListDonation lis={lis}></AddListDonation>
                <LastDoantions lis={lis}></LastDoantions>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Fundraisers;
