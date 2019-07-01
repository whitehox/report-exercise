import React, { useState, useEffect } from 'react';
import DriverList from './DriverList';
import './Drivers.css';
import getDrivers from '../../Helpers/fetchAny';
import DriverDetails from './DriverDetail';

function Drivers() {
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

  let toDisplay = { name: 'Driver Name', vehicleID: [] };
  for (let i = 0, length = driverState.length; i < length; i++) {
    if (driverState[i].driverID === id) {
      toDisplay = driverState[i];
      break;
    }
  }

  if (!urlPattern.test(url)) {
    return (
      <div className="mainBody drivers">
        <div className="driver-display">
          <div className="driver-display">
            <article>
              <p>
                Select a driver from the panel on your right{' '}
                <i className="mdi mdi-arrow-forward" />
              </p>
            </article>
          </div>
        </div>

        <DriverList />
      </div>
    );
  } else {
    return (
      <div className="mainBody drivers">
        <div className="driver-display">
          <article>
            <span />
            <div className="divider" />
            <p>
              <i className="mdi mdi-account" /> Driver name - {toDisplay.name}
            </p>
            <p>
              <i className="mdi mdi-gender-male-female" /> Gender -{' '}
              {toDisplay.gender}
            </p>
            <p>
              <i className="mdi mdi-domain" /> Gender {toDisplay.agent}
            </p>
            <p>
              <i className="mdi mdi-email" /> Email {toDisplay.email}
            </p>
            <p>
              <i className="mdi mdi-phone" /> Phone number {toDisplay.phone}
            </p>
            <p>
              <i className="mdi mdi-calendar-range" /> {toDisplay.DOB}
            </p>
            <p>
              <i className="mdi mdi-map-marker" /> {toDisplay.address}
            </p>
          </article>
          <div className="vehicleDetail">
            <DriverDetails vehicles={toDisplay.vehicleID} />
          </div>
        </div>
        <DriverList />
      </div>
    );
  }
}

export default Drivers;
