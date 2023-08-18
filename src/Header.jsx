import React, { useState } from "react"
import ufcLogo from "./assets/ufc-logo.png"
import FilterButtons from "./FilterButtons"
import SearchBar from "./SearchBar" // Import the SearchBar component
import viteLogo from "./assets/vite-logo.png"
import reactIcon from "./assets/react-icon.png"
import puppeteerLogo from "./assets/puppeteer-logo.png"
import "./Header.css"

const Header = ({
  onFilterChange,
  onSearch,
  fightersArray,
  visibleFighters,
  activeFilter,
}) => {
  const [searchError, setSearchError] = useState(false)

  return (
    <div className="header">
      <div className="logo-container">
        <img src={ufcLogo} alt="UFC Logo" className="ufcLogo" />
        <p className="logo-text">All Active UFC Fighters Provided By UFC.com</p>
      </div>
      <div>
        <iframe
          src="https://giphy.com/embed/qrr9p5kGVbEeq9Dmcq"
          width="100"
          height="max-height"
          frameBorder="0"
          allowFullScreen
          title="Advertisement"
        ></iframe>
      </div>

      <div className="powered-by">
        <p>Powered By:</p>
        <img src={viteLogo} alt="Vite Logo" className="powered-by-logo" />
        <img src={reactIcon} alt="React Icon" className="powered-by-logo" />
        <img
          src={puppeteerLogo}
          alt="Puppeteer Logo"
          className="powered-by-logo"
        />
        <SearchBar
          onSearch={onSearch}
          fightersArray={fightersArray}
          visibleFighters={visibleFighters}
          className="surchBar"
        />
        {searchError && (
          <p className="search-error">
            No fighters match your search. Please try again.
          </p>
        )}
        <FilterButtons
          onFilterChange={onFilterChange}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  )
}

export default Header
