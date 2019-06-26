import React from 'react';
import './Body.css';

/** Helper apis */
import TripData from '../TripsData';

/**Components */
import SearchBar from '../SearchBar/';

function Body(props) {
  return (
    <main className="mainBody">
      <SearchBar />
      <TripData />
    </main>
  );
}

export default Body;
