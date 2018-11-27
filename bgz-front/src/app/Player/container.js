import React, {Component} from 'react';

import GameProvider, {GameConsumer} from '../store/GameProvider';

import Player from './component';
import Spinner from '../_components/Spinner';

class PlayerContainer extends Component {
  render( ) {
    return (<GameProvider>
      <GameConsumer>
        {({isLoading, hasError}) => {
          if(isLoading) {
            return <Spinner/>
          }

          if(hasError) {
            return <div>hasError</div>
          }

          return <Player/>
        } }
      </GameConsumer>
    </GameProvider>);
  }
}

export default PlayerContainer;
