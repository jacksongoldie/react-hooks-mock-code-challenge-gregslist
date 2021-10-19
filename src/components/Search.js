import React from "react";

function Search({ search, handleSearchInApp, setItems, items }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    const filteredItems = items.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))
    setItems(filteredItems)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchInApp}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
