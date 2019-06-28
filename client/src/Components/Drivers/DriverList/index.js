import React, { useState, useEffect } from 'react';
import getDrivers from '../../../Helpers/getDrivers';
import { Link } from 'react-router-dom';

function DriverList(props) {
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

  return (
    <div className="driver-list">
      <p className="list-head">Drivers</p>
      {driverState.map((driver, index) => {
        return (
          <Link
            to={`/drivers/${driver.driverId}`}
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
          </Link>
        );
      })}
    </div>
  );
}

export default DriverList;
