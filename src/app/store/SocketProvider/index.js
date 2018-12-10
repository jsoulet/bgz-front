import React, { createContext, Component } from 'react';
import io from 'socket.io-client';
import { withRouter } from 'react-router';

export const SocketContext = createContext();

class SocketProvider extends Component {
  state = {
    socket: io(process.env.REACT_APP_SOCKET),
    sendMessage: (name, data) => {
      if (this.state.socket.connected) {
        this.state.socket.emit(name, data);
      }
    },
    createListenner: (name, func) => {
      this.state.socket.on(name, func);
    },
    removeListenner: (name, func) => {
      this.state.socket.removeListener(name, func);
    },
  }

  render() {
    const { state, props: { children } } = this;
    return <SocketContext.Provider value={state}>{children}</SocketContext.Provider>;
  }
}

export const withSocket = WrappedComponent => props => (
  <SocketContext.Consumer>
    {store => <WrappedComponent {...props} {...store} />}
  </SocketContext.Consumer>
);

export const SocketConsumer = SocketContext.Consumer;
export default withRouter(SocketProvider);
