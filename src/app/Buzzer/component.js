import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Score from '../_components/Score';
import BuzzerButton from './BuzzerButton';

import styles from './styles.module.scss';

const Buzzer = ({ team, score }) => {
  return (
    <div className={cn(styles.buzzer, styles[team])}>
      <div className={styles.halfScreen}>
        <Score value={score} />
      </div>
      <div className={styles.halfScreen}>
        <BuzzerButton team={team} />
      </div>
    </div>);
};

Buzzer.propTypes = {
  team: PropTypes.oneOf(['ketchup', 'mayo']).isRequired,
  score: PropTypes.number.isRequired,
};

export default Buzzer;
