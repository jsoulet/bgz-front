import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chabat from './assets/chabat.jpg';
import Burgy from './assets/burgy.jpg';
import Card from '../../../_components/Card';
import styles from './styles.module.scss';

const Step2 = ({ gameId }) => {
  return (
    <div className={styles.step2}>
      <Link to={`/admin/${gameId}`}>
        <Card text="Présentateur">
          <div className={styles.cardImage}>
            <img src={Chabat} alt="presentateur" />
          </div>
        </Card>
      </Link>
      <Link to={`/player/${gameId}`}>
        <Card text="Joueur">
          <div className={styles.cardImage}>
            <img src={Burgy} alt="joueur" />
          </div>
        </Card>
      </Link>
    </div>);
};

Step2.propTypes = {
  gameId: PropTypes.string.isRequired,
};

export default Step2;
