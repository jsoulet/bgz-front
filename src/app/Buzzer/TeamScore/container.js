import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGame } from '../../store/GameProvider';
import { withSocket } from '../../store/SocketProvider';
import Score from '../../_components/Score';

import styles from './styles.module.scss';

class TeamScoreContainer extends Component {
  state = {
    ketchupMiams: 0,
    mayoMiams: 0,
  }

  componentDidMount() {
    this.setState({
      ketchupMiams: this.props.game.ketchupMiams,
      mayoMiams: this.props.game.mayoMiams,
    });
    this.props.createListenner('updateGame', this.onUpdateGameHandler);
  }

  componentWillUnmount() {
    this.props.removeListenner('updateGame', this.onUpdateGameHandler);
  }

  onUpdateGameHandler = ({ ketchupMiams, mayoMiams }) => {
    this.setState(state => ({
      ketchupMiams: ketchupMiams || state.ketchupMiams,
      mayoMiams: mayoMiams || state.mayoMiams,
    }));
  }

  render() {
    const { team } = this.props;
    const score = team === 'ketchup' ? this.state.ketchupMiams : this.state.mayoMiams;
    return <Score value={score} className={styles.score} />;
  }
}

TeamScoreContainer.propTypes = {
  team: PropTypes.string.isRequired,
  createListenner: PropTypes.func.isRequired,
  removeListenner: PropTypes.func.isRequired,
  game: PropTypes.shape({
    ketchupMiams: PropTypes.number.isRequired,
    mayoMiams: PropTypes.number.isRequired,
  }).isRequired,
};

export default withSocket(withGame(TeamScoreContainer));
