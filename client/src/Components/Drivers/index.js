import React from 'react';
import DriverList from './DriverList';
import './Drivers.css';

function Drivers() {
  return (
    <div className="mainBody drivers">
      <div className="driver-display" />
      <DriverList />
    </div>
  );
}

export default Drivers;
