import PropTypes from "prop-types"
import { useState } from 'react';
// import { useEffect } from 'react';

function SearchBar({ getSearchValue }) {
  const [searchValue, setSearchValue] = useState('');


  // 1-st solution option:
  const newSearchValue = (event) => {
    setSearchValue(event.target.value);
    getSearchValue(event.target.value);
  }
  const clearSearchValue = () => {
    setSearchValue('');
    getSearchValue('');
  }

  // 2-nd solution option:
  // useEffect(() => { { getSearchValue(searchValue) } }, [searchValue]);
  // const newSearchValue = (event) => {
  //   setSearchValue(event.target.value);
  // }
  // const clearSearchValue = () => {
  //   setSearchValue('');
  // }

  return (
    <div className="searchBar">

      <img width={18} height={18} src="./img/icons/search.svg" alt="Search" />

      <form autoComplete="off">
        <input
          type="text"
          name="Search"
          placeholder="Search..."
          onChange={newSearchValue}
          value={searchValue}>
        </input>
      </form>

      <button className="SearchClearButton" onClick={clearSearchValue}>
        <img width={10} height={10} src="/img/icons/close.svg" alt="CloseButton" />
      </button>

    </div>
  )
}

SearchBar.propTypes = {
  getSearchValue: PropTypes.func.isRequired
}



export default SearchBar;