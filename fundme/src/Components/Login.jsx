import SmallBtn from "../Components/SmallBtn";
import { useState, useContext } from "react";
import { Global } from "../Contexts/Global";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";

function Login() {
  const { setErrMessage, setLoggedName, setRoute, errMessage, setIsLogged } =
    useContext(Global);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  async function loginHandler(e) {
    e.preventDefault();
    if (!name || !psw) {
      setErrMessage("Please fill all details");
      return;
    }

    axios
      .post(
        "http://localhost:3007/login",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setName("");
          setPsw("");
          setRoute("numbers");
          setIsLogged(true);
          setLoggedName(res.data.name);
        } else {
          setErrMessage("Not correct details");
          setName("");
          setPsw("");
        }
      });
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
