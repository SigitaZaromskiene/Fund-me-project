import SmallBtn from "../Components/SmallBtn";
import { useState, useContext } from "react";
import { Global } from "../Contexts/Global";
import ErrorMsg from "../Components/ErrorMsg";
import { Link } from "react-router-dom";

const URL = "http://localhost:3007/register";

function Register() {
  const { setErrMessage, errMessage, setLoginData } = useContext(Global);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [pswRepeat, setPswRepeat] = useState("");

  async function registerHandler(e) {
    e.preventDefault();

    if (!name || !psw || !pswRepeat) {
      setErrMessage("Please fill all fields");
      return;
    } else if (name.length < 3) {
      setErrMessage("Name is too short");
      return;
    } else if (psw !== pswRepeat) {
      setErrMessage("Password dismatch");
      return;
    } else if (psw.trim().length <= 3 || pswRepeat.trim().length <= 3) {
      setErrMessage("Password is too short");
      return;
    }

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, psw }),
      });

      const data = await response.json();
      setLoginData(data);
      setName("");
      setPsw("");
      setPswRepeat("");
    } catch (error) {
      setErrMessage("Cannot register");
    }
  }
  return (
    <div className="login-form-container wrapper">
      <form className="login-form" onSubmit={registerHandler}>
        <div>
          <label>Name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            value={psw}
            type="number"
            onChange={(e) => setPsw(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            value={pswRepeat}
            type="number"
            onChange={(e) => setPswRepeat(e.target.value)}
          ></input>
        </div>
        <SmallBtn type="submit" text="Register"></SmallBtn>
      </form>
      {errMessage ? <ErrorMsg errorMsg={errMessage}></ErrorMsg> : null}
    </div>
  );
}

export default Register;
