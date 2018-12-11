import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';

const ModalContainer = ({ gameId }) => {
  if (!gameId) {
    return <Step1 />;
  }

  return <Step2 gameId={gameId} />;
};

ModalContainer.propTypes = {
  gameId: PropTypes.string,
};

export default ModalContainer;
