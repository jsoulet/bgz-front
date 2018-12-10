import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import JingleConsole from './component';
import { withSocket } from '../../store/SocketProvider';

class JingleConsoleContainer extends Component {
  onJingleClickHandler = jingleType => {
    const { match: { params: { gameId } }, sendMessage } = this.props;
    sendMessage('jingle', { gameId, jingleType });
  }

  render() {
    return <JingleConsole
      onClick={this.onJingleClickHandler}
    />;
  }
}

JingleConsoleContainer.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(withSocket(JingleConsoleContainer));
