import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Card = ({ children, text, onClick }) => {
  return (
    <button className={styles.card} onClick={onClick} type="button">
      {children}
      {text && <div className={styles.textWrapper}>{text}</div>}
    </button>);
};

Card.defaultProps = {
  text: '',
  onClick: () => {},
};

Card.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired,
};


export default Card;
