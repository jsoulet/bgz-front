import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Admin from './app/Admin';
import Player from './app/Player';
import Buzzer from './app/Buzzer';
import Landing from './app/Landing';

import './fonts/fonts.scss';

const App = () => (
  <Router>
    <div>
      <Route path="/player/:gameId" exact component={Player} />
      <Route path="/admin/:gameId" exact component={Admin} />
      <Route path="/buzzer/:gameId/:team(ketchup|mayo)" exact component={Buzzer} />
      <Route path="/:gameId?" exact component={Landing} />
    </div>
  </Router>);

export default App;
