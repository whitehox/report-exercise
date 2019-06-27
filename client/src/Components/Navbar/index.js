import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="mainNav">
      <p>MAIN NAVIGATION</p>
      <ul>
        <Link to="/">
          <li>
            <i className="mdi mdi-view-dashboard" /> Dashboard
          </li>
        </Link>
        <Link to="/trips">
          <li>
            <i className="mdi mdi-map-check" /> Trips
          </li>
        </Link>
        <Link to="/drivers">
          <li>
            <i className="mdi mdi-account-card-details" /> Drivers
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
