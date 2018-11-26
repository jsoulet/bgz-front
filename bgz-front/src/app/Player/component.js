import React from 'react';
import PropTypes from 'prop-types';

import Game from '../_components/Game';

const Player = ({ketchup, mayo}) =>{
  return (
    <Game ketchup={ketchup} mayo={mayo} isReadOnly/>
  );
}

Player.propTypes = {
  ketchup: PropTypes.number.isRequired,
  mayo: PropTypes.number.isRequired,
}

export default Player;
