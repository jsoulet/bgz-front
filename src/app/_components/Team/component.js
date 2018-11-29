import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Score from '../../_components/Score';
import Button from '../../_components/Button';

import styles from './styles.module.scss';
import { TEAMS } from './constants';

const Team = ({score, onIncrease, onDecrease, name, isReadOnly }) => {
  return <div className={
      cn(
      styles.team,
      {
        [styles.ketchup]: name === TEAMS.KETCHUP,
        [styles.mayo]: name === TEAMS.MAYO,
      })
    }>
      <div className={styles.scoreboard}>
        {!isReadOnly && <Button
          secondary
          onClick={onDecrease}
          color={name === TEAMS.KETCHUP ? 'red' : 'yellow'}>
          -1</Button>}
        <Score value={score}/>
        {!isReadOnly && <Button
          onClick={onIncrease}
          color={name === TEAMS.KETCHUP ? 'red' : 'yellow'}
        >+1</Button>}
      </div>
      <div className={styles.name}>{name}</div>
  </div>
};

Team.defaultProps = {
  isReadOnly: false,
}


Team.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  isReadOnly: PropTypes.bool,
}



export default Team;
