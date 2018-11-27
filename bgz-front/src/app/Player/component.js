import React, {Component} from 'react';
import io from 'socket.io-client';
import {withRouter} from 'react-router-dom';
import {withGame} from '../store/GameProvider';

import Game from '../_components/Game';

class Player extends Component {
  connectToWebSocket = (gameId) => {
    const socket = io(process.env.REACT_APP_SOCKET);
    socket.on('askGameId', (data) => {
      socket.emit('askGameId-Response', { gameId: gameId });
    });
    socket.on('message', (message) => {
      console.log(message);
    });
    socket.on('score', (score) => {
      console.log(score);
      this.props.updateScore(score);
    });
  }

  componentDidMount() {
    const gameId = this.props.match.params.gameId;
    this.connectToWebSocket(gameId);
  }

  render() {
    return <Game isReadOnly/>;
  }
}

export default withRouter(withGame(Player));
