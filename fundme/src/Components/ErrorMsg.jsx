import { useContext, useEffect } from "react";
import { Global } from "../Contexts/Global";

function ErrorMsg({ errorMsg }) {
  const { setErrMsg } = useContext(Global);

  useEffect(() => {
    setTimeout(() => {
      setErrMsg(null);
    }, 5000);
  }, [setErrMsg]);

  return (
    <div className="error-message-container">
      <p className="error-message-container__text">{errorMsg}</p>
    </div>
  );
}
export default ErrorMsg;
