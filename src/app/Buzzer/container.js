import React from 'react';

import { withRouter } from 'react-router-dom';
import GameProvider, { GameConsumer } from '../store/GameProvider';
import SocketProvider from '../store/SocketProvider';

import Buzzer from './component';
import Spinner from '../_components/Spinner';

const BuzzerContainer = withRouter(({ match: { params: { team } } }) => {
  return (
    <GameProvider>
      <SocketProvider>
        <GameConsumer>
          {({
            isLoading, hasError, ketchup, mayo,
          }) => {
            if (isLoading) {
              return <Spinner />;
            }

            if (hasError) {
              return <div>hasError</div>;
            }

            return <Buzzer team={team} score={team === 'ketchup' ? ketchup : mayo} />;
          }}
        </GameConsumer>
      </SocketProvider>
    </GameProvider>);
});

export default BuzzerContainer;
