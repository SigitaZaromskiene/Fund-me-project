import { useContext, useState } from "react";
import { Global } from "../Contexts/Global";
import SmallBtn from "../Components/SmallBtn";
import axios from "axios";
import ErrorMsg from "../Components/ErrorMsg";

const URL = "http://localhost:3007/story";

function StartFund() {
  const { errMessage, setErrMessage, setNewStory, newStory, setRoute } =
    useContext(Global);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [story, setStory] = useState("");
  const [goal, setGoal] = useState("");

  const publishHandler = (e) => {
    e.preventDefault();
    if (!name || !surname || !story || !goal) {
      setErrMessage("Please fill all details");
      return;
    }

    if (name.trim().length <= 3 || surname.trim().length <= 3) {
      setErrMessage("Name or surname is too short");
      return;
    }

    if (!isFinite(goal) || goal.includes(".") || goal.includes(",")) {
      setErrMessage("Goal is not correct number");
      return;
    }

    axios
      .post(URL, { name, surname, story, goal }, { withCredentials: true })
      .then((res) => {
        setNewStory(res.data);
        setRoute("fundraisers");
        setName("");
        setSurname("");
        setGoal("");
        setStory("");
      })
      .catch((err) => setErrMessage("404"));
  };

  return (
    <div className="start-fund-container wrapper">
      <form className="start-fund-form">
        <div className="start-fund-form__upper">
          <div className="start-fund-form__upper--name">
            <label>Name</label>
            <input
              type="text"
              value={name}
              pattern="[a-zA-Z]*"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="start-fund-form__upper--surname">
            <label>Surname</label>
            <input
              type="text"
              value={surname}
              pattern="[a-zA-Z]*"
              onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="start-fund-form__story">
          <label>Story</label>
          <textarea
            type="text"
            value={story}
            onChange={(e) => setStory(e.target.value)}
          ></textarea>
        </div>
        <div className="start-fund-form__upper--goal">
          <label>Goal</label>
          <input
            type="number"
            min="0"
            placeholder="&euro;"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          ></input>
        </div>
        <SmallBtn text="Publish" action={publishHandler}></SmallBtn>
      </form>
      {errMessage ? <ErrorMsg errorMsg={errMessage}></ErrorMsg> : null}
    </div>
  );
}

export default StartFund;
