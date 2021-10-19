import React from "react";
import Search from "./Search";

function Header({ search, handleSearchInApp }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} handleSearchInApp={handleSearchInApp} />
    </header>
  );
}

export default Header;
