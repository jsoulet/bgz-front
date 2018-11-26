import React, {Component} from 'react';
import Admin from './component';

class AdminContainer extends Component {
  state = {
    game: null,
    isLoading: true,
    hasError: false,
  }

  componentDidMount() {
    const gameId = this.props.match.params.gameId;

    fetch(process.env.REACT_APP_API_GAMES + `${gameId}`, {mode: 'cors',})
    .then(response => {
      response
        .json()
        .then(data => {
          console.log(data);
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
  render( ) {
    if(this.state.isLoading) {
      return <div>isLoading</div>
    }
    if(this.state.hasError) {
      return <div>hasError</div>
    }

    return <Admin ketchup={this.state.game.ketchupMiams} mayo={this.state.game.mayoMiams}/>
  }
}

export default AdminContainer;
