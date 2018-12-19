import React from 'react';

import Game from '../_components/Game';
import JingleConsole from './JingleConsole';
import BuzzerConsole from './BuzzerConsole';

const Admin = () => {
  return (
    <div>
      <Game />
      <BuzzerConsole />
      <JingleConsole />
    </div>

  );
};

export default Admin;
