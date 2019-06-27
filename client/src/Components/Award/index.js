import React, { useState, useEffect } from 'react';
import './Award.css';

function Award() {
  const [tripsState, setTripsState] = useState({ trips: [] });

  useEffect(() => {
    fetch('/api/trips')
      .then(data => {
        return data.json();
      })
      .then(data => {
        setTripsState({ trips: data.data });
      });
  }, []);

  let calculatedTrips = tripsState.trips.reduce((accumulator, currentTrip) => {
    let key = currentTrip.driverID;
    if (!accumulator[key]) {
      accumulator[key] = { Cash: 0, NonCash: 0, sum: 0, name: '' };
    }
    if (currentTrip.isCash) {
      accumulator[key].Cash += 1;
    } else {
      accumulator[key].NonCash += 1;
    }
    accumulator[key].sum += 1;
    return accumulator;
  }, {});

  let tripSum = [];
  for (const i in calculatedTrips) {
    tripSum.push(calculatedTrips[i].sum);
  }

  let highestTrip = Math.max(...tripSum);

  let winner = {};

  for (const i in calculatedTrips) {
    if (calculatedTrips[i].sum === highestTrip) {
      winner[i] = calculatedTrips[i];
      break;
    }
  }

  const winnerID = Object.keys(winner);

  const [driverNameState, setDriverNameState] = useState({
    data: [],
  });

  useEffect(() => {
    fetch('/api/drivers')
      .then(data => {
        return data.json();
      })
      .then(data => {
        setDriverNameState({ data: data.data });
      });
  }, []);

  let driverName = '';
  for (const i of driverNameState.data) {
    try {
      if (i.driverID === winnerID[0]) {
        driverName = i.name;
        break;
      }
    } catch {}
  }

  let preDetail = Object.values(winner);
  console.log(preDetail);

  return (
    <section className="awards-slate">
      <div className="badge">
        <img src="https://github.com/whitehox/driver-report-dashboard/blob/master/client/src/images/badge" />
      </div>
    </section>
  );
}

export default Award;
