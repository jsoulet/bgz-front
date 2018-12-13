import React from 'react';
import Modal from '../_components/Modal';
import BurgerQuiz from '../_components/BurgerQuiz';
import Background from './Background';
import ModalContent from './ModalContent';

import styles from './styles.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Background />
      <Modal>
        <BurgerQuiz />
        <ModalContent />
      </Modal>
    </div>);
};

export default Landing;
