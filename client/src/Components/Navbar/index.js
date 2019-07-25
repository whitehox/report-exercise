import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const style = {
    color: '#38bc8a',
  };

  return (
    <nav className="mainNav">
      <div className="allNav">
        <p>MAIN NAVIGATION</p>
        <ul>
          <NavLink to="/" activeStyle={style}>
            <li>
              <i className="mdi mdi-view-dashboard" /> Dashboard
            </li>
          </NavLink>
          <NavLink to="/trips" activeStyle={style}>
            <li>
              <i className="mdi mdi-map-check" /> Trips
            </li>
          </NavLink>
          <NavLink to="/drivers" activeStyle={style}>
            <li>
              <i className="mdi mdi-steering" /> Drivers
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
