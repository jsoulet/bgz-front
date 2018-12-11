import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Button = ({
  children,
  secondary,
  block,
  team,
  className,
  color,
  link,
  type,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        {
          [styles[color]]: color ? styles[color] : styles.black,
          [styles.secondary]: secondary,
          [styles.block]: block,
          [styles.link]: link,
          [styles.disabled]: disabled,
        },
      )}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>);
};

Button.defaultProps = {
  secondary: false,
  block: false,
  link: false,
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  secondary: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  block: PropTypes.bool,
  link: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
