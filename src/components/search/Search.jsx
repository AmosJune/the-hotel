import React from "react";

function Search({ handleSearch, search }) {
  return (
    <>
      <label htmlFor="search" className="search-label">
        Search
      </label>
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
