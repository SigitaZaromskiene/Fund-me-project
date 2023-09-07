import { useContext } from "react";
import { Global } from "../Contexts/Global";
import Fundraisers from "./Fundraisers";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Start from "./Start";

function Routes() {
  const { route } = useContext(Global);

  switch (route) {
    case "home":
      return <Home></Home>;
    case "fundraisers":
      return <Fundraisers></Fundraisers>;
    case "login":
      return <Login></Login>;
    case "register":
      return <Register></Register>;
    case "start":
      return <Start></Start>;
    default:
      return <Home></Home>;
  }
}

export default Routes;
