import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Button = ({children, secondary, block, team, className, color, link, ...props}) => {

  return <button
    className={cn(
      styles.button,
      className,
      {
        [styles[color]]: color && styles[color],
        [styles.secondary]: secondary,
        [styles.block]: block,
        [styles.link]: link,
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
  secondary: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
}

export default Button;
