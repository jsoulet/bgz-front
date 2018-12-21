import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Score = ({ value, className }) => {
  return (
    <div className={cn(styles.score, className)}>
      {value}
    </div>);
};
Score.defaultProps = {
  className: '',
};

Score.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};


export default Score;
