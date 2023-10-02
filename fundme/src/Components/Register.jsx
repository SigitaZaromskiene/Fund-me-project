import SmallBtn from "../Components/SmallBtn";
import { useState, useContext } from "react";
import { Global } from "../Contexts/Global";
import ErrorMsg from "../Components/ErrorMsg";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Register() {
  const { setErrMessage, errMessage, setIsLogged } = useContext(Global);

  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [pswRepeat, setPswRepeat] = useState("");

  const navigate = useNavigate();

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

    //   try {
    //     const response = await fetch(URL, {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ name, psw }),
    //     });

    //     const data = await response.json();

    //     if (data.status === "ok") {
    //       setLoginData(data);
    //       setName("");
    //       setPsw("");
    //       setPswRepeat("");
    //       setRoute("login");
    //     }
    //   } catch (error) {
    //     setErrMessage("Cannot register");
    //   }
    // }

    axios
      .post(
        "http://localhost:3007/register",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {

          setIsLogged(res.data.name);
          setName("");
          setPsw("");
          setPswRepeat("");
          navigate("/login");

        } else {
          setErrMessage("Not correct details");
          setName("");
          setPsw("");
        }
      });
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
