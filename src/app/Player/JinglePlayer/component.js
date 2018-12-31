import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Player } from 'video-react';

import styles from './styles.module.scss';

const JinglePlayer = ({ jingleUrl }) => (
  <div className={cn(styles.jinglePlayer, { [styles.hidden]: !jingleUrl })}>
    <Player
      src={jingleUrl}
      autoPlay
    />
  </div>);

JinglePlayer.propTypes = {
  jingleUrl: PropTypes.string.isRequired,
};

export default JinglePlayer;
