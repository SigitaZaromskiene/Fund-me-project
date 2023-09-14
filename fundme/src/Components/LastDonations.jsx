import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Global } from "../Contexts/Global";

function LastDonations({ lis }) {
  const { createList } = useContext(Global);

  const list = createList.find((li) => li.id === lis.id);

  return (
    <div className="fundraiser__lists--list--right">
      <ul>
        Last donation{" "}
        <span>
          {" "}
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </ul>

      <div>
        <p>{list.donatorName}</p>
        <p>{list.donatorSum.toFixed(2, 0)} &euro;</p>
      </div>
    </div>
  );
}

export default LastDonations;
