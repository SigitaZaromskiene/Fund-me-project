import { useState, useContext, useEffect } from "react";
import { Global } from "../Contexts/Global";

function DonatedGoal({ lis }) {
  const { createList } = useContext(Global);

  console.log(createList);

  const list = createList.find((li) => li.id === lis.id);

  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    const percent = (list.donated / list.goal) * 100;

    console.log(percent);
    setProgressBar((prev) => Math.ceil(prev + percent));
  }, []);

  return (
    <div className="fundraiser__lists--list--middle">
      <p className="fundraiser__lists--list--middle--goal">
        {lis.goal} &euro; goal
      </p>
      <p>{lis.donated} &euro; donated</p>
      <div className="fundraiser__lists--list--middle--goal--border">
        <div
          style={{
            backgroundColor: "blue",
            width: progressBar,
            height: '4px'
          }}
        > </div>
          <div
            style={{
              paddingTop: "5px",
            }}
          >
            {progressBar} %
          </div>
       
      </div>
    </div>
  );
}

export default DonatedGoal;
