import { Link } from "react-router-dom";
import { useContext } from "react";
import { Global } from "../Contexts/Global";

function Home() {
  const { isLogged } = useContext(Global);

  return (
    <div className="hero-section">
      <div alt="Many people" className="hero-section__img"></div>
      <div className="hero-section__text">
        <h2>Powerful, Personal Fundraising </h2>
        <p>Fast, easy & trusted by millions - create your page for free!</p>
        <Link
          to={!isLogged ? "/home/login" : "/home/start"}
          className="nav-link-1"
        >
          Start fundraising for free
        </Link>
      </div>
    </div>
  );
}

export default Home;
