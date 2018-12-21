import React, { Component } from 'react';

import isNull from 'lodash/isNull';
import GameProvider, { GameConsumer } from '../store/GameProvider';
import SocketProvider from '../store/SocketProvider';

import Player from './component';
import Spinner from '../_components/Spinner';

class PlayerContainer extends Component {
  state = {
    teamBuzzer: null,
    isBuzzerEnabled: true,
  }

  handleOnRecieveBuzz = ({ team }) => {
    if (isNull(team) || isNull(this.state.teamBuzzer)) {
      this.setState({ teamBuzzer: team });
    }
  }


  render() {
    return (
      <GameProvider>
        <SocketProvider>
          <GameConsumer>
            {({ isLoading, hasError }) => {
              if (isLoading) {
                return <Spinner />;
              }

              if (hasError) {
                return <div>hasError</div>;
              }

              return <Player
                onRecieveBuzz={this.handleOnRecieveBuzz}
                teamBuzzer={this.state.teamBuzzer}
              />;
            }}
          </GameConsumer>
        </SocketProvider>
      </GameProvider>);
  }
}

export default PlayerContainer;
