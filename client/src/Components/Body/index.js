import React from 'react';
import './Body.css';
/**Components */
import SearchBar from '../SearchBar/';

function Body(props) {
  return (
    <main className="mainBody">
      <SearchBar />
    </main>
  );
}

export default Body;
