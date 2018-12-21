import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TeamScore from './TeamScore';
import BuzzerButton from './BuzzerButton';

import styles from './styles.module.scss';

const Buzzer = ({ team }) => {
  return (
    <div className={cn(styles.buzzer, styles[team])}>
      <div className={styles.halfScreen}>
        <TeamScore team={team} />
      </div>
      <div className={styles.halfScreen}>
        <BuzzerButton team={team} />
      </div>
    </div>);
};

Buzzer.propTypes = {
  team: PropTypes.oneOf(['ketchup', 'mayo']).isRequired,
};

export default Buzzer;
