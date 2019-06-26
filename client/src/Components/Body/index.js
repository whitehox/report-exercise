import React from 'react';
import './Body.css';

/** Helper apis */
import TripData from '../TripsData';

/**Components */
import SearchBar from '../SearchBar/';
import StateChart from '../StateChart';

function Body(props) {
  return (
    <main className="mainBody">
      <SearchBar />
      <StateChart />
      <TripData />
    </main>
  );
}

export default Body;
