import React, {Component} from 'react';

import {Redirect, withRouter} from 'react-router-dom';
import Landing from './component';

class LandingContainer extends Component {
  state = {
    isLoading: false,
    hasError: false,
    gameId: null,
  }

  onNewGameHandler = () => {
    fetch(
      process.env.REACT_APP_API_GAMES,
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    )
    .then((response) => {
      response.json().then(
        (data) => {
          this.setState(() => ({gameId: data.uuid}))
      });
    })
    .catch((error) => {
      this.setState({
        hasError: true,
      })
    })
  }

  render() {
    const {location} = this.props;
    const {hasError, isLoading, gameId} = this.state;
    if(gameId) {
      return <Redirect push to={{
        pathname: `${location.pathname}admin/${gameId}`,
      }}/>
    }
    return <Landing
      onNewGame={this.onNewGameHandler}
      hasError={hasError}
      isLoading={isLoading}
    />;
  }
}

export default withRouter(LandingContainer);
