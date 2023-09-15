import { useContext, useEffect, useState } from "react";
import { Global } from "../Contexts/Global";
import axios from "axios";
import Loader from "./Loader";

function Home() {
  const { setRoute } = useContext(Global);

  const [heroPhoto, setHeroPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://unsplash.com/photos/31-pOduwZGE").then((res) => {
      setHeroPhoto(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="hero-section">
      {loading && <Loader />}
      {!loading && heroPhoto.length !== 0 ? (
        <img
          src={heroPhoto}
          alt="Many people"
          className="hero-section__img"
        ></img>
      ) : null}

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
