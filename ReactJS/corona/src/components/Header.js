import React from "react";

const Header = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>COVID-19</h1>
        <select>
          <option>국내</option>
          <option>해외</option>
        </select>
      </header>
    </div>
  );
};

export default Header;
