import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../_components/Card';

import { ReactComponent as Addition } from './assets/Addition.svg';
import { ReactComponent as BurgerDeLaMort } from './assets/BurgerDeLaMort.svg';
import { ReactComponent as Menus } from './assets/Menus.svg';
import { ReactComponent as Nuggets } from './assets/Nuggets.svg';
import { ReactComponent as SelOuPoivre } from './assets/SelOuPoivre.svg';
import { ReactComponent as PlayIcon } from './assets/PlayIcon.svg';

import styles from './styles.module.scss';

const JingleConsole = ({
  onClick,
}) => {
  return (
    <div className={styles.jingleConsole}>
      <div className={styles.title}>
        Lancer les jingles
      </div>
      <div className={styles.jingleButtons}>
        <Card onClick={() => onClick('Nuggets')}>
          <div className={styles.imageWrapper}>
            <Nuggets />
          </div>
        </Card>
        <Card onClick={() => onClick('SelOuPoivre')}>
          <div className={styles.imageWrapper}>
            <SelOuPoivre />
          </div>
        </Card>
        <Card onClick={() => onClick('Menus')}>
          <div className={styles.imageWrapper}>
            <Menus />
          </div>
        </Card>
        <Card onClick={() => onClick('Addition')}>
          <div className={styles.imageWrapper}>
            <Addition />
          </div>
        </Card>
        <Card onClick={() => onClick('BurgerDeLaMort')}>
          <div className={styles.imageWrapper}>
            <BurgerDeLaMort />
          </div>
        </Card>
      </div>

    </div>);
};

JingleConsole.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default JingleConsole;
