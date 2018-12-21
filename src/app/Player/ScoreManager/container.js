import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import ScoreManager from './component';
import { withGame } from '../../store/GameProvider';
import { withSocket } from '../../store/SocketProvider';

class ScoreManagerContainer extends Component {
  state = {
    ketchupMiams: 0,
    mayoMiams: 0,
  }

  componentDidMount() {
    const { ketchupMiams, mayoMiams } = this.props.game;
    this.setState({
      ketchupMiams,
      mayoMiams,
    });

    this.props.createListenner('updateGame', this.onUpdateScoreHandler);
  }

  componentWillUnmount() {
    this.props.removeListenner('updateGame', this.onUpdateScoreHandler);
  }

  onUpdateScoreHandler = payload => {
    this.setState(state => ({
      ketchupMiams: get(payload, 'ketchupMiams', state.ketchupMiams),
      mayoMiams: get(payload, 'mayoMiams', state.mayoMiams),
    }));
  }

  render() {
    const { ketchupMiams, mayoMiams } = this.state;
    return <ScoreManager ketchup={ketchupMiams} mayo={mayoMiams} />;
  }
}

ScoreManagerContainer.propTypes = {
  game: PropTypes.shape({
    ketchupMiams: PropTypes.number,
    mayoMiams: PropTypes.number,
  }).isRequired,
  createListenner: PropTypes.func.isRequired,
  removeListenner: PropTypes.func.isRequired,
};

export default withSocket(withGame(ScoreManagerContainer));
