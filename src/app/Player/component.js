import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withGame } from '../store/GameProvider';
import { withSocket } from '../store/SocketProvider';

import JinglePlayer from './JinglePlayer';
import ScoreManager from './ScoreManager';
import BuzzerReciever from './BuzzerReciever';

import styles from './styles.module.scss';

class Player extends Component {
  componentDidMount() {
    const {
      createListenner,
      onRecieveBuzz,
    } = this.props;
    createListenner('buzz', onRecieveBuzz);
  }

  componentWillUnmount() {
    this.props.removeListenner('buzz', this.props.onRecieveBuzz);
  }

  render() {
    const { teamBuzzer } = this.props;
    return (
      <BuzzerReciever className={styles.player}>
        <ScoreManager />
        <JinglePlayer />
      </BuzzerReciever>);
  }
}
Player.defaultProps = {
  teamBuzzer: undefined,
};

Player.propTypes = {
  updateScore: PropTypes.func.isRequired,
  createListenner: PropTypes.func.isRequired,
  removeListenner: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  onRecieveBuzz: PropTypes.func.isRequired,
  teamBuzzer: PropTypes.string,

};

export default withGame(withSocket(Player));
