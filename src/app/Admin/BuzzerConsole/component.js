import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import Button from '../../_components/Button';
import Led from './Led';

import 'react-toggle/style.css';
import styles from './styles.module.scss';


const BuzzerConsole = ({
  team, onResetBuzzer, onIsActiveToggle, isActive,
}) => {
  return (
    <div className={styles.buzzerConsole}>
      <div className={styles.title}>Buzzer</div>
      <div className={styles.buzzerConsoleContent}>
        <Toggle checked={isActive} onChange={onIsActiveToggle} />
        <Led team={team} className={styles.led} />
        <Button onClick={onResetBuzzer}>Réinitialiser</Button>
      </div>

    </div>);
};

BuzzerConsole.defaultProps = {
  team: null,
};

BuzzerConsole.propTypes = {
  team: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onResetBuzzer: PropTypes.func.isRequired,
  onIsActiveToggle: PropTypes.func.isRequired,
};

export default BuzzerConsole;
