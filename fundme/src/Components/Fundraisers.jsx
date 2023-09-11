import Filter from "./Filter";

function Fundraisers() {
  return (
    <div className="fundraiser wrapper">
      <p className="fundraiser__header">Personal Campaigns Getting Funded</p>
      <div className="fundraiser__header--border"></div>
      <Filter></Filter>
    </div>
  );
}

export default Fundraisers;
