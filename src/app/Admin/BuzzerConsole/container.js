import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSocket } from '../../store/SocketProvider';
import BuzzerConsole from './component';
import { withGame } from '../../store/GameProvider';

class BuzzerConsoleContainer extends Component {
  state = {
    team: null,
    isActive: false,
  }

  componentDidMount() {
    const { createListenner, game: { isBuzzerEnabled } } = this.props;
    this.setState({
      isActive: isBuzzerEnabled,
    });

    createListenner('buzz', this.onBuzzHandler);
  }

  componentWillUnmount() {
    this.props.removeListenner('buzz', this.onBuzzHandler);
  }

  static getDerivedStateFromProps(props) {
    return {
      isActive: props.game.isBuzzerEnabled,
    };
  }

  onBuzzHandler = ({ team }) => {
    if (team === null) {
      return;
    }
    this.setState(state => {
      if (state.team === null && state.isActive) {
        this.props.updateGame({
          isBuzzerEnabled: false,
          buzzerTeam: team,
        });
        return {
          team,
          isActive: false,
        };
      }
    });
  }

  onResetBuzzerHandler = () => {
    this.props.sendMessage('buzz', {
      team: null,
    });
    this.setState({
      team: null,
    });
  }

  onIsActiveToggleHandler = event => {
    const isActive = event.target.checked;
    this.setState(() => {
      this.props.updateGame({
        isBuzzerEnabled: isActive,
      });
      return {
        isActive,
      };
    });
  }

  render() {
    return <BuzzerConsole
      team={this.state.team}
      onResetBuzzer={this.onResetBuzzerHandler}
      isActive={this.state.isActive}
      onIsActiveToggle={this.onIsActiveToggleHandler}
    />;
  }
}

BuzzerConsoleContainer.propTypes = {
  createListenner: PropTypes.func.isRequired,
  removeListenner: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  updateGame: PropTypes.func.isRequired,
  game: PropTypes.shape({
    gameId: PropTypes.string,
    buzzerValue: PropTypes.string,
    isBuzzerEnabled: PropTypes.bool,
  }).isRequired,
};

export default withGame(withSocket(BuzzerConsoleContainer));
