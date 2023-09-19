import { useContext } from "react";
import { Global } from "../Contexts/Global";
import Fundraisers from "./Fundraisers";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import StartFund from "./StartFund";

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
    case "startFund":
      return <StartFund></StartFund>;
    default:
      return <Home></Home>;
  }
}

export default Routes;
