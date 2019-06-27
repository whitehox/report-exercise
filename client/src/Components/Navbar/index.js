import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="mainNav">
      <p>MAIN NAVIGATION</p>
      <ul>
        <a href="/#">
          <li>
            <i className="mdi mdi-view-dashboard" /> Dashboard
          </li>
        </a>
        <a href="/#">
          <li>
            <i className="mdi mdi-map-check" /> Trips
          </li>
        </a>
        <a href="/#">
          <li>
            <i className="mdi mdi-account-card-details" /> Drivers
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
