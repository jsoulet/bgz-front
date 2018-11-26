import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import {
  buildUpdateScoreBody,
  getScoreFromResponse,
} from './utils';

import Team from './component';

import {TEAMS} from './constants';

class TeamContainer extends Component {
  state = {
    score: this.props.score,
  };

  changeScore = (score, oldScore) => {
    const {team, match: {params: {gameId}}} = this.props;
    this.setState({
      score: score,
    });
    fetch(
      process.env.REACT_APP_API_GAMES + `/${gameId}`,
      {
        mode: 'cors',
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: buildUpdateScoreBody(score, team)
      }
    )
    .catch((error) => {
      this.setState({
        score: oldScore,
      })
    })
  }

  onIncreaseHandler = () => {
    return this.changeScore(this.state.score + 1);
  }

  onDecreaseHandler = () => {
    return this.changeScore(this.state.score - 1);
  }

  render() {
    return <Team
      score={this.state.score}
      onDecrease={this.onDecreaseHandler}
      onIncrease={this.onIncreaseHandler}
      name={TEAMS[this.props.team]}
      isReadOnly={this.props.isReadOnly}
    />;
  }
}

TeamContainer.TEAMS = TEAMS;

TeamContainer.propTypes = {
  isReadOnly: PropTypes.bool,
  score: PropTypes.number.isRequired,
  team: PropTypes.oneOf(Object.values(TEAMS))
}

export default withRouter(TeamContainer);
