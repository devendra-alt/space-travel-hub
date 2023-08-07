import React from 'react';
import logo from '../assets/planet.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="main-header">
      <div className="site-title-section">
        <img
          src={logo}
          alt="space travel hub logo"
          width="60px"
          height="60px"
        />
        <h1 className="site-title">Space Traveler's Hub</h1>
      </div>
      <nav className="main-header-nav">
        <NavLink className="nav-link" to="/">
          Rockets
        </NavLink>
        <NavLink className="nav-link" to="/missions">
          Missions
        </NavLink>
        <NavLink className="nav-link" to="/my-profile">
          Profile
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
