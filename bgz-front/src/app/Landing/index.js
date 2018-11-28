import React from 'react';

import Modal from '../_components/Modal';
import Button from '../_components/Button';
import BurgerQuiz from '../_components/BurgerQuiz';
import Input from '../_components/Input';

import styles from './styles.module.scss'

const Landing = () => {
  return (<div className={styles.landing}>
    <Modal>
      <BurgerQuiz/>
      <div className={styles.codeWrapper}>
        <label htmlFor="code">Code</label>
        <Input id="code"/>
      </div>
      <div>
        <Button block className={styles.button}>Rejoindre la partie</Button>
        <Button block link className={styles.button}>Nouvelle partie</Button>
      </div>
    </Modal>
  </div>)
}

export default Landing;
