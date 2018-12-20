import React from 'react';

import SocketProvider from '../store/SocketProvider';
import GameProvider, { GameContext, withGame } from '../store/GameProvider';
import Spinner from '../_components/Spinner';
import Admin from './component';

const AdminContainer = () => (
  <GameProvider>
    <SocketProvider>
      <GameContext.Consumer>
        {({ isLoading, hasError }) => {
          if (isLoading) {
            return <Spinner />;
          }

          if (hasError) {
            return <div>hasError</div>;
          }

          return <Admin />;
        } }
      </GameContext.Consumer>
    </SocketProvider>
  </GameProvider>);

export default withGame(AdminContainer);
