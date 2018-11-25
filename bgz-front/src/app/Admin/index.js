import React from 'react';
import Team from './Team';

import styles from './styles.module.scss';

const Admin = () =>

  <div className={styles.admin}>
    <Team score={25} team={Team.TEAMS.KETCHUP}/>
    <Team score={25} team={Team.TEAMS.MAYO}/>
  </div>

export default Admin;
