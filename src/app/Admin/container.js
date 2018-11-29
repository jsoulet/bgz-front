import React, {Component} from 'react';
import {withGame} from '../store/GameProvider';

import GameProvider, {GameContext} from '../store/GameProvider';
import Spinner from '../_components/Spinner';
import Admin from './component';

class AdminContainer extends Component {
  render( ) {
    return (<GameProvider>
      <GameContext.Consumer>
      {({isLoading, hasError}) => {
        if(isLoading) {
          return <Spinner/>
        }

        if(hasError) {
          return <div>hasError</div>
        }

        return <Admin/>
      } }
      </GameContext.Consumer>
  </GameProvider>);
  }
}

export default withGame(AdminContainer);
