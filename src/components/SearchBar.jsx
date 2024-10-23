function SearchBar() {
  return (
    <div className="searchBar">
      <img width={18} height={18} src="./img/icons/search.svg" alt="Search" />
      <input placeholder="Search..."></input>
      <button className="SearchClearButton">
        <img width={10} height={10} src="/img/icons/close.svg" alt="CloseButton" />
      </button>
    </div>
  )
}

export default SearchBar;