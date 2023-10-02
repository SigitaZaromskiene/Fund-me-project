import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Err404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, [navigate]);

  return (
    <div className="error-message-container">
      <p className="error-message-container__text">PAGE NOT FOUND</p>
    </div>
  );
}
export default Err404;
