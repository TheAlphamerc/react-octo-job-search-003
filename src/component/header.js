import "../App.css";

import {
  FiMapPin,
  FiMoon,
  FiSearch,
  FiSun,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

import { AiFillCheckSquare } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <header className="App-header">
        <h3>DevJobs</h3>
        <div className="header-controls">
          <FiSun className="header-icon" />
          <FiToggleLeft className="header-icon" />
          <FiMoon className="header-icon" />
          <AiFillCheckSquare className="header-icon" />
        </div>
      </header>
      <SearchControl />
    </div>
  );
}

function SearchControl() {
  return (
    <div className="search-control">
      <div className="input-control">
        <FiSearch />
        <input type="text" className="input" placeholder="Filter by text" />
      </div>
      <div className="input-control">
        <FiMapPin />
        <input type="text" className="input" placeholder="Filter by location" />
      </div>
      <div className="input-control last">
       <div className="check">
       <AiFillCheckSquare />
        <h3>Full Time Only</h3>
       </div>
        <button className="Search-button">Search</button>
      </div>
    </div>
  );
}

export default Header;
