import React, { useState, useEffect } from 'react';
import getDrivers from '../../../Helpers/getDrivers';

import { NavLink } from 'react-router-dom';

function DriverList() {
  const [driverState, setDriverState] = useState([]);
  useEffect(() => {
    getDrivers().then(data => {
      let driverDetails = [];

      for (const driver of data) {
        driverDetails.push({
          driverId: driver.driverID,
          driverName: driver.name,
          driverPhone: driver.phone,
        });
      }
      setDriverState(driverDetails);
    });
  }, []);

  const style = {
    color: '#000',
    fontWeight: 'bold',
    transition: 'all linear 0.2s',
    boxShadow: '0 0 14px #d8d8d8',
    border: '1px solid #f1f1f',
  };

  return (
    <div className="driver-list">
      <p className="list-head">Drivers</p>
      {driverState.map((driver, index) => {
        return (
          <NavLink
            drivernames={driverState}
            to={{
              pathname: `/drivers/${driver.driverId}`,
              state: {
                driverState,
              },
            }}
            activeStyle={style}
            className="single-list"
            key={index}
          >
            <span className="list-image" />
            <div>
              <span>
                <i className="mdi mdi-account" /> {driver.driverName}
              </span>
              <span>
                <i className="mdi mdi-phone" /> {driver.driverPhone}
              </span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default DriverList;
