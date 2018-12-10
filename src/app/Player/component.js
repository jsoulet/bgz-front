import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withGame } from '../store/GameProvider';
import { withSocket } from '../store/SocketProvider';

import Game from '../_components/Game';
import JinglePlayer from './JinglePlayer';

class Player extends Component {
  componentDidMount() {
    const {
      createListenner,
      updateScore,
    } = this.props;

    createListenner('askGameId', this.onAskIdHandler);
    createListenner('score', updateScore);
  }

  componentWillUnmount() {
    this.props.removeListenner('askGameId', this.onAskIdHandler);
    this.props.removeListenner('score', this.props.updateScore);
  }

  onAskIdHandler = () => {
    console.log('gameID sent');
    this.props.sendMessage('askGameId-Response', {
      gameId: this.props.match.params.gameId,
    });
  }

  render() {
    return (
      <div>
        <Game isReadOnly />
        <JinglePlayer />
      </div>);
  }
}

Player.propTypes = {
  updateScore: PropTypes.func.isRequired,
  createListenner: PropTypes.func.isRequired,
  removeListenner: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(withGame(withSocket(Player)));
