import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team';

import styles from './styles.module.scss';

const Game = ({ketchup, mayo, isReadOnly}) =>{
  return (
    <div className={styles.game}>
      <Team score={ketchup} team={Team.TEAMS.KETCHUP} isReadOnly={isReadOnly}/>
      <Team score={mayo} team={Team.TEAMS.MAYO} isReadOnly={isReadOnly}/>
    </div>
  );
}

Game.defaultProps = {
  isReadOnly: false
}

Game.propTypes = {
  ketchup: PropTypes.number.isRequired,
  mayo: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool
}


export default Game;
