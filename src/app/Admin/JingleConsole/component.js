import React from 'react';
import PropTypes from 'prop-types';

const JingleConsole = ({
  onClick,
}) => {
  return (
    <div>
      <button type="button" onClick={() => onClick('SelOuPoivre')}>Sel ou Poivre</button>
      <button type="button" onClick={() => onClick('Addition')}>Addition</button>
      <button type="button" onClick={() => onClick('Menus')}>Menus</button>
      <button type="button" onClick={() => onClick('Nuggets')}>Nuggets</button>
      <button type="button" onClick={() => onClick('BurgerDeLaMort')}>Burger de la Mort</button>
    </div>);
};

JingleConsole.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default JingleConsole;
