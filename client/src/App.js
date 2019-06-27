import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

/** Components */
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Trips from './Components/Trips';
import Drivers from './Components/Drivers';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/trips" component={Trips} />
      <Route path="/drivers" component={Drivers} />
    </div>
  );
}

export default App;
