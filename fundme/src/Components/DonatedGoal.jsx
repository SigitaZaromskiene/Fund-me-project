import { useState, useContext, useEffect } from "react";
import { Global } from "../Contexts/Global";
import GoalReached from "./GoalReached";

function DonatedGoal({ lis }) {
  const { createList } = useContext(Global);

  const [progressBar, setProgressBar] = useState(0);

  const list = createList.find((li) => li.id === lis.id);

  const percent = (list.donated / list.goal) * 100;

  useEffect(() => {
    setProgressBar((prev) => Math.ceil(prev + percent));
  }, []);

  return (
    <div className="fundraiser__lists--list--middle">
      {progressBar >= 100 ? (
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
                width: progressBar + "%",
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
              {progressBar} %
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default DonatedGoal;
