import Filter from "./Filter";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Fundraisers() {
  return (
    <div className="fundraiser wrapper">
      <p className="fundraiser__header">Personal Campaigns Getting Funded</p>
      <div className="fundraiser__header--border"></div>
      <Filter></Filter>
      <ul className="fundraiser__lists">
        <li className="fundraiser__lists--list">
          <div className="fundraiser__lists--list--left">
            <div className="fundraiser__lists--list--left--name">
              <p>Name</p>
              <p>Surname</p>
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              eaque, vel officia molestias provident consequuntur nostrum
              blanditiis magni. Cumque, ea.
            </div>
          </div>
          <div className="fundraiser__lists--list--middle">
            <p className="fundraiser__lists--list--middle--goal">
              2000 &euro; goal
            </p>
            <p>1000 &euro; donated</p>
            <div className="fundraiser__lists--list--middle--goal--border"></div>
          </div>
          <div className="fundraiser__lists--list--middle--donations">
            <div className="fundraiser__lists--list--middle--donations--header">
              <p>Thank you for your donations</p>
            </div>

            <div className="fundraiser__lists--list--middle--donations--name">
              <label>Name</label>
              <input></input>
            </div>
            <div className="fundraiser__lists--list--middle--donations--name">
              <label>Sum</label>
              <input></input>
            </div>
            <button className="fundraiser__lists--list--middle--donations--button">
              Donate
            </button>
          </div>
          <div className="fundraiser__lists--list--right">
            <ul>
              Last donations{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </ul>
            <li>
              <p>Rima</p>
              <p>50 &euro;</p>
            </li>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Fundraisers;
