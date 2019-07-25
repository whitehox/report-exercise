import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

/** Components */
import './Components/Body/Body.css';
import Navbar from './Components/Navbar';
import Trips from './Components/Trips';
import Drivers from './Components/Drivers';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Home} />
          <Route path="/trips" component={Trips} />
          <Route path="/drivers" component={Drivers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
