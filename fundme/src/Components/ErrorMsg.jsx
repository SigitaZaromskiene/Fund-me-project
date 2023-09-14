import { useContext, useEffect } from "react";
import { Global } from "../Contexts/Global";

function ErrorMsg({ errorMsg }) {
  const { setErrorMessage, setErrMsg } = useContext(Global);
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setErrMsg(null);
    }, 5000);
  }, []);

  return (
    <div className="error-message-container">
      <p className="error-message-container__text">{errorMsg}</p>
    </div>
  );
}
export default ErrorMsg;
