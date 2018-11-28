import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../_components/Modal';
import Button from '../_components/Button';
import BurgerQuiz from '../_components/BurgerQuiz';
import Input from '../_components/Input';

import styles from './styles.module.scss'

const Landing = ({onNewGame}) => {
  return (<div className={styles.landing}>
    <Modal>
      <BurgerQuiz/>
      <div className={styles.codeWrapper}>
        <label htmlFor="code">Code</label>
        <Input id="code"/>
      </div>
      <div>
        <Button block className={styles.button}>Rejoindre la partie</Button>
        <Button block link className={styles.button} onClick={onNewGame}>Nouvelle partie</Button>
      </div>
    </Modal>
  </div>)
}

Landing.propTypes = {
  onNewGame: PropTypes.func.isRequired,
}

export default Landing;
