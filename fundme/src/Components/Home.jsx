import { useContext } from "react";
import { Global } from "../Contexts/Global";

function Home() {
  const { setRoute } = useContext(Global);
  return (
    <div className="hero-section">
      <div className="hero-section__img"></div>
      <div className="hero-section__text">
        <h2>Powerful, Personal Fundraising </h2>
        <p>Fast, easy & trusted by millions - create your page for free!</p>
        <button onClick={() => setRoute("fundraisers")}>
          Start fundraising for free
        </button>
      </div>
    </div>
  );
}

export default Home;
