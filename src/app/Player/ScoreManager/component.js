import React from 'react';
import PropTypes from 'prop-types';
import PlayerScore from './PlayerScore';

import styles from './styles.module.scss';

const ScoreManager = ({ ketchup, mayo }) => {
  return (
    <div className={styles.scoreManager}>
      <PlayerScore score={ketchup} teamName="ketchup" />
      <PlayerScore score={mayo} teamName="mayo" />
    </div>);
};

ScoreManager.propTypes = {
  ketchup: PropTypes.number.isRequired,
  mayo: PropTypes.number.isRequired,
};
export default ScoreManager;
