function DonatedGoal({ lis }) {
  return (
    <div className="fundraiser__lists--list--middle">
      <p className="fundraiser__lists--list--middle--goal">
        {lis.goal} &euro; goal
      </p>
      <p>{lis.donated} &euro; donated</p>
      <div>
        <div className="fundraiser__lists--list--middle--goal--border">
          <div></div>
        </div>
        <div style={{ marginTop: "5px", textAlign: "center" }}>100% funded</div>
      </div>
    </div>
  );
}

export default DonatedGoal;
