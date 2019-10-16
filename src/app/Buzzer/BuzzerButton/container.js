import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import isUndefined from 'lodash/isUndefined';
import BuzzerButton from './component';
import { withSocket } from '../../store/SocketProvider';
import { withGame } from '../../store/GameProvider';

class BuzzerButtonContainer extends Component {
  state = {
    isBuzzerEnabled: this.props.game.isBuzzerEnabled,
    buzzerTeam: this.props.game.buzzerTeam,
  }

  componentDidMount() {
    this.props.createListenner('updateGame', this.onUpdateGameHandler);
    this.props.createListenner('buzz', this.onBuzzHandler);
  }

  componentWillUnmount() {
    this.props.removeListenner('updateGame', this.onUpdateGameHandler);
    this.props.removeListenner('buzz', this.onBuzzHandler);
  }

  onBuzzHandler = ({ team }) => {
    this.setState({
      buzzerTeam: team,
    });
  }

  onUpdateGameHandler = ({ isBuzzerEnabled, buzzerTeam }) => {
    if (!isUndefined(isBuzzerEnabled)) {
      this.setState({
        isBuzzerEnabled,
      });
    }
    if (!isUndefined(buzzerTeam)) {
      this.setState({
        buzzerTeam,
      });
    }
  }

  onClickHandler = () => {
    const {
      team, sendMessage, match: { params: { gameId } },
    } = this.props;

    const { isBuzzerEnabled } = this.state;
    if (isBuzzerEnabled) {
      sendMessage('buzz', { team, gameId });
    }
  }


  render() {
    const { isBuzzerEnabled, buzzerTeam } = this.state;
    return <BuzzerButton
      team={this.props.team}
      isActive={isBuzzerEnabled}
      onClick={this.onClickHandler}
      buzzerTeam={buzzerTeam}
    />;
  }
}

BuzzerButtonContainer.propTypes = {
  team: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
  createListenner: PropTypes.func.isRequired,
  removeListenner: PropTypes.func.isRequired,
  game: PropTypes.shape({
    isBuzzerEnabled: PropTypes.bool.isRequired,
    buzzerTeam: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(withSocket(withGame(BuzzerButtonContainer)));
