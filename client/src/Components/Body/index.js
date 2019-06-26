import React from 'react';
import './Body.css';

/** Helper Functions */
import getTrips from '../../Helpers/getTrips';

/**Components */
import SearchBar from '../SearchBar/';

function Body(props) {
  const trips = getTrips();
  return (
    <main className="mainBody">
      <SearchBar />
      <div>{trips}</div>
    </main>
  );
}

export default Body;
