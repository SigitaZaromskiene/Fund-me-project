import { useContext, useEffect } from "react";
import { Global } from "../Contexts/Global";

function SmallErrorMsg({ message }) {
  const { setErrMessage } = useContext(Global);

  useEffect(() => {
    setTimeout(() => {
      setErrMessage(null);
    }, 4000);
  }, []);

  return (
    <div className="small-error-msg-container">
      <p>{message}</p>
    </div>
  );
}

export default SmallErrorMsg;
