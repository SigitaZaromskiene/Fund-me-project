import { useContext } from "react";
import { Global } from "../Contexts/Global";
function Nav() {
  const { setRoute, route } = useContext(Global);
  return (
    <nav className="nav">
      <div className="nav__logo">
        <p>Go Get Funding</p>
        <div className="nav__logo--border"></div>
      </div>
      <div className="nav__middle">
        <button
          className={route === "start" ? "active" : null}
          onClick={() => setRoute("start")}
        >
          Start Fundraising
        </button>
        <button
          className={route === "fundraisers" ? "active" : null}
          onClick={() => setRoute("fundraisers")}
        >
          Fundraisers
        </button>
      </div>
      <div className="nav__right">
        <button
          className={route === "login" ? "active" : null}
          onClick={() => setRoute("login")}
        >
          Log in
        </button>
        <button
          className={route === "register" ? "active" : null}
          onClick={() => setRoute("register")}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Nav;
