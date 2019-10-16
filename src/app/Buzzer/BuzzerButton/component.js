import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const BuzzerButton = ({
  onClick, team, isActive = false, buzzerTeam,
}) => {
  if (buzzerTeam) {
    return <span className={styles.buzzerTeam}>{`${buzzerTeam} a la main`}</span>;
  }
  return <button className={cn(styles.buzzerButton, { [styles.inactive]: !isActive, [styles[team]]: isActive })} onClick={onClick} />;
};

export default BuzzerButton;
