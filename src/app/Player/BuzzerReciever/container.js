import React, { Component } from 'react';
import isNull from 'lodash/isNull';
import BuzzerReciever from './component';
import { withSocket } from '../../store/SocketProvider';
import { withGame } from '../../store/GameProvider';

class BuzzerRecieverContainter extends Component {
  state = {
    teamBuzzer: null,
    isBuzzerEnabled: this.props.game.isBuzzerEnabled,
  }

  componentDidMount() {
    this.props.createListenner('buzz', this.onBuzzerUpdate);
    this.props.createListenner('updateGame', this.onGameUpdate);
  }

  componentWillUnmount() {
    this.props.removeListenner('buzz', this.onBuzzerUpdate);
    this.props.removeListenner('updateGame', this.onGameUpdate);
  }

  onBuzzerUpdate = ({ team }) => {
    if (isNull(team)
        || (isNull(this.state.teamBuzzer) && this.state.isBuzzerEnabled)) {
      console.log({ team });
      this.setState({ teamBuzzer: team });
    }
  }

  onGameUpdate = ({ isBuzzerEnabled }) => {
    this.setState({ isBuzzerEnabled });
  }

  render() {
    const { children, className } = this.props;
    return (
      <BuzzerReciever
        team={this.state.teamBuzzer}
        className={className}
      >
        { children }
      </BuzzerReciever>);
  }
}

export default withGame(withSocket(BuzzerRecieverContainter));
