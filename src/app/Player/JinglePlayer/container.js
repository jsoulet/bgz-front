import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JinglePlayer from './component';
import { withSocket } from '../../store/SocketProvider';

import SelOuPoivre from './assets/SelOuPoivre.webm';
import Addition from './assets/Addition.webm';
import BurgerDeLaMort from './assets/BurgerDeLaMort.webm';
import Menus from './assets/Menus.webm';
import Nuggets from './assets/Nuggets.webm';

class JinglePlayerContainer extends Component {
  state = {
    jingleUrl: null,
  }

  componentDidMount() {
    this.props.createListenner('jingle', this.onJingleSentHandler);
  }

  componentWillUnmount() {
    this.props.removeListenner('jingle', this.onJingleSentHandler);
  }

  onJingleSentHandler = ({ jingleType }) => {
    const jingleData = this.getJingleDataFromType(jingleType);
    this.setState({ jingleUrl: jingleData.url });
    this.removeJingle(jingleData.length);
  }

  removeJingle = timer => {
    setTimeout(() => {
      this.setState({
        jingleUrl: null,
      });
    }, timer * 1000);
  }

  getJingleDataFromType = type => {
    switch (type) {
      case 'SelOuPoivre': {
        return {
          url: SelOuPoivre,
          length: 8,
        };
      }
      case 'Addition': {
        return {
          url: Addition,
          length: 5,
        };
      }
      case 'Menus': {
        return {
          url: Menus,
          length: 5,
        };
      }
      case 'Nuggets': {
        return {
          url: Nuggets,
          length: 8,
        };
      }
      case 'BurgerDeLaMort': {
        return {
          url: BurgerDeLaMort,
          length: 9,
        };
      }
      default: {
        return {};
      }
    }
  }

  render() {
    const { jingleUrl } = this.state;
    if (jingleUrl) {
      return <JinglePlayer jingleUrl={this.state.jingleUrl} />;
    }
    return null;
  }
}

JinglePlayerContainer.propTypes = {
  createListenner: PropTypes.func.isRequired,
  removeListenner: PropTypes.func.isRequired,
};

export default withSocket(JinglePlayerContainer);
