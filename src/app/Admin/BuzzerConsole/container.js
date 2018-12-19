import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSocket } from '../../store/SocketProvider';
import BuzzerConsole from './component';

class BuzzerConsoleContainer extends Component {
  state = {
    team: null,
    isActive: true,
  }

  componentDidMount() {
    const { createListenner } = this.props;
    createListenner('buzz', ({ team }) => {
      this.setState(state => {
        if (state.team === null && state.isActive) {
          return {
            team,
          };
        }
      });
    });
  }

  componentWillUnmount() {
    this.props.removeListenner('buzz');
  }

  onResetBuzzerHandler = () => {
    this.setState({
      team: null,
    });
  }

  onIsActiveToggleHandler = event => {
    this.setState({
      isActive: event.target.checked,
      team: null,
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
};

export default withSocket(BuzzerConsoleContainer);
