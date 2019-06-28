import React, { useState, useEffect } from 'react';
import getDrivers from '../../../Helpers/getDrivers';

function DriverList() {
  const [driverState, setDriverState] = useState([]);
  useEffect(() => {
    getDrivers().then(data => {
      let driverDetails = [];

      for (const driver of data) {
        driverDetails.push({
          driverName: driver.name,
          driverPhone: driver.phone,
        });
      }
      setDriverState(driverDetails);
    });
  }, []);
  console.log(driverState);

  return (
    <div className="driver-list">
      {driverState.map((driver, index) => {
        return (
          <p key={index}>
            <span>{driver.driverName}</span>
            <span>{driver.driverPhone}</span>
          </p>
        );
      })}
    </div>
  );
}

export default DriverList;
