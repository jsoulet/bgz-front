import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Led = ({ team, className }) => {
  return <div className={cn(styles.led, {
    [styles.ketchup]: team === 'ketchup',
    [styles.mayo]: team === 'mayo',
  }, className)}
  />;
};

Led.defaultProps = {
  className: '',
  team: null,
};

Led.propTypes = {
  team: PropTypes.string,
  className: PropTypes.string,
};

export default Led;
