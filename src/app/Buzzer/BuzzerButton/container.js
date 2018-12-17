import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BuzzerButton from './component';
import { withSocket } from '../../store/SocketProvider';

class BuzzerButtonContainer extends Component {
  onClickHandler = () => {
    const { team, sendMessage, match: { params: { gameId } } } = this.props;
    sendMessage('buzz', { team, gameId });
  }

  render() {
    return <BuzzerButton
      team={this.props.team}
      onClick={this.onClickHandler}
    />;
  }
}

BuzzerButtonContainer.propTypes = {
  team: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(withSocket(BuzzerButtonContainer));
