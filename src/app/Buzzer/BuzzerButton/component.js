import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const BuzzerButton = ({ onClick, team }) => {
  return <button className={cn(styles.buzzerButton, styles[team])} onClick={onClick} />;
};

export default BuzzerButton;
