import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Team from './component';

import {TEAMS} from './constants';

class TeamContainer extends Component {
  state = {
    score: this.props.score,
  };

  onIncreaseHandler = () => {
    return this.setState(({score}) => ({score : score + 1}));
  }

  onDecreaseHandler = () => {
    return this.setState(({score})=> ({score : score - 1}));
  }

  render() {
    return <Team
      score={this.state.score}
      onDecrease={this.onDecreaseHandler}
      onIncrease={this.onIncreaseHandler}
      name={TEAMS[this.props.team]}
    />;
  }
}

TeamContainer.TEAMS = TEAMS;

TeamContainer.propTypes = {
  score: PropTypes.number.isRequired,
  team: PropTypes.oneOf(Object.values(TEAMS))
}

export default TeamContainer;
