import React from 'react';

import styles from './styles.module.scss';

const Score = ({value}) => {
  return (<div className={styles.score}>
    {value}
  </div>)
}

export default Score;
