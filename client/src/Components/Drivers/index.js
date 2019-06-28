import React from 'react';
import DriverList from './DriverList';
import DriverDetail from './DriverDetail';
import './Drivers.css';

function Drivers(props) {
  const url = window.location.href.split('/');
  const last = url.length - 1;
  const urlPattern = /([\d\w]*[-]).*/g;

  if (!urlPattern.test(url)) {
    return (
      <div className="mainBody drivers">
        <div className="driver-display" />
        <DriverList />
      </div>
    );
  } else {
    return (
      <div className="mainBody drivers">
        <div className="driver-display">
          <DriverDetail />
        </div>
        <DriverList />
      </div>
    );
  }
}

export default Drivers;
