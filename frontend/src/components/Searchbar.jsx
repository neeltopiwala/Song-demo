function Searchbar({ value, onChange, onKeyDown, onClick }) {
  return (
    <>
      <input
        className="hidden bg-white w-[38vw] h-10 px-8 rounded-3xl border border-[#e6e1e1] md:block "
        type="text"
        placeholder="Search"
        name="searchBar"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
        value={value}
      ></input>
    </>
  );
}

export default Searchbar;
