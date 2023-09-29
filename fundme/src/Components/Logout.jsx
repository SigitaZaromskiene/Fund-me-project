import axios from "axios";
import { useContext } from "react";
import { Global } from "../Contexts/Global";
import { useNavigate, NavLink } from "react-router-dom";

const URL = "http://localhost:3007/logout";

function Logout() {
  const { setIsLogged, setLoggedName } = useContext(Global);

  const navigate = useNavigate();

  const logoutHandler = () => {
    axios.post(URL, {}, { withCredentials: true }).then((res) => {
      console.log(res);
      setIsLogged(null);
      setLoggedName(null);
      navigate("/home");
    });
  };

  return (
    <NavLink to="logout" onClick={logoutHandler} className="nav-link">
      Logout
    </NavLink>
  );
}

export default Logout;
