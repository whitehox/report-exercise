import React, { useState, useEffect } from 'react';
import DriverList from './DriverList';
import './Drivers.css';
import getDrivers from '../../Helpers/fetchAny';

function Drivers() {
  const [toDisplayState, setToDisplayState] = useState([]);
  const url = window.location.href.split('/');
  const last = url.length - 1;
  const urlPattern = /([\d\w]*[-]).*/g;
  const id = url[last];
  const [driverState, setDriverState] = useState({ name: 'Hello' });

  useEffect(() => {
    getDrivers('/api/drivers').then(data => {
      setDriverState(data);
    });
  }, []);

  let toDisplay = { name: 'Driver Name' };

  for (let i = 0, length = driverState.length; i < length; i++) {
    if (driverState[i].driverID === id) {
      toDisplay = driverState[i];
      break;
    }
  }

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
          <article>
            <span />
            <p>{toDisplay.name}</p>
            <p>{toDisplay.gender}</p>
            <p>{toDisplay.agent}</p>
            <p>{toDisplay.email}</p>
            <p>{toDisplay.phone}</p>
            <p>{toDisplay.DOB}</p>
            <p>{toDisplay.address}</p>
          </article>
        </div>
        <DriverList />
      </div>
    );
  }
}

export default Drivers;
