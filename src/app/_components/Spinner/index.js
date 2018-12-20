import React from 'react';
import './styles.scss';

const Spinner = () => {
  return (
    <div className="container">
      <div id="icon" className="burger">
        <span className="hamburger bun top" />
        <span className="hamburger chez" />
        <span className="hamburger meet" />
        <span className="hamburger lettus" />
        <span className="hamburger bun bottom" />
      </div>
    </div>);
};

export default Spinner;
