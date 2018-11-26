import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Button = ({children, secondary, team, ...props}) => {
  return <button
    className={cn(styles.button, {
      [styles.secondary]: secondary,
      [styles.ketchup]: team === 'ketchup',
      [styles.mayo]: team === 'mayo',
    })}
    {...props}
  >
    {children}
  </button>;
}

Button.defaultProps = {
  secondary: false,
};

Button.propTypes = {
  team: PropTypes.oneOf([
    'ketchup',
    'mayo'
  ]),
  secondary: PropTypes.bool
}

export default Button;
