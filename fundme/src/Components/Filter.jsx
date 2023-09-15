import { useState, useContext, useEffect } from "react";
import { Global } from "../Contexts/Global";

function Filter() {
  const [sortValue, setSortValue] = useState("");

  const { setCreateList, setFilterValue } = useContext(Global);

  useEffect(() => {
    if (sortValue === "name") {
      setCreateList((li) =>
        [...li].sort((a, b) => a.surname.localeCompare(b.surname))
      );
    }

    if (sortValue === "goal") {
      setCreateList((li) => [...li].sort((a, b) => b.goal - a.goal));
    }

    if (sortValue === "donated") {
      setCreateList((li) => [...li].sort((a, b) => a.donated - b.donated));
    }

    if (sortValue === "default") {
      setCreateList((li) => [...li].sort((a, b) => a.id - b.id));
    }
  }, [sortValue, setCreateList]);

  return (
    <div className="filter">
      <div className="filter__left">
        <label>Filter by</label>
        <select onChange={(e) => setFilterValue(e.target.value)}>
          <option value="1">Default</option>
          <option value="2">Getting funded</option>
          <option value="3">Not funded yet</option>
          <option value="4">Fully funded</option>
        </select>
      </div>
      <div className="filter__right">
        <label>Sort by</label>
        <select onChange={(e) => setSortValue(e.target.value)}>
          <option value="default">Default</option>
          <option value="name">Surname</option>
          <option value="goal">Goal</option>
          <option value="donated">Donated</option>
        </select>
      </div>
    </div>
  );
}
export default Filter;
