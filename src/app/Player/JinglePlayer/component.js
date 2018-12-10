import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'video-react';

import styles from './styles.module.scss';

const JinglePlayer = ({ jingleUrl }) => (
  <div className={styles.jinglePlayer}>
    <Player
      src={jingleUrl}
      autoPlay
    />
  </div>);

JinglePlayer.propTypes = {
  jingleUrl: PropTypes.string.isRequired,
};

export default JinglePlayer;
