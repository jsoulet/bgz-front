import React from 'react';

import Game from './component';
import {withGame} from '../../store/GameProvider'


const GameContainer = ({ketchup, mayo, isReadOnly}) =>{
  return (
    <Game ketchup={ketchup} mayo={mayo} isReadOnly={isReadOnly}/>
  );
}

export default withGame(GameContainer);
