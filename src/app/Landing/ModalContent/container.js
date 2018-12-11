import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import ModalContent from './component';

class ModalContentContainer extends Component {
  render() {
    const { match: { params: { gameId } } } = this.props;
    return <ModalContent gameId={gameId} />;
  }
}

ModalContentContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};


export default withRouter(ModalContentContainer);
