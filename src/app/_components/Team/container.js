import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Team from './component';
import { withGame } from '../../store/GameProvider';

import { TEAMS as TEAMS_CONST } from './constants';

class TeamContainer extends Component {
  onIncreaseHandler = score => {
    const { team, changeScore } = this.props;
    if (score < 25) {
      changeScore(score + 1, team);
    }
  }

  onDecreaseHandler = score => {
    const { team, changeScore } = this.props;
    if (score > 0) {
      changeScore(score - 1, team);
    }
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

TeamContainer.defaultProps = {
  isReadOnly: false,
};

TeamContainer.propTypes = {
  isReadOnly: PropTypes.bool,
  score: PropTypes.number.isRequired,
  team: PropTypes.oneOf(Object.values(TEAMS)).isRequired,
  changeScore: PropTypes.func.isRequired,
};

export default withRouter(withGame(TeamContainer));
