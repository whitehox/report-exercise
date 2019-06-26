import React from 'react';
import './Body.css';

/** Helper apis */
import TripData from '../TripsData';

/**Components */
import SearchBar from '../SearchBar/';
import StateChart from '../StateChart';
import TotalBillChart from '../TotalBillChart';

function Body(props) {
  return (
    <main className="mainBody">
      <SearchBar />
      <StateChart />
      <TotalBillChart />
      <TripData />
    </main>
  );
}

export default Body;
