import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Admin from './app/Admin';
import Player from './app/Player';
import Landing from './app/Landing';

import './fonts/fonts.scss';

const App = () =>
  <Router>
    <div>
      <Route path='/' exact component={Landing}/>
      <Route path='/player/:gameId' exact component={Player}/>
      <Route path='/admin/:gameId' exact component={Admin}/>
    </div>
  </Router>;

export default App;
