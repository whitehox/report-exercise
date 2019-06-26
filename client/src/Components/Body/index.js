import React from 'react';
import './Body.css';

/** Helper Functions */
import getTrips from '../../Helpers/getTrips';
import getDrivers from '../../Helpers/getDrivers';

/**Components */
import SearchBar from '../SearchBar/';

function Body(props) {
  const trips = getTrips();
  const drivers = getDrivers();
  return (
    <main className="mainBody">
      <SearchBar />
      <div>
        {trips} {drivers}
      </div>
    </main>
  );
}

export default Body;
