import React, { useState, useEffect } from 'react';
import './Table.css';
function TripsData() {
  const [driverState, setDriverState] = useState({
    drivers: [],
  });

  const [tripState, setTripState] = useState({
    trips: [],
  });

  useEffect(() => {
    const fetchDriver = () => {
      fetch('/api/drivers')
        .then(data => {
          return data.json();
        })
        .then(data => {
          setDriverState({ drivers: data.data });
        });
    };
    fetchDriver();
  }, []);

  useEffect(() => {
    fetch('api/trips')
      .then(data => {
        return data.json();
      })
      .then(data => {
        setTripState({ trips: data.data });
      });
    return () => {};
  }, []);

  return (
    <div className="trips-table">
      <p>TRIPS DETAILS</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Driver</th>
            <th>User</th>
            <th>Amount</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  );
}

export default TripsData;
