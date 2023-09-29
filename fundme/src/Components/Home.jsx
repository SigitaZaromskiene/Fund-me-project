import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">
      <div alt="Many people" className="hero-section__img"></div>
      <div className="hero-section__text">
        <h2>Powerful, Personal Fundraising </h2>
        <p>Fast, easy & trusted by millions - create your page for free!</p>
        <NavLink to="login" className="nav-link-1">
          Start fundraising for free
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
