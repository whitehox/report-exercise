import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';

export default function VehicleDetail(props) {
  const [vehicleState, setVehicleState] = useState([
    {
      manufacturer: 'Manufacturer Name',
    },
  ]);

  useEffect(() => {
    const vehicleDetails = props.vehicles.map((vehicleID, index) => {
      return fetch(`/api/vehicle/${vehicleID}`)
        .then(data => data.json())
        .then(data => {
          return data.data;
        });
    });
    Promise.all(vehicleDetails).then(data => {
      setVehicleState(data);
    });
  }, [props.vehicles]);
  return (
    <>
      <div className="vehicleCount">
        <div className="vehicleCountIcon">
          <i className="mdi mdi-steering" />
        </div>
        <div className="actualCount">
          {vehicleState.length}
          <p>Vehilce(s)</p>
        </div>
      </div>
      <div className="vehiclesDet">
        {vehicleState.map((vehicle, index) => {
          return (
            <article key={index} className="det">
              <p>{vehicle.manufacturer}</p>
              <p>{vehicle.plate}</p>
              <p>{vehicle.acquired}</p>
              <p>{vehicle.acquiredNew ? 'Acquired new' : 'Fairly used'}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}
