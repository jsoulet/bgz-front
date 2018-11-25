import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Admin from './app/Admin';
import Player from './app/Player';

const App = () =>
  <Router>
    <div>
      <Route path='/' exact component={Player}/>
      <Route path='/admin/' component={Admin}/>
    </div>
  </Router>;

export default App;