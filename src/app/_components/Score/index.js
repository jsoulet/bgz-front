import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Score = ({ value }) => {
  return (
    <div className={styles.score}>
      {value}
    </div>);
};

Score.propTypes = {
  value: PropTypes.number.isRequired,
};


export default Score;
