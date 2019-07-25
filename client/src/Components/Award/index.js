import React, { useState, useEffect } from 'react';
import './Award.css';
function Award(props) {
  const [tripsState, setTripsState] = useState({
    trips: [{ Cash: 0, NonCash: 0, sum: 0, name: 'Drivers Name' }],
  });

  useEffect(() => {
    const getTrips = async () => {
      let ret = await fetch('/api/trips');
      return ret;
    };

    getTrips()
      .then(data => {
        return data.json();
      })
      .then(data => {
        setTimeout(function() {
          setTripsState({ trips: data.data });
        }, 2000);
      });
  }, []);

  let calculatedTrips = tripsState.trips.reduce((accumulator, currentTrip) => {
    let key = currentTrip.driverID;
    if (!accumulator[key]) {
      accumulator[key] = { Cash: 0, NonCash: 0, sum: 0, name: 'Drivers Name' };
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

  let driverName = 'Drivers Name';
  for (const i of driverNameState.data) {
    try {
      if (i.driverID === winnerID[0]) {
        driverName = i.name;
        break;
      }
    } catch {}
  }

  let preDetail = Object.values(winner);

  return (
    <section className="awards-slate">
      <p className="awards-title child">Driver of the Year</p>
      <div className="badge child">
        <img
          alt="Award Winning Driver"
          src={require('../images/badge-gold.png')}
        />
      </div>
      <div className="award-details child">
        <p className="driver-details">Driver Details</p>
        <p>
          <i className="mdi mdi-account" />
          {driverName}
        </p>
        <p>
          <i className="mdi mdi-cash-multiple" />
          {preDetail[0].Cash} Cash trips
        </p>
        <p>
          <i className="mdi mdi-credit-card" />
          {preDetail[0].NonCash} Non-Cash trips
        </p>
        <p>
          <i className="mdi mdi-map-clock" />
          {preDetail[0].NonCash + preDetail[0].Cash} Trips completed
        </p>
      </div>
    </section>
  );
}

export default Award;
