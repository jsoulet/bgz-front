import React, {Component} from 'react';
import io from 'socket.io-client';

import Player from './component';
import Spinner from '../_components/Spinner';

class PlayerContainer extends Component {
  state = {
    game: null,
    isLoading: true,
    hasError: false,
  }
  connectToWebSocket = (gameId) => {
    const socket = io(process.env.REACT_APP_SOCKET);
    socket.on('askGameId', (data) => {
      socket.emit('askGameId-Response', { gameId: gameId });
    });
    socket.on('message', (message) => {
      console.log(message);
    });
    socket.on('score', (score) => {
      console.log(score);
      if(score.ketchupMiams) {
        this.setState((state) => ({ game: {...state.game, ketchupMiams: score.ketchupMiams}}))
      }
      if(score.mayoMiams) {
        console.log({ game: { ...this.state.game, mayoMiams: score.mayoMiams}})
        this.setState(
          (state) => {
            return ({ game: {...state.game, mayoMiams: score.mayoMiams}});
          }
        )
      }
    });
  }
  fetchGame = (gameId) => {
    fetch(process.env.REACT_APP_API_GAMES + `/${gameId}`, {mode: 'cors',})
    .then(response => {
      response
        .json()
        .then(data => {
          this.connectToWebSocket(gameId);
          this.setState({
            isLoading: false,
            game: data,
          })
        })
    })
    .catch(() => {
      this.setState({
        isLoading: false,
        hasError: true,
      })
    })
  }
  componentDidMount() {
    const gameId = this.props.match.params.gameId;
    this.fetchGame(gameId);
  }
  render( ) {
    if(this.state.isLoading) {
      return <Spinner/>
    }
    if(this.state.hasError) {
      return <div>hasError</div>
    }

    return <Player ketchup={this.state.game.ketchupMiams} mayo={this.state.game.mayoMiams}/>
  }
}

export default PlayerContainer;
