import { useContext } from "react";
import { Global } from "../Contexts/Global";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logout from "./Logout";
import { NavLink } from "react-router-dom";

function Nav() {
  const { loggedName } = useContext(Global);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <p>Go Get Funding</p>
        <div className="nav__logo--border"></div>
      </div>
      <div className="nav__middle">
        <NavLink to="home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="fundraisers" className="nav-link">
          Fundraisers
        </NavLink>
        {loggedName ? (
          <NavLink to="start" className="nav-link">
            Start fundraising
          </NavLink>
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
            <NavLink to="login" className="nav-link">
              Log in
            </NavLink>
            <NavLink to="register" className="nav-link">
              Sign in
            </NavLink>
          </>
        )}
      </div>
      <FontAwesomeIcon icon={faBars} className="icon" />
    </nav>
  );
}

export default Nav;
