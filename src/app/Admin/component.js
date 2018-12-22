import React from 'react';

import Game from '../_components/Game';
import JingleConsole from './JingleConsole';
import BuzzerConsole from './BuzzerConsole';
import LinkConsole from './LinkConsole';

import styles from './styles.module.scss';

const Admin = () => {
  return (
    <div>
      <Game />
      <JingleConsole />
      <div className={styles.splitScreen}>
        <BuzzerConsole />
        <LinkConsole />
      </div>
    </div>

  );
};

export default Admin;
