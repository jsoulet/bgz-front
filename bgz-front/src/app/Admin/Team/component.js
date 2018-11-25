import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Score from '../../_components/Score';
import Button from '../../_components/Button';

import styles from './styles.module.scss';
import { TEAMS } from './constants';

const Team = ({score, onIncrease, onDecrease, name }) => {
  return <div className={
      cn(
      styles.team,
      {
        [styles.ketchup]: name === TEAMS.KETCHUP,
        [styles.mayo]: name === TEAMS.MAYO,
      })
    }>
      <div className={styles.scoreboard}>
        <Button secondary onClick={onDecrease} team={name === TEAMS.KETCHUP ? 'ketchup' : 'mayo'}>-1</Button>
        <Score value={score}/>
        <Button onClick={onIncrease} team={name === TEAMS.KETCHUP ? 'ketchup' : 'mayo'}>+1</Button>
      </div>
      <div className={styles.name}>{name}</div>
  </div>
};

Team.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
}



export default Team;
