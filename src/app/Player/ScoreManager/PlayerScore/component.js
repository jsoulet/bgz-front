import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Score from '../../../_components/Score';
import BurgerScore from '../../../_components/BurgerScore';

import styles from './styles.module.scss';

const PlayerScore = ({ score, teamName }) => {
  return (
    <div className={cn(styles.playerScore,
      {
        [styles.ketchup]: teamName === 'ketchup',
        [styles.mayo]: teamName === 'mayo',
      })}
    >
      <Score value={score} />
      <div className={styles.teamName}>{teamName}</div>
      <BurgerScore score={score} isRevert={teamName === 'mayo'} />
    </div>);
};

PlayerScore.propTypes = {
  score: PropTypes.number.isRequired,
  teamName: PropTypes.string.isRequired,
};

export default PlayerScore;
