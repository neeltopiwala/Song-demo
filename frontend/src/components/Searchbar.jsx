function Searchbar({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Music Name"
        name="searchBar"
        onChange={onChange}
        value={value}
      ></input>
    </>
  );
}

export default Searchbar;
