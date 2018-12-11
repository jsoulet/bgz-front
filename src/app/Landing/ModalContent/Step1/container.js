import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Step1 from './component';


class Step1Container extends Component {
  state = {
    isLoading: false,
    errorMessage: '',
    gameId: null,
  }

  onConnectHandler = code => {
    this.setState({
      isLoading: true,
      errorMessage: '',
    });
    fetch(
      `${process.env.REACT_APP_API_GAMES}/?code=${code}`,
      {
        mode: 'cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    ).then(response => {
      this.setState({
        isLoading: false,
      });
      if (!response.ok) {
        throw Error(response);
      }
      response.json().then(
        data => {
          // this.setState({
          //   gameId: data.uuid,
          // });
          this.props.history.push(`/${data.uuid}`);
        },
      );
    })
      .catch(() => {
        this.setState({
          errorMessage: 'An error occured',
        });
      });
  }

  onNewGameHandler = () => {
    fetch(
      process.env.REACT_APP_API_GAMES,
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => {
        this.setState({
          isLoading: false,
        });
        if (!response.ok) {
          throw Error(response);
        }
        response.json().then(
          data => {
            this.props.history.push(`/admin/${data.uuid}`);
            // this.setState(() => ({ gameId: data.uuid }));
          },
        );
      })
      .catch(() => {
        this.setState({
          errorMessage: 'An error occured',
        });
      });
  }

  render() {
    const { location } = this.props;
    const { errorMessage, isLoading, gameId } = this.state;
    return <Step1
      onNewGame={this.onNewGameHandler}
      onConnect={this.onConnectHandler}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />;
  }
}

export default withRouter(Step1Container);
