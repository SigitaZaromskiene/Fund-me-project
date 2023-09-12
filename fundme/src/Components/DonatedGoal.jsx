function DonatedGoal({ lis }) {
  return (
    <div className="fundraiser__lists--list--middle">
      <p className="fundraiser__lists--list--middle--goal">
        {lis.goal} &euro; goal
      </p>
      <p>1000 &euro; donated</p>
      <div className="fundraiser__lists--list--middle--goal--border"></div>
    </div>
  );
}

export default DonatedGoal;
