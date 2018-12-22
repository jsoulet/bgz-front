import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Input = ({ className, ...props }) => {
  return <input className={cn(styles.input, className)} {...props} />;
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
