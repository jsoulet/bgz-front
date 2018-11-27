import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Team from './component';
import {withGame} from '../../store/GameProvider';

import {TEAMS as TEAMS_CONST} from './constants';

class TeamContainer extends Component {
  onIncreaseHandler = () => {
    return this.props.changeScore(this.props.score + 1, this.props.team);
  }

  onDecreaseHandler = () => {
    return this.props.changeScore(this.props.score - 1, this.props.team);
  }

  render() {
    return <Team
      score={this.props.score}
      onDecrease={this.onDecreaseHandler}
      onIncrease={this.onIncreaseHandler}
      name={TEAMS_CONST[this.props.team]}
      isReadOnly={this.props.isReadOnly}
    />;
  }
}

export const TEAMS = TEAMS_CONST;

TeamContainer.propTypes = {
  isReadOnly: PropTypes.bool,
  score: PropTypes.number.isRequired,
  team: PropTypes.oneOf(Object.values(TEAMS))
}

export default withRouter(withGame(TeamContainer));
