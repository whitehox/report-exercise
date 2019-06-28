import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import TripsData from '../TripsData';

import getTrips from '../../Helpers/getTrips';
import getDrivers from '../../Helpers/getDrivers';
import getVehicle from '../../Helpers/getVehicle';

function Trips(props) {
  const [tripsState, setTripsState] = useState({});

  const [driversState, setDriversState] = useState({});

  const [displayState, setDisplayState] = useState({ details: false });

  const [billingState, setBillingState] = useState();
  const [pickupstate, setPickupState] = useState();
  const [destinationState, setDestinationState] = useState();
  const [cashState, setCashState] = useState();
  const [passengerState, setPassengerState] = useState();
  const [tripDate, setTripDate] = useState();

  useEffect(() => {
    getTrips().then(data => {
      setTripsState(data);
    });
  }, []);

  useEffect(() => {
    getDrivers().then(data => {
      setDriversState(data);
    });
  }, []);

  const url = window.location.href.split('/');
  const tripId = url.length - 1;

  const urlPattern = /([\d\w]*[-]).*/g;

  if (!urlPattern.test(url)) {
    return <TripsData />;
  } else {
    const driversName = decodeURI(
      window.location.href.match(/[a-zA-z]*%20[a-zA-z]*/g)[0],
    );

    let tripToDisplay = [];

    for (let i = 0, length = tripsState.length; i < length; i++) {
      try {
        if (tripsState[i].tripID === url[tripId]) {
          tripToDisplay.push(tripsState[i]);

          setBillingState(tripsState[i].billedAmount);
          setPickupState(tripsState[i].pickup.address);
          setDestinationState(tripsState[i].destination.address);
          setCashState(tripsState[i].isCash);
          setPassengerState(tripsState[i].user.name);
          setTripDate(tripsState[i].created.match(/\d{1,4}-[\d]*-[\d]*/g)[0]);
        }
      } catch {}
    }

    let icon = [];
    if (cashState) {
      icon.push(
        <p>
          <i className="mdi mdi-cash" /> Paid with cash
        </p>,
      );
    } else {
      icon.push(
        <p>
          <i className="mdi mdi-credit-card" />
          Paid with card
        </p>,
      );
    }

    return (
      <div className="mainBody">
        <SearchBar />
        <div className="trips-table">
          <p>TRIP DETAILS</p>
          <p>
            <i className="mdi mdi-gauge" /> {driversName}
          </p>
          <p>
            <i className="mdi mdi-account" /> {passengerState}
          </p>
          <p>₦ {billingState}</p>
          <p>
            <i className="mdi mdi-map-marker-path" /> {pickupstate}{' '}
            <i className="mdi mdi-map-marker-distance green" />{' '}
            {destinationState}
          </p>
          {icon[0]}
          <p>
            <i className="mdi mdi-calendar-range" /> {tripDate}
          </p>
        </div>
      </div>
    );
  }
}

export default Trips;
