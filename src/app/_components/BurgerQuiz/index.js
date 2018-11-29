import React from 'react';

import styles from './styles.module.scss';

const BurgerQuiz = () => {
  return <div className={styles.burgerQuiz}>
    <p className={styles.burger}>Burger</p>
    <p className={styles.quiz}>
      <span className={styles.ketchup}>Q</span>
      <span className={styles.mayo}>U</span>
      <span className={styles.ketchup}>I</span>
      <span className={styles.mayo}>Z</span>
    </p>
  </div>
}

export default BurgerQuiz;
