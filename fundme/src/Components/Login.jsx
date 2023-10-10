import SmallBtn from "../Components/SmallBtn";
import { useState, useContext } from "react";
import { Global } from "../Contexts/Global";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const { setErrMessage, setLoggedName, errMessage, setIsLogged } =
    useContext(Global);

  console.log(setErrMessage);

  const navigate = useNavigate();

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
        if (res.data.status === "ok") {
          setName("");
          setPsw("");
          navigate("/home");
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
            data-testid="name"
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            value={psw}
            type="number"
            onChange={(e) => setPsw(e.target.value)}
            data-testid="psw"
          ></input>
        </div>
        <SmallBtn data-testid="btn" type="submit" text="Login"></SmallBtn>
      </form>
      {errMessage ? <ErrorMsg errorMsg={errMessage}></ErrorMsg> : null}
    </div>
  );
}

export default Login;
