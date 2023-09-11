function Filter() {
  return (
    <div className="filter">
      <div>
        <label>Filter by</label>
        <select>
          <option>Getting funded</option>
          <option>Newest</option>
          <option>Fully funded</option>
        </select>
      </div>
      <label>Sort by</label>
      <select>
        <option>Name</option>
        <option>Lowest sum raised</option>
        <option>Higest sum raised</option>
      </select>
    </div>
  );
}
export default Filter;
