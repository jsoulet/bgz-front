import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Button = ({children, ...props}) => {
  return <button
    className={cn(styles.button, {
      [styles.secondary]: props.secondary,
      [styles.ketchup]: props.team === 'ketchup',
      [styles.mayo]: props.team === 'mayo',
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
