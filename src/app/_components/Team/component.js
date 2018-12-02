import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Score from '../Score';
import Button from '../Button';
import BurgerScore from '../BurgerScore';

import styles from './styles.module.scss';
import { TEAMS } from './constants';

const Team = ({
  score, onIncrease, onDecrease, name, isReadOnly,
}) => (
  <div className={
        cn(
          styles.team,
          {
            [styles.ketchup]: name === TEAMS.KETCHUP,
            [styles.mayo]: name === TEAMS.MAYO,
          },
        )
      }
  >
    <div className={styles.scoreboard}>
      {!isReadOnly && (
      <Button
        secondary
        onClick={onDecrease}
        color={name === TEAMS.KETCHUP ? 'red' : 'yellow'}
      >
        -1
      </Button>
      )}
      <Score value={score} />
      {!isReadOnly && (
      <Button
        onClick={onIncrease}
        color={name === TEAMS.KETCHUP ? 'red' : 'yellow'}
      >
        +1
      </Button>
      )}
    </div>
    <div className={styles.name}>{name}</div>
    {isReadOnly && <BurgerScore score={score} isRevert={name === TEAMS.MAYO} />}
  </div>
);

Team.defaultProps = {
  isReadOnly: false,
};


Team.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  isReadOnly: PropTypes.bool,
};


export default Team;
