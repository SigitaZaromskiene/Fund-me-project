import GoalReached from "./GoalReached";

function DonatedGoal({ lis }) {
  return (
    <div className="fundraiser__lists--list--middle">
      {lis.prc >= 100 ? (
        <GoalReached />
      ) : (
        <>
          <p className="fundraiser__lists--list--middle--goal">
            {lis.goal} &euro; goal
          </p>
          <p>{lis.donated} &euro; donated</p>
          <div className="fundraiser__lists--list--middle--goal--border">
            <div
              style={{
                backgroundColor: "#4a90e2",
                width: lis.prc + "%",
                height: "100%",
              }}
            >
              {" "}
            </div>
            <div
              style={{
                paddingTop: "5px",
              }}
            >
              {lis.prc} %
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default DonatedGoal;
