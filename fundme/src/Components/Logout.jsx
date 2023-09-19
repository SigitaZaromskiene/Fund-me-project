import axios from "axios";
import { useContext } from "react";
import { Global } from "../Contexts/Global";

const URL = "http://localhost:3007/logout";

function Logout() {
  const { setRoute, setIsLogged, setLoggedName, route } = useContext(Global);

  const logoutHandler = () => {
    axios.post(URL, {}, { withCredentials: true }).then((res) => {
      console.log(res);
      setRoute("home");
      setIsLogged(null);
      setLoggedName(null);
    });
  };

  return (
    <button
      className={route === "logout" ? "active" : null}
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default Logout;
