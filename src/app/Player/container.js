import React from 'react';

import GameProvider, { GameConsumer } from '../store/GameProvider';
import SocketProvider from '../store/SocketProvider';

import Player from './component';
import Spinner from '../_components/Spinner';

const PlayerContainer = () => {
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

            return <Player />;
          }}
        </GameConsumer>
      </SocketProvider>
    </GameProvider>);
};

export default PlayerContainer;
