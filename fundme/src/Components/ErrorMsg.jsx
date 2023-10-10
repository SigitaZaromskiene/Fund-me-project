import { useContext, useEffect } from "react";
import { Global } from "../Contexts/Global";

function ErrorMsg({ errorMsg }) {
  const { setErrMessage } = useContext(Global);

  useEffect(() => {
    setTimeout(() => {
      setErrMessage(null);
    }, 5000);
  }, [setErrMessage]);

  return (
    <div className="error-message-container">
      <p className="error-message-container__text" data-testid="error-message">
        {errorMsg}
      </p>
    </div>
  );
}
export default ErrorMsg;
