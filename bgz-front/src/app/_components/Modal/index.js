import React from 'react';

import styles from './styles.module.scss'

const Modal = ({children}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>)
}

export default Modal;
