import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { withRouter } from 'react-router';

export const SocketContext = createContext();

class SocketProvider extends Component {
  state = {
    socket: io(process.env.REACT_APP_SOCKET),
    sendMessage: (name, data) => {
      if (this.state.socket.connected) {
        this.state.socket.emit(name, {
          gameId: this.props.match.params.gameId,
          ...data,
        });
      }
    },
    createListenner: (name, func) => {
      this.state.socket.on(name, func);
    },
    removeListenner: (name, func) => {
      this.state.socket.removeListener(name, func);
    },
  }

  componentDidMount() {
    const { match: { params: { gameId } } } = this.props;
    this.state.createListenner('askGameId', () => {
      console.log('send Game ID');
      this.state.sendMessage('askGameId-Response', { gameId });
    });
  }

  render() {
    const { state, props: { children } } = this;
    return <SocketContext.Provider value={state}>{children}</SocketContext.Provider>;
  }
}

SocketProvider.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export const withSocket = WrappedComponent => props => (
  <SocketContext.Consumer>
    {store => <WrappedComponent {...props} {...store} />}
  </SocketContext.Consumer>
);

export const SocketConsumer = SocketContext.Consumer;
export default withRouter(SocketProvider);
