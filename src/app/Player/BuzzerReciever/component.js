import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const BuzzerReciever = ({ team, children, className }) => {
  return (
    <div className={cn(
      styles.buzzerReciever,
      {
        [styles.ketchup]: team === 'ketchup',
        [styles.mayo]: team === 'mayo',
      },
      className,
    )}
    >
      {team && <div className={styles.overlay}>{`${team} a la main`}</div>}
      {children}
    </div>);
};

BuzzerReciever.defaultProps = {
  children: null,
  className: '',
  team: null,
};

BuzzerReciever.propTypes = {
  team: PropTypes.string,
  children: PropTypes.oneOf(PropTypes.element, PropTypes.arrayOf(PropTypes.element)),
  className: PropTypes.string,
};

export default BuzzerReciever;
