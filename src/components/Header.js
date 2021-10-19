import React from "react";
import Search from "./Search";

function Header({ search, handleSearchInApp, setItems, items}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} handleSearchInApp={handleSearchInApp} setItems={setItems} items={items}/>
    </header>
  );
}

export default Header;
