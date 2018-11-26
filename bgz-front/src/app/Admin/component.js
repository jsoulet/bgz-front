import React from 'react';
import PropTypes from 'prop-types';

import Game from '../_components/Game';

const Admin = ({ketchup, mayo}) =>{
  return (
    <Game ketchup={ketchup} mayo={mayo}/>
  );
}

Admin.propTypes = {
  ketchup: PropTypes.number.isRequired,
  mayo: PropTypes.number.isRequired,
}

export default Admin;
