import { useContext } from "react";
import { Global } from "../Contexts/Global";

function StartFund() {
  const { route, setRoute } = useContext(Global);

  return <div>STAAART</div>;
}

export default StartFund;
