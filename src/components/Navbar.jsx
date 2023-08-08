import React from 'react';
import '../styling/Navbar.css';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

function Navbar() {
  return (
    <div>
      <header>
        <img className="planet-img" src={planet} alt="planet" />
      </header>
      <nav>
        <NavLink to="/rockets"> Rockets</NavLink>
        <NavLink to="/missions"> Missions </NavLink>
        <NavLink to="/profile"> Profile </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
