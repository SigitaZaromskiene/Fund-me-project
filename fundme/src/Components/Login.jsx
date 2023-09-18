import SmallBtn from "../Components/SmallBtn";
import { useState, useContext } from "react";
import { Global } from "../Contexts/Global";
import ErrorMsg from "./ErrorMsg";

const URL = "http://localhost:3007/login";

function Login() {
  const { setErrMessage, setLoginData, setRoute, errMessage } =
    useContext(Global);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  async function loginHandler(e) {
    e.preventDefault();
    if (!name || !psw) {
      setErrMessage("Please fill all details");
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

      if (!response.ok) {
        throw new Error("Error 404");
      }
      const data = await response.json();
      setLoginData(data);
      setName("");
      setPsw("");
      setRoute("home");
    } catch (error) {
      setErrMessage(error.message);
      setName("");
      setPsw("");
    }
  }

  return (
    <div className="login-form-container wrapper">
      <form className="login-form" onSubmit={loginHandler}>
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
        <SmallBtn type="submit" text="Login"></SmallBtn>
      </form>
      {errMessage ? <ErrorMsg errorMsg={errMessage}></ErrorMsg> : null}
    </div>
  );
}

export default Login;
