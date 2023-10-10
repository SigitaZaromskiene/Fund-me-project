import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Global } from "../Contexts/Global";

function LastDonations({ lis }) {
  const { createList } = useContext(Global);

  const list = createList.find((li) => li.id === lis.id);

  if (!list) {
    return null;
  }

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
        <p data-testid="dname">{list.donatorName}</p>
        <p>{list.donatorSum} &euro;</p>
      </div>
    </div>
  );
}

export default LastDonations;
