import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Input = (props) => {
  return <input className={styles.input} {...props}/>;
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
}

export default Input;
