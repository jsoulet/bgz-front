import React, { createContext, Component } from 'react';
import isNumber from 'lodash/isNumber';
import { withRouter } from 'react-router';

import { buildUpdateScoreBody, getScoreFromResponse } from './utils';

export const GameContext = createContext();

class GameProvider extends Component {
  state = {
    isLoading: false,
    ketchup: 0,
    mayo: 0,
    game: {
      ketchupMiams: 0,
      mayoMiams: 0,
      isBuzzerActive: false,
      buzzerTeam: null,
    },
    getGame: ({ withLoader = false }) => {
      this.pullGame(this.state.gameId, { withLoader });
    },
    updateGame: (game, options = { withLoader: false }) => {
      const oldGame = { ...this.state.game };
      this.setState(({ game: stateGame }) => ({
        game: {
          ...stateGame,
          ...game,
        },
      }), () => {
        this.pushGame(game, oldGame, options);
      });
    },
    changeScore: (score, team) => this.changeScore(score, this.state.score, team),
    updateScore: data => {
      const score = {};
      if (isNumber(data.ketchupMiams)) {
        score.ketchup = data.ketchupMiams;
      }
      if (isNumber(data.mayoMiams)) {
        score.mayo = data.mayoMiams;
      }
      this.setState(state => ({ ...state, ...score }));
    },
  }

  componentDidMount() {
    this.setState(() => ({
      gameId: this.props.match.params.gameId,
    }),
    () => this.state.getGame({ withLoader: true }));
  }

  changeScore = (score, oldScore, team) => {
    const { match: { params: { gameId } } } = this.props;
    fetch(
      `${process.env.REACT_APP_API_GAMES}/${gameId}`,
      {
        mode: 'cors',
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: buildUpdateScoreBody(score, team),
      },
    )
      .then(response => {
        response.json().then(data => {
          this.setState(getScoreFromResponse(data, team));
        });
      })
      .catch(() => {
        this.setState({
          score: oldScore,
        });
      });
  }

  pullGame = (gameId, { withLoader }) => {
    if (withLoader) {
      this.setState({
        isLoading: true,
      });
    }

    fetch(`${process.env.REACT_APP_API_GAMES}/${gameId}`, { mode: 'cors' })
      .then(response => {
        response
          .json()
          .then(data => {
            this.setState({
              isLoading: false,
              game: data,
              // @todo: migrate usage of state.ketchup|mayo to state.game.ketchup|mayo
              ketchup: data.ketchupMiams,
              mayo: data.mayoMiams,
            });
          });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          hasError: true,
        });
      });
  }

  pushGame = (newGame, oldGame, { withLoader }) => {
    if (withLoader) {
      this.setState({
        isLoading: true,
      });
    }
    fetch(
      `${process.env.REACT_APP_API_GAMES}/${this.state.gameId}`,
      {
        mode: 'cors',
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      },
    )
      .then(response => {
        response.json().then(game => {
          this.setState({
            game,
            isLoading: false,
          });
        });
      })
      .catch(() => {
        this.setState({
          game: oldGame,
          isLoading: false,
          hasError: true,
        });
      });
  }

  render() {
    const { state, props: { children } } = this;
    return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
  }
}

export const withGame = WrappedComponent => props => (
  <GameContext.Consumer>
    {store => <WrappedComponent {...props} {...store} />}
  </GameContext.Consumer>
);

export const GameConsumer = GameContext.Consumer;
export default withRouter(GameProvider);
