import React from 'react';
import PropTypes from 'prop-types';
import ScoreSvg from './ScoreSvg';

import styles from './styles.module.scss';

const BurgerScore = ({ score, isRevert }) => (
  <div className={isRevert ? styles.reverted : ''}>
    <ScoreSvg score={score} />
  </div>
);

BurgerScore.defaultProps = {
  isRevert: false,
};
BurgerScore.propTypes = {
  score: PropTypes.number.isRequired,
  isRevert: PropTypes.bool,
};

export default BurgerScore;
