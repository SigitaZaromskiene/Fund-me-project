import { useContext } from "react";
import { Global } from "../Contexts/Global";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logout from "./Logout";

function Nav() {
  const { setRoute, route, loggedName } = useContext(Global);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <p>Go Get Funding</p>
        <div className="nav__logo--border"></div>
      </div>
      <div className="nav__middle">
        <button
          className={route === "home" ? "active" : null}
          onClick={() => setRoute("home")}
        >
          Home
        </button>
        <button
          className={route === "fundraisers" ? "active" : null}
          onClick={() => setRoute("fundraisers")}
        >
          Fundraisers
        </button>
        {loggedName ? (
          <button
            className={route === "startFund" ? "active" : null}
            onClick={() => setRoute("startFund")}
          >
            Start fundraising
          </button>
        ) : null}
      </div>
      <div className="nav__right">
        {loggedName ? (
          <>
            <p className="hello">Hello, {loggedName}</p>
            <Logout />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
      <FontAwesomeIcon icon={faBars} className="icon" />
    </nav>
  );
}

export default Nav;
