import React from 'react';
import PropTypes from 'prop-types';

import Team from './Team';

import styles from './styles.module.scss';

const Admin = ({ketchup, mayo}) =>{
  return (
    <div className={styles.admin}>
      <Team score={ketchup} team={Team.TEAMS.KETCHUP}/>
      <Team score={mayo} team={Team.TEAMS.MAYO}/>
    </div>
  );
}

Admin.propTypes = {
  ketchup: PropTypes.number.isRequired,
  mayo: PropTypes.number.isRequired,
}


export default Admin;
