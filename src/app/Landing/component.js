import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../_components/Modal';
import BurgerQuiz from '../_components/BurgerQuiz';
import ModalContent from './ModalContent';

import styles from './styles.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Modal>
        <BurgerQuiz />
        <ModalContent />
      </Modal>
    </div>);
};

export default Landing;
